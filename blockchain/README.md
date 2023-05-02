# ERC721 Hardhat Project

This project demonstrates a basic Hardhat use case for ERC721. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
## Remember to create ``.env file``

```shell
ALCHEMY_KEY="Add your HTTPS API Key"
META_MASK_PRIVATE_API_KEY="Export your wallet Key"
```

### Learning Resources

Some of issues I resolved and learned from

- [Not found: File import callback not supported](https://stackoverflow.com/questions/72013828/source-openzeppelin-contracts-token-erc721-erc721-sol-not-found-file-import)
- [Error: EISDIR: illegal operation on a directory, read](https://github.com/NomicFoundation/hardhat/issues/1439)