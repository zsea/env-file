const env = require("../lib/index") ;

async function Main() {
    await env.SetENV("./env.json");
    console.log("aaa",process.env["aaa"]);
    console.log("PP",process.env["PP"]);
}

Main();