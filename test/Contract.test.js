const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile-contract');

const web3 = new Web3(ganache.provider());

let Contract;
let accounts;

beforeEach( async () => {
    // Initialize contract instance and accounts list here
});

describe('Contract', () => {

    it('allows correct behaviour', () => {
        // Add expected behaviour here
    });

    it('doesn\'t allow incorrect behaviour', async () => {
        try{
            // call method that is expected to fail here...
            assert(false);
        }catch(error){
            assert(error);
        }
    });
})