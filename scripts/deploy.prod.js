const { ethers } = require("hardhat");

async function main() {
  const params = {
    permit2: "0x90a8a8E2Abb67d300593C714b687De109B4bCE5e",
    weth9: "0x5300000000000000000000000000000000000011",
    seaportV1_5: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    seaportV1_4: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    openseaConduit: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    nftxZap: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    x2y2: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    foundation: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    sudoswap: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    elementMarket: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    nft20Zap: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    cryptopunks: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    looksRareV2: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    routerRewardsDistributor: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    looksRareRewardsDistributor: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    looksRareToken: "0xdF3494cf1423297f47759f7F851440D6bF7891e6", // UNSUPPORTED_PROTOCOL
    v2Factory: "0x8D2A8b8F7d200d75Bf5F9E84e01F9272f90EFB8b",
    v3Factory: "0xFf8578C2949148A6F19b7958aE86CAAb2779CDDD",
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
