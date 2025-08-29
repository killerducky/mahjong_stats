const url = "https://nodocchi.moe/";
async function main() {
    let res = await fetch(`${url}api/listuser.php?name=KillerD`);
    let data = await res.json();
    console.log(JSON.stringify(data, null, 2));
}

main();
