#!/usr/bin/env node

const env = require("../lib/index"), path = require("path");

async function Run() {
    let env_file = "./env.json", runIndex = 2;
    if (process.argv[2] === "--file") {
        env_file = process.argv[3];
        runIndex = 4;
    }
    if (!env_file) {
        env_file = "./env.json"
    }
    await env.SetENV(path.join(process.cwd(), env_file));
    env.Run(process.argv.slice(runIndex));
}

Run();