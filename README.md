# Universal Router With Hardhat

Deploy dev

```shell
source .env &&  npx hardhat run scripts/deploy.dev.js --network morphDev
```

Verify dev

```shell
npx hardhat verify --network morphDev 0x... --constructor-args dev.arguments.js
```
