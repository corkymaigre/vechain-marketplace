const Transaction = require('thor-devkit').Transaction;
const cry = require('thor-devkit').cry;

const userPrivateKey = 'child_private_key';

const txBody = {
    chainTag: 0x27, // Testnet
    blockRef: '0x0000000000000000',
    expiration: 0x3e8,
    clauses: [
        { 
            to: '0x0000000000000000000000000000000000000000',
            value: 0,
            data: '0x'

        }
    ],
    gasPriceCoef: 0,
    gas: 0,
    dependOn: null,
    nonce: 0,
    reserved: {
        features: 1
    }
}

const tx = new Transaction(txBody);

// const signature = tx.sign(userPrivateKey);
const userSignature = cry.secp256k1.sign(tx.signingHash(), Buffer.from(userPrivateKey, 'hex'));
