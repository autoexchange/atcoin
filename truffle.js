const mnemonic = "1 2 3 4 5 6 7 8 9 0 1 2";
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      from: '0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2',
      gasPrice: 10000000000,
      gas: 4500000,
      network_id: "*" // Match any network id,
    },
    ropsten:  {
      host: "172.16.10.27",
      port: 8545,
      from: '0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2',
      gasPrice: 10000000000,
      gas: 4500000,
      network_id: "3" // Match any network id,
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      from: '0xe78D229a98eFCA2EB06C987D1cd4A891f50a568F',
      gasPrice: 10000000000,
      gas: 4500000,
      network_id: "3"
    },
    infuraropsten: {
      host: "localhost",
      port: 8545,
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/G2bbwcegsuLDEAnhkd2n")
      },
      from: '0xa1acf6e7cf4317d5850f8669f4c3682164fad9a5',
      gasPrice: 10000000000,
      gas: 4500000,
      network_id: 3
    },
    // infuramainnet: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/G2bbwcegsuLDEAnhkd2n")
    //   },
    //   network_id: 1,
    //   gasPrice: 10000000000,
    //   gas: 4500000,
    //   from: '0x69b3bb7355d49ec0cb8503ff449f8758d7866733'
    // }
  }
};
