const path = require("path");
const fs = require("fs");
const solc = require("solc");

// Add contract name here
const CONTRACT_NAME = ""

const contractPath = path.resolve(__dirname, "contracts", CONTRACT_NAME + ".sol");
const source = fs.readFileSync(contractPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":" + CONTRACT_NAME];
