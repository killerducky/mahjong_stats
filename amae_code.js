const NUM_PLAYERS = 4 // only 4 supported for now

let pname = ''
const pid = 120517763 // this should actually come from the first server call!
const pidx = 0
const NORMALIZE_TO_RANK_LINE = 3 // S1
const RANK_LINES = ['M1', 'M2', 'M3', 'S1', 'S2', 'S3']
const NORMALIZE_TO_RANK = RANK_LINES[NORMALIZE_TO_RANK_LINE]

const generateBtn = document.getElementById('generate');
const pnameBtn = document.getElementById('pname')
const xminEl = document.getElementById('xmin')
const xmaxEl = document.getElementById('xmax')
let actualXmaxValue
xminEl.addEventListener('change', ()=>{ Plotly.relayout('Chart', { 'xaxis.range': [xminEl.value, Math.min(xmaxEl.value, actualXmaxValue)] })});
xmaxEl.addEventListener('change', ()=>{ Plotly.relayout('Chart', { 'xaxis.range': [xminEl.value, Math.min(xmaxEl.value, actualXmaxValue)] })});
// xmaxEl.addEventListener('change', ()=>{ stats.vmax = Number(vmaxEl.value); draw(); });

generateBtn.addEventListener('click', ()=>{
  pname = pnameBtn.value
  main();
});

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
const last_place_normalize = {}
for (const type in last_place_penalty) {
    // Add this amount to the points iff we were 4th to normalize it to normalize_to_rank
    last_place_normalize[type] = {};
    for (const k in last_place_penalty[type]) {
        last_place_normalize[type][k] = last_place_penalty[type][NORMALIZE_TO_RANK] - last_place_penalty[type][k]
    }
}
// console.log(last_place_normalize)
const d = ['?', 'E', 'M', 'S', '?', 'C'];
// const p = {301: 6, 302: 7, 303: 10, 401: 14, 402: 16, 403: 18, 501: 20, 502: 30, 503: 45};
const level_dan = level => `${d[Math.floor(level / 100) % 100 - 2]}${level % 100}`;

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

async function loadPlayerData(nickname) {
    let res, data
    res = await fetch(`/player/${nickname}`)
    data = await res.json()
    data.reverse()
    return data
}
    
async function main() {
    let games
    games = await loadPlayerData(pname)
    console.log(games)
    // console.log(games[0])
    
    let results = []
    let gradingScoresNorm = []
    for (let game of games) {
        game.player = game.players.find(p => p.nickname == pname)
        const players_sorted = [...game.players].sort((a, b) => a.gradingScore - b.gradingScore);
        players_sorted.forEach((player, index) => {
            player.placement = players_sorted.length - index
        })
        game.player.gradingScoreNorm = game.player.gradingScore
        if (game.player.placement == 4) {
            game.player.gradingScoreNorm += last_place_normalize[modeId2RoomLength[game['modeId']]][level_dan(game.player['level'])]
        }
        // console.log(game.player)
        results.push(game.player.gradingScore)
        gradingScoresNorm.push(game.player.gradingScoreNorm)
    }
    console.log(games)

    const x = gradingScoresNorm.map((_, i) => i + 1); // x-axis: game numbers
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
                        visible: lambdaStr == "Sliding" ? "legendonly" : true,
                    }
                )
            }
        }
    }

    // traces.push(...windowSizes.map(window_size => ({
    //     x: x,
    //     y: exponential_moving_average(gradingScoresNorm, window_size),
    //     mode: 'lines',
    //     name: `EMA ${window_size}`
    // })));
    // traces.push(...windowSizes.map(window_size => ({
    //     x: x,
    //     y: slidingWindowAverage(gradingScoresNorm, window_size*2),
    //     mode: 'lines',
    //     name: `Sliding ${window_size*2}`,
    //     visible: 'legendonly',
    // })));
    const yValues = traces.flatMap(trace => trace.y); // combine all y values
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);
    actualXmaxValue = x.length

    // console.log(traces)

    const layout = {
        title: {
            text: `Expected Scores assuming ${NORMALIZE_TO_RANK}`,
        },
        xaxis: { title: 'Game #' },
        yaxis: { 
            title: 'Score',
            // fixedrange: true,
            // range: [yMin-5, yMax+5],
        },
        legend: {
            x: 0.5,
            y: -0.2,
            xanchor: 'center',
            yanchor: 'top',
        },
        shapes: [
        ],
        annotations: [
        ],
        // updatemenus: [{
        //     type: "buttons",
        //     direction: "right",
        //     x: 0.7,
        //     y: 1.2,
        //     buttons: [
        //         {
        //             label: "X+",
        //             method: "relayout",
        //             args: ["xaxis.range", [0, 50]]
        //         },
        //         {
        //             label: "X-",
        //             method: "relayout",
        //             args: ["xaxis.range", [0,100]]
        //         }
        //     ]
        // }]
    };
    for (let line=0; line<6; line++) {
        layout.shapes.push(
            {
                type: 'line', 
                x0: 0, 
                x1: 1,
                y0: (line-NORMALIZE_TO_RANK_LINE)*15.0/4.0,
                y1: (line-NORMALIZE_TO_RANK_LINE)*15.0/4.0,
                xref: 'paper', 
                yref: 'y',
                line: {
                    color: 'blue', 
                    width: 0.5,
                    dash: 'solid',
                }

            }
        )
        layout.annotations.push(
            {
                x: 0,
                y: (line-NORMALIZE_TO_RANK_LINE)*15.0/4.0+1,
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
    Plotly.newPlot('Chart', traces, layout, { responsive: true });
}

