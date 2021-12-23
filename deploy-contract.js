const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile-contract');
const path = require("path");
const fs = require("fs");
const dotenv = require('dotenv');

dotenv.config();
const LOG_PATH = path.resolve(__dirname, 'logs', 'log.txt');

const provider = new HDWalletProvider(
    // Make sure you create a .env file and add your wallet private key and infura url
    process.env.PRIVATE_KEY, process.env.INFURA_URL
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('[!] Deploying contract through ' + accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
                   .deploy({ data: bytecode })
                   .send({ from: accounts[0], gas: '1000000' });
    
    // Logging
    const data = new Date().toLocaleString() + "\nDeployer Address: " + accounts[0] + "\nContract Address: " + result.options.address + "\nInterface:" + interface +"\n\n";
    fs.appendFile(LOG_PATH, data, (error) => {
       if(error) console.log('[-] Error in writing to log file: ' + error ); 
       else console.log('[+] Contract Deployed!')
    });
    provider.engine.stop();
}

deploy();