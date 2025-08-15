import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JSON_DATA_FILENAME = 'amae_data.json'
const app = express();
const PORT = 3000;
const s0 = 'https://5-data.amae-koromo.com/api/v2/pl4/'
// # 12 = 4p Hanchan Jade room, 9 = 4p Hanchan Gold room
// # 11 = 4p Tonpuusen Jade room, 8 = 4p Tonpuusent Gold room
const mode = '16,15,12,11,9,8'
const Color = {16: 'r', 15: 'r', 12: 'g', 11: 'g', 9: 'y', 8: 'y'}
const start_level = 10301

// Serve your HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname));

// Example endpoint to fetch player data (avoids CORS issues)
app.get('/player/:nickname', async (req, res) => {
  const pname = req.params.nickname;
  const url = `https://5-data.amae-koromo.com/api/v2/pl4/search_player/${pname}`;

  let games
  if (true && fs.existsSync(JSON_DATA_FILENAME)) {
    const fileContents = await fs.promises.readFile(JSON_DATA_FILENAME, 'utf8')
    games = JSON.parse(fileContents)
  } else {
      try {
          let pidx = 0
          let res1 = await fetch(url);
          let data1 = await res1.json();
          const result = data1[pidx];
          
          const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
          games = []
          let start = result.latest_timestamp

          for (let i=0; i<20; i++) {
            let s1 = `${s0}player_records/${result.id}/${start}999/1262304000000?limit=500&mode=${mode}&descending=true&tag=`
            console.log(s1)
            const res2 = await fetch(s1)
            const these_games = await res2.json()
            // console.log(these_games)
            console.log(these_games.length)
            await delay(10)
            const length = these_games.length
            if (length == 0) {
                break;
            }
            // console.log(these_games[0])
            // console.log(these_games[these_games.length-1].startTime-1)
            start = these_games[these_games.length-1].startTime-1
            games = games.concat(these_games)
            if (length < 500) {
                break;
            }
          }
          await fs.promises.writeFile(JSON_DATA_FILENAME, JSON.stringify(games, null, 2));
        } catch (err) {
            console.log('Error caught')
            res.status(500).json({ error: err.message });
        }
    }
    res.json(games)
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
