const NUM_PLAYERS = 4 // only 4 supported for now
const RANK_LINES = ['M1', 'M2', 'M3', 'S1', 'S2', 'S3']
const s0 = 'https://5-data.amae-koromo.com/api/v2/pl4/'
// # 12 = 4p Hanchan Jade room, 9 = 4p Hanchan Gold room
// # 11 = 4p Tonpuusen Jade room, 8 = 4p Tonpuusent Gold room
const mode = '16,15,12,11,9,8'
const Color = {16: 'r', 15: 'r', 12: 'g', 11: 'g', 9: 'y', 8: 'y'}
const start_level = 10301
// if (NUM_PLAYERS == 4) {
// } else if (NUM_PLAYERS == 3) {
    // const s0 = 'https://5-data.amae-koromo.com/api/v2/pl3/'
    // const mode = '26,24,22,25,23,21'
    // const Color = {26: 'r', 25: 'r', 24: 'g', 23: 'g', 22: 'y', 21: 'y'}
    // const start_level = 20301
// }
const modeId2RoomTypeFull = {16: 'Throne S', 15: 'Throne E', 12:'Jade S', 11:'Jade E', 9:'Gold S', 8:'Gold E'} 
const modeId2RoomColor = {16: 'T', 15: 'T', 12:'J', 11:'J', 9:'G', 8:'G'} // Gold or Jade
const modeId2RoomLength = {16: 'S', 15: 'E', 12:'S', 11:'E', 9:'S', 8:'E'} // Hanchan (South) or Tonpuusen (East)
const last_place_penalty = {
    'S': {'E1':-80, 'E2':-100, 'E3':-120, 'M1':-165, 'M2':-180, 'M3':-195, 'S1':-210, 'S2':-225, 'S3':-240},
    'E':  {'E1':-40, 'E2':-50, 'E3':-60, 'M1':-80, 'M2':-90, 'M3':-100, 'S1':-110, 'S2':-120, 'S3':-130}
}

const d = ['?', 'E', 'M', 'S', '?', 'C'];
const C1_LEVEL = 10701 // TODO just make forward/reverse maps instead of all this math?
const level_dan = level => `${d[Math.floor(level / 100) % 100 - 2]}${level % 100}`;
const level_pt_base = (level) => {
    let p = {301: 6, 302: 7, 303: 10, 401: 14, 402: 16, 403: 18, 501: 20, 502: 30, 503: 45}
    return (Math.floor(level / 100) % 100 >= 6) ? 5000 : p[level % 1000] * 100;
};
let level_pt_sum_base = {}
let sum = level_pt_base(10301)
for (let level of [10301, 10302, 10303, 10401, 10402, 10403, 10501, 10502, 10503]) {
    level_pt_sum_base[level] = sum
    sum += level_pt_base(level)
}


function exponential_moving_average(data, half_life) {
    const alpha = 1 - Math.pow(0.5, 1 / half_life)
    const initialSMA = data.slice(0, half_life)
        .reduce((sum, val) => sum + val, 0) / Math.min(half_life, data.length)
    const ema = [initialSMA]
    for (let i = 1; i < data.length; i++) {
        ema.push(alpha * data[i] + (1-alpha)*ema[i-1])
    }
    return ema
}

function slidingWindowAverage(data, halfLife) {
    const n = data.length;
    const initialSMA = data.slice(0, halfLife).reduce((sum, val) => sum + val, 0) / Math.min(halfLife, n);
    
    // Fill the first halfLife values with initial SMA
    const result = Array(Math.min(halfLife, n)).fill(initialSMA);
    
    for (let i = 0; i <= n - halfLife; i++) {
        const window = data.slice(i, i + halfLife);
        const avg = window.reduce((sum, val) => sum + val, 0) / halfLife;
        result.push(avg);
    }
    
    return result;
}

function calcMovingAverage(data, windowSize, lambdaAvg) {
    const filtered = data.filter(v => v !== null)
    if (filtered.length == 0) {
        return Array(data.length).fill(null)
    }
    const averaged = lambdaAvg(filtered, windowSize)
    const finalResult = []
    let i=0;
    for (const value of data) {
        if (value === null) {
            finalResult.push(null);
        } else {
            finalResult.push(averaged[i]);
            i++;
        }
    }
    return finalResult
}

async function loadPlayerData(nickname, pidx) {
    let res, data
    res = await fetch(`/player/${nickname}/${pidx}`)
    data = await res.json()
    data.games.reverse() // TODO Where should this really be done?
    return data
}

