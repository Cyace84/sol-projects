import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.5.16",
  networks: {
    hardhat: {},
    mainnet: {
      url: "https://mainnet.infura.io/v3/54a7d8d30d7c4c4b84ff09e3c3ea7bc1",
      accounts: [
        "16898fe03d0248aa4ca74e897fa470525d0c3fb7c8f3dd0282c04a34742e6634",
      ],
    },
    bscMainnet: {
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [""],
    },
  },
};

export default config;
