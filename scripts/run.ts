import { ethers } from "hardhat";

async function main() {
  const mnemonic =
    "subway dial unhappy soldier save camera clarify reopen detail bubble magnet dismiss";

  const wallet = ethers.Wallet.fromPhrase(mnemonic);

  console.log(wallet.privateKey);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