class Player {
    constructor(chartContainerEl, pname, pidx) {
        this.chartContainerEl = chartContainerEl
        this.pname = pname
        this.pidx = pidx
        // this.uuid = uuid
        this.normalizeToRankLine = 3
        this.NORMALIZE_TO_RANK = RANK_LINES[this.normalizeToRankLine]
        this.generateBtn = this.chartContainerEl.querySelector('.generate');
        this.pnameBtn = this.chartContainerEl.querySelector('.pname')
        this.pnameBtn.value = this.pname
        this.xminEl = this.chartContainerEl.querySelector('.xmin')
        this.ESChart = this.chartContainerEl.querySelector('.ESChart')
        this.RankPointChart = this.chartContainerEl.querySelector('.RankPointChart')
        this.actualXmaxValue
        this.xminEl.addEventListener('change', () => this.relayout());

        this.last_place_normalize = {}
        for (const type in last_place_penalty) {
            // Add this amount to the points iff we were 4th to normalize it to normalize_to_rank
            this.last_place_normalize[type] = {};
            for (const k in last_place_penalty[type]) {
                this.last_place_normalize[type][k] = last_place_penalty[type][this.NORMALIZE_TO_RANK] - last_place_penalty[type][k]
            }
        }

        this.generateBtn.addEventListener('click', ()=>{
            pname = this.pnameBtn.value
            this.generate();
        });
    }
    relayout() {
        Plotly.relayout(this.ESChart, { 'xaxis.range': [Math.max(0, this.actualXmaxValue - this.xminEl.value), this.actualXmaxValue] })
        Plotly.relayout(this.RankPointChart, { 'xaxis.range': [Math.max(0, this.actualXmaxValue - this.xminEl.value), this.actualXmaxValue] })
    }
        
