import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JSON_DATA_BASE_FILENAME = 'json_db/amae_data'
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
app.get('/player/:nickname/:pidx', async (req, res) => {
  try {
    const pname = req.params.nickname
    const pidx = req.params.pidx
    const url = `https://5-data.amae-koromo.com/api/v2/pl4/search_player/${pname}`;

    let data
    let games
    let json_fn = `${JSON_DATA_BASE_FILENAME}_${pname}.json`
    if (true && fs.existsSync(json_fn)) {
      const fileContents = await fs.promises.readFile(json_fn, 'utf8')
      data = JSON.parse(fileContents)
    } else {
      data = { pnames : {} }
    }
    if (pname in data.pnames) {
      games = data.pnames[pname].games
    } else {
        console.log('server fetch', pname)
        let res1 = await fetch(url);
        let data1 = await res1.json();
        const result = data1[pidx];
        data.pnames[pname] = result
        
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
        data.pnames[pname].games = games
        await fs.promises.writeFile(json_fn, JSON.stringify(data, null, 2));
      }
      // console.log(games[0])
      res.json(data.pnames[pname])
    } catch (err) {
      console.log('Error caught')
      console.log(err)
      res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
