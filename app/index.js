const Web3 = require('web3');
const web3 = new Web3('ws://localhost:9545'); // Connect to your local Truffle network

async function getChainId() {
    try {
        const networkId = await web3.eth.net.getId();
        const chainIdBigInt = BigInt(networkId); // Convert to BigInt
        console.log(`Chain ID (Network ID): ${chainIdBigInt}`);
    } catch (error) {
        console.error('Error fetching chain ID:', error);
    }
}

getChainId();
