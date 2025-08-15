const NUM_PLAYERS = 4 // only 4 supported for now

const pname = 'KillerDucky'
const pid = 120517763 // this should actually come from the first server call!
const pidx = 0
const NORMALIZE_TO_RANK = 'S1'

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

async function loadPlayerData(nickname) {
    let res, data
    res = await fetch(`/player/${nickname}`)
    data = await res.json()
    return data
}

async function main() {
    let games
    games = await loadPlayerData(pname)
    // console.log(games)
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
    console.log(results)

    let chartDict =  
        {
            type: 'line',
            data: {
                labels: results.map((_, i) => i+1),
                datasets: [
                ]
            }
        }
    // for (let window_size of [100, 200, 400]) {
    for (let window_size of [100]) {
        chartDict.data.datasets.push({
            label: `Expected Score ${window_size}`,
            data: exponential_moving_average(results, window_size)
        })
        chartDict.data.datasets.push({
            label: `Expected Score assuming ${NORMALIZE_TO_RANK} ${window_size}`,
            data: exponential_moving_average(gradingScoresNorm, window_size)
        })
    }

    new Chart(
        document.getElementById('ES'),
        chartDict
    )
}

main();
