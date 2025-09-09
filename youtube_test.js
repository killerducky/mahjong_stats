import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
const playlistId = "PLlBl-XBd9MrYAUQN4k-nn0S5b9Y1V127f";
const apiKey = process.env.API_KEY; // read from .env

async function getPlaylistVideos() {
    let videos = [];
    let nextPageToken = "";
    if (fs.existsSync("data.jsonl")) {
        fs.renameSync("data.jsonl", "data.jsonl.bak");
        console.log("Moved old raw_data.jsonl to raw_data.jsonl.bak");
    }
    do {
        let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=${nextPageToken}&playlistId=${playlistId}&key=${apiKey}`;
        let res = await fetch(url);
        let data = await res.json();

        fs.appendFileSync("data.jsonl", JSON.stringify(data) + "\n");

        videos.push(
            ...data.items.map((item) => ({
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
            }))
        );

        nextPageToken = data.nextPageToken || "";
    } while (nextPageToken);

    fs.writeFileSync("videos.json", JSON.stringify(videos, null, 2));

    return videos;
}

let videos = getPlaylistVideos();
for (let video of videos) {
    video.lastPlayed = null;
    video.playCount = 0;
    video.skipCount = 0;
    video.rating = 7;
    video.tags = [];
    // base this on rating? Or keep separate?
    video.targetPlayRate = 2 / 24; // 2 hours
}

// discard queue or just based on lastPlayed
// 10 two-minute songs targetting once per day
// 120 minute estimated listen time per day
// 60 songs