    async generate() {
        let games
        let data = await loadPlayerData(this.pname, this.pidx)
        this.uuid = data.id
        games = data.games
        console.log(this.pname)
        console.log(games)
        // console.log(games[0])
        
        let prevGame = null
        for (let game of games) {
            game.player = game.players.find(p => p.accountId == this.uuid)
            const players_sorted = [...game.players].sort((a, b) => a.gradingScore - b.gradingScore);
            players_sorted.forEach((player, index) => {
                player.placement = players_sorted.length - index
            })
            game.player.gradingScoreNorm = game.player.gradingScore
            if (game.player.placement == 4) {
                game.player.gradingScoreNorm += this.last_place_normalize[modeId2RoomLength[game['modeId']]][level_dan(game.player['level'])]
            }
            if (!prevGame || prevGame.player.level != game.player.level) {
                game.player.rankPoints = level_pt_sum_base[game.player.level] + game.player.gradingScore
                // console.log(game.player.rankPoints)
            } else {
                game.player.rankPoints = prevGame.player.rankPoints + game.player.gradingScore
            }
            prevGame = game
            // console.log(game.player)
        }
        games = games.filter(game => game.player.level < C1_LEVEL)
        const x = games.map((_, i) => i + 1); // x-axis: game numbers
        this.actualXmaxValue = x.length
        const windowSizes = [100, 200, 400];

        let traces = []

        for (let [lambdaStr, lambdaFunc] of [["EMA", exponential_moving_average], ["Sliding", slidingWindowAverage]]) {
            for (const [key, value] of Object.entries(modeId2RoomTypeFull)) {
                let numMatch = games.filter(game => game.modeId == key).length
                let attr = games.map(game => game.modeId == key ? game.player.gradingScoreNorm : null)
                if (numMatch/games.length < 0.05) {
                    continue
                }
                for (let windowSize of windowSizes) {
                    let ema = calcMovingAverage(attr, windowSize, lambdaFunc)
                    traces.push(
                        {
                            x: x,
                            y: ema,
                            mode: 'lines',
                            name: `${value} ${lambdaStr} ${windowSize}`,
                            visible: lambdaStr == "Sliding" ? false : true,
                            // visible: lambdaStr == "Sliding" ? "legendonly" : true,
                        }
                    )
                }
            }
        }

        // const yValues = traces.flatMap(trace => trace.y); // combine all y values
        // const yMin = Math.min(...yValues);
        // const yMax = Math.max(...yValues);
        this.actualXmaxValue = x.length

        let layout = {
            title: {
                text: `Expected Scores for ${this.pname} [${this.pidx}] assuming ${this.NORMALIZE_TO_RANK}`,
            },
            margin: { t: 50, b: 50, l: 50, r: 50 },
            xaxis: { title: 'Game #' },
            yaxis: { 
                title: 'Score',
                // fixedrange: true,
                // range: [yMin-5, yMax+5],
            },
            legend: {
                x: 0.5,
                y: -0.1,
                xanchor: 'center',
                yanchor: 'top',
                orientation: 'h',
            },
            shapes: [
            ],
            annotations: [
            ],
        };
        for (let line=0; line<6; line++) {
            layout.shapes.push({
                    type: 'line', 
                    x0: 0, 
                    x1: 1,
                    y0: (line-this.normalizeToRankLine)*15.0/4.0,
                    y1: (line-this.normalizeToRankLine)*15.0/4.0,
                    xref: 'paper', 
                    yref: 'y',
                    line: {
                        color: 'blue', 
                        width: 0.5,
                        dash: 'solid',
                    }

                }
            )
            layout.annotations.push({
                    x: 0,
                    y: (line-this.normalizeToRankLine)*15.0/4.0+1,
                    xref: 'paper',
                    yref: 'y',
                    text: RANK_LINES[line],
                    showarrow: false,
                    xanchor: screenLeft,
                    font: {
                        color: 'blue',
                        size: 12,
                    }
                }
            )
        }
        Plotly.newPlot(this.ESChart, traces, layout, { responsive: true });

        traces = []
        traces.push({
                x: x,
                y: games.map(game => game.player.rankPoints),
                mode: 'lines',
                name: `rp`,
            }
        )

        layout = {
            title: {
                text: `Rank Points for ${this.pname} [${this.pidx}]`,
            },
            margin: { t: 50, b: 50, l: 50, r: 50 },
            xaxis: { title: 'Game #' },
            yaxis: { 
                title: 'Score',
            },
            legend: {
                x: 0.5,
                y: -0.1,
                xanchor: 'center',
                yanchor: 'top',
            },
            shapes: [
            ],
            annotations: [
            ],
        }
        prevGame = null
        let prevChange = 0
        for (let [index, game] of games.entries()) {
            if (prevGame && prevGame.player.level != game.player.level || index == games.length-1) {
                // console.log("level=", game.player.level, level_dan(game.player.level))
                for (let x of [prevChange, index]) {
                    layout.shapes.push({
                            type: 'line', 
                            x0: x, 
                            x1: x,
                            y0: level_pt_sum_base[prevGame.player.level] - level_pt_base(prevGame.player.level),
                            y1: level_pt_sum_base[prevGame.player.level] + level_pt_base(prevGame.player.level),
                            xref: 'x', 
                            yref: 'y',
                            line: {
                                color: 'black', 
                                width: 0.5,
                                dash: 'solid',
                            }
                        }
                    )
                }
                layout.annotations.push({
                    x: prevChange,
                    y: level_pt_sum_base[prevGame.player.level] - level_pt_base(prevGame.player.level),
                    text: level_dan(prevGame.player.level),
                    showarrow: false,
                    xanchor: 'left',
                    yanchor: 'bottom',
                    font: { size:10, color: 'black'},
                })
                for (let y of [-1, 0, 1]) {
                    layout.shapes.push({
                            type: 'line',
                            x0: prevChange,
                            x1: index,
                            y0: level_pt_sum_base[prevGame.player.level] + y*level_pt_base(prevGame.player.level),
                            y1: level_pt_sum_base[prevGame.player.level] + y*level_pt_base(prevGame.player.level),
                            xref: 'x',
                            yref: 'y',
                                                line: {
                                color: 'black', 
                                width: 0.5,
                                dash: 'solid',
                            }
                        }
                    )
                }
                prevChange = index
            }
            prevGame = game
        }
        for (let y of [-1, 0, 1]) {
            layout.annotations.push({
                x: 1.01,
                y: level_pt_sum_base[prevGame.player.level] + y*level_pt_base(prevGame.player.level),
                xref: 'paper',
                yref: 'y',
                xanchor: 'left',
                text: ((y+1)*level_pt_base(prevGame.player.level)).toString(),
                showarrow: false,
                font: { size:12, color: 'black'},
                align: 'left',
            })
        }

        Plotly.newPlot(this.RankPointChart, traces, layout, { responsive: true });
        this.relayout()
    }
}

async function main() {
    let players = [
        ["KillerDucky", 0],
        ["StickThief", 0],
        ["mort", 2],
        ["navitas", 1],
    ]
    let charts = []
    for (let p of players) {
        let chart
        if (charts.length == 0) {
            chart = document.querySelector('.chart-container')
        } else {
            chart = charts[0].cloneNode(true)
            document.body.appendChild(chart)
        }
        charts.push(chart)
        new Player(chart, p[0], p[1])
    }
}

main()
