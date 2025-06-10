require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      accounts: {
        count: 10, // Number of accounts
        accountsBalance: "100000000000000000000000" // 10000 ETH
      }
    }
  }
};