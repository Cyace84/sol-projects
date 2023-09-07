import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("BEP40Token");

  const name = "BEP40TestToken";
  const symbol = "TBEP40";
  const decimals = 6;
  const totalSupply = 1000000 * 10 ** decimals;

  const transactionData = await Token.getDeployTransaction(
    name,
    decimals,
    totalSupply,
    symbol
  );
  const gasEstimate = await ethers.provider.estimateGas(transactionData);

  const deployedToken = await Token.deploy(name, decimals, totalSupply, symbol);

  console.log("Token deployed to:", deployedToken);
}

main();
