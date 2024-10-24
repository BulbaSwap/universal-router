require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const devMorphRpcUrl = "https://rpc-holesky.morphl2.io";
const devApiUrl = "https://explorer-api-holesky.morphl2.io/api";
const devBrowserUrl = "https://explorer-holesky.morphl2.io";

const prodMorphRpcUrl = "https://rpc.morphl2.io";
const prodApiUrl = "https://explorer-api.morphl2.io/api";
const prodBrowserUrl = "https://explorer.morphl2.io";

const config = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    morphDev: {
      url: devMorphRpcUrl,
      accounts:
        process.env.PRIVATE_KEY_DEV !== undefined
          ? [process.env.PRIVATE_KEY_DEV]
          : [],
    },
    morphProd: {
      url: prodMorphRpcUrl,
      accounts:
        process.env.PRIVATE_KEY_PROD !== undefined
          ? [process.env.PRIVATE_KEY_PROD]
          : [],
    },
  },
  etherscan: {
    apiKey: {
      morphDev: "no-api-key-required",
      morphProd: "no-api-key-required",
    },
    customChains: [
      {
        network: "morphDev",
        chainId: 2810,
        urls: {
          apiURL: devApiUrl,
          browserURL: devBrowserUrl,
        },
      },
      {
        network: "morphProd",
        chainId: 2818,
        urls: {
          apiURL: prodApiUrl,
          browserURL: prodBrowserUrl,
        },
      },
    ],
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
      viaIR: true,
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: "none",
      },
    },
  },
  sourcify: {
    enabled: false,
  },
};

module.exports = config;
