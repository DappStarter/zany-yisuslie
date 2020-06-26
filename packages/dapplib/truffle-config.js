require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot notable rifle still horn harvest civil army gate'; 
let testAccounts = [
"0xfbb433de6b06f7151e056727f94737aabda921de293321f6202871dab0d1cd1b",
"0xeac7bd4e975d99aa3ad05ed893ed09a1ab7dbd049ef3d2adc6c6f39f5175b580",
"0xae103095e32e61b4d4449bfc383ed2cc86368f2961bfd0fca9bf79ae6e0ecb61",
"0xc59ada2cc072ee081947ea30ba117d1e73a23ddc4143e5cc833ea9bec9993f0b",
"0x2c54ae52edb5826a3a44d36ef6718751ef952444738865ce6507590bce9cc6b9",
"0xea4a13654a75c8158a4203843659dd64c8ce6249b980eff5ae68bdcf2b02f517",
"0xa8a04b5e42c37b2cd5ef585bb41833ca5ce824f32d3cd10279051214cdc4fbc8",
"0x307acc1f94f84ee0bc2808641dd1d3ccc8ea5e8aa796f8ca00ef7dad17ccc29c",
"0x6f6d3d4a306bdce3a36f7a767fef3c2a7c14612a5c6674d17179f25903828b82",
"0x5ef2f201ff716f4bb6544b8b3ca0054f7b95524d7be3c80f0a5d152174c65c8e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
