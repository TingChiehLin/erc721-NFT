import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `${process.env.ALCHEMY_KEY}`,
      accounts: [`${process.env.META_MASK_PRIVATE_API_KEY}`],
      chainId: 11155111,
    },
  },
};

export default config;
