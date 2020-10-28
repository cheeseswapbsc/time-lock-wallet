module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
       }
     },
  compilers: {
    solc: {
      version: "0.4.26",
      settings: 
            {
        evmVersion: "istanbul",
        optimizer: 
                {
         
         enabled: true,
         runs: 200,
            }
        }
     }
  },
  etherscan: {
         apiKey: "T29J46EVPISXAANQ9IMTMZ12YJ6PHGFQ8Y", 
          },
  sourceFetchers: "etherscan",
};
