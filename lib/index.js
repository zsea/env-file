const fs = require("fs").promises
    , spawn = require('cross-spawn')
    , colors = require('colors')
    ;
async function setENV(file) {
    console.log(`[env-file] loading ${file}`.green)
    try {
        let content = await fs.readFile(file, "utf-8");
        content = JSON.parse(content);
        for (let key in content) {
            console.log(`[env-file] ${key}=${content[key]}`.green)
            process.env[key] = content[key];
        }
    }
    catch (e) {

    }
}
function Run(args) {
    let command = args[0], commandArgs = args.slice(1);
    spawn(command, commandArgs, { stdio: 'inherit' });
}
module.exports = {
    SetENV: setENV,
    Run: Run
}