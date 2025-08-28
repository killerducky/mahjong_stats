import mysql from "mysql2/promise";

async function main() {
    const db = await mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "mahjong",
        password: process.env.DB_PASS || "strongpassword",
        database: process.env.DB_NAME || "mahjong_stats",
    });

    try {
        // Fetch all players
        const [rows] = await db.execute("SELECT id, nickname, pidx, games FROM player_stats");

        for (const row of rows) {
            let games;
            games = row.games || "[]";

            // Deduplicate by UUID
            const seen = new Set();
            const deduped = [];
            for (const g of games) {
                if (!g.uuid) continue;
                if (!seen.has(g.uuid)) {
                    seen.add(g.uuid);
                    deduped.push(g);
                }
            }

            if (deduped.length !== games.length) {
                console.log(`Cleaned ${row.nickname}:${row.pidx} — removed ${games.length - deduped.length} duplicates`);
                await db.execute("UPDATE player_stats SET games = ? WHERE id = ?", [JSON.stringify(deduped), row.id]);
            }
        }
    } catch (err) {
        console.error("Error:", err);
    } finally {
        db.end();
    }
}

main();
