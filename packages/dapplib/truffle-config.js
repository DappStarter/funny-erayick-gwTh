require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stone rice magnet coffee gloom flower army gasp'; 
let testAccounts = [
"0x3ed6f82cb4837e72a124dab19c6f52c2aec58929a29887bbb19f29f0b620d64a",
"0xeaecd0c091b73e4378b6f24ecfbc4b061da2183d643377076244d333f9cf786c",
"0x241289a5f41513926161d450b2d619fb03fcc74a7d20495b0c3a6ae4cd986abb",
"0x1a0366789524312ff2b70dca6411f9d665f0d7efca952452dd49815766b8656b",
"0x32447e856fea216e3702dc34c953884c13aaeb76d16f2269e30bc3215a444457",
"0x2bb27ce97499f10c0e09249d77d0b2dd7cf76df45bdd5d1b41b3aa17fc583a8d",
"0xf9978a7f7f56a30712a234e997eafb0ac391cdae581860074032b4a8f6078fb1",
"0xde8e89049a02f911fbeb3452c3aa20693a4c11e1ce090979c58fd102a7249a56",
"0x3df4d70811c29115229bd2a63256b380af8249892418d1b8857c5e4a8835736c",
"0x14e2f811eb4ca72216e0fa0d2f2f10918d2f7882177e8bd2b0f44b548dac2ff7"
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
            version: '^0.8.0'
        }
    }
};

