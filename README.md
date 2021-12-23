Vue Blockchain Template
=======================

This template provides you with a starter plate for any blockchain project using Vue.js as a front end framework.

It provides a compiler, deployer, and a web3 window to interact .

How to start
------------

1.  Run `npm install` to install all depedancies.
2.  Create a `.env` file and add to it the address of the deployment wallet and the Infura URL as follows:
    
    `PRIVATE_KEY="0x00000..........."` `INFURA_URL="https://rinkeby.infura.io/v3/............"`
    
3.  Add your smart contract in /contracts folder.
4.  Add the smart contract file name in `compile-contract.js`.
5.  Add your tests in `test/Contract.test.js`.
6.  Run `node deploy-contract.js` in the terminal to deploy the contract and obtain the contract address and contract ABI.
7.  Copy ABI and contract address into `contract.js` file. Both ABI and deployed contract address will be logged in `logs/log.txt`

Contact me
----------

For any additional comments or questions, feel free to reach out to me via [SAEED@NUAIMI.NET](mailto:saeed@nuaimi.net)

