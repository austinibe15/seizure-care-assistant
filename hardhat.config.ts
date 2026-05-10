require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {

  solidity: "0.8.20",

  networks: {

    mantle: {

      url: "https://rpc.testnet.mantle.xyz",

      chainId: 5003,

      accounts: [process.env.PRIVATE_KEY]

    }

  }

};