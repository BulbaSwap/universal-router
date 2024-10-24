const { ethers } = require("hardhat");

async function main() {
  const params = {
    permit2: "0x9a5450d9c71fa9d6bF8Df25e49313D7C3C42de60",
    weth9: "0x5300000000000000000000000000000000000011",
    seaportV1_5: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    seaportV1_4: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    openseaConduit: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    nftxZap: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    x2y2: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    foundation: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    sudoswap: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    elementMarket: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    nft20Zap: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    cryptopunks: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    looksRareV2: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    routerRewardsDistributor: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    looksRareRewardsDistributor: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    looksRareToken: ethers.ZeroAddress, // UNSUPPORTED_PROTOCOL
    v2Factory: "0x593E80859079f38D4c19459f1E4f55A44a86bCcC",
    v3Factory: "0xe5DE50EdC20750eFfE8833bF3Bf5d72892b7AD54",
    pairInitCodeHash:
      "0xe0d4c9aa46e27dc0f29e1fbc328dadb3455bbfc8dd936b2ea1abd5d028cc2813",
    poolInitCodeHash:
      "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  };

  const UniversalRouter = await ethers.getContractFactory("UniversalRouter");

  const router = await UniversalRouter.deploy(params);

  console.log("UniversalRouter deployed to:", router.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
