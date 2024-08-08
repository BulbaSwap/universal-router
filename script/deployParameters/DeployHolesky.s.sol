// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import {DeployUniversalRouter} from '../DeployUniversalRouter.s.sol';
import {RouterParameters} from 'contracts/base/RouterImmutables.sol';

contract DeployHolesky is DeployUniversalRouter {
    function setUp() public override {
        params = RouterParameters({
            permit2: 0x9a5450d9c71fa9d6bF8Df25e49313D7C3C42de60,
            weth9: 0x5300000000000000000000000000000000000011,
            seaportV1_5: UNSUPPORTED_PROTOCOL,
            seaportV1_4: UNSUPPORTED_PROTOCOL,
            openseaConduit: UNSUPPORTED_PROTOCOL,
            nftxZap: UNSUPPORTED_PROTOCOL,
            x2y2: UNSUPPORTED_PROTOCOL,
            foundation: UNSUPPORTED_PROTOCOL,
            sudoswap: UNSUPPORTED_PROTOCOL,
            elementMarket: UNSUPPORTED_PROTOCOL,
            nft20Zap: UNSUPPORTED_PROTOCOL,
            cryptopunks: UNSUPPORTED_PROTOCOL,
            looksRareV2: UNSUPPORTED_PROTOCOL,
            routerRewardsDistributor: UNSUPPORTED_PROTOCOL,
            looksRareRewardsDistributor: UNSUPPORTED_PROTOCOL,
            looksRareToken: UNSUPPORTED_PROTOCOL,
            v2Factory: 0x7A8aa7cDdB2846CDb3cC792FD47848e28AeEfdB2,
            v3Factory: 0xe5DE50EdC20750eFfE8833bF3Bf5d72892b7AD54,
            pairInitCodeHash: 0x1140ae914d176ac1defdd79292e8a309bf49f7c645ac011435c6e8b75dff6b64,
            poolInitCodeHash: 0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54
        });

        unsupported = address(0);
    }
}
