const NUM_PLAYERS = 4 // only 4 supported for now

const pname = 'KillerDucky'
const pidx = 0

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

async function loadPlayerData(nickname) {
    let res, data
    console.log("in")
    res = await fetch(`/player/${nickname}`)
    data = await res.json()
    console.log(data)
    console.log("hi")
    return data
}

async function main() {
    let games
    console.log("yo")
    games = await loadPlayerData(pname)
    console.log(games)
    
    let results = []
    for (let game of games) {
        let player = game.players.find(p => p.nickname == pname)
        // console.log(player)
        results.push(player.gradingScore)
    }
    console.log(results)

    new Chart(
        document.getElementById('ES'),
        {
            type: 'line',
            data: {
                datasets: [
                    {
                        data: results,
                    }
                ]
            }
        }
    )
}

main();
