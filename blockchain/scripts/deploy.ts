import { ethers } from "hardhat";

async function main() {
  const SpiderCoin = await ethers.getContractFactory("SpiderCoin");

  const spiderCoin = await SpiderCoin.deploy();
  await spiderCoin.deployed()

  console.log("Contract deployed successfully to address:", spiderCoin.adress)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
