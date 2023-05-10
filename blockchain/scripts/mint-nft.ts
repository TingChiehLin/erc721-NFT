require("dotenv").config();

const API_URL = process.env.ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/SpiderCoin.sol/SpiderCoin.json");
const contractAddress = "0xB2eEdC19CdE101Ce29F27BB22De7fC8496e9993e";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(
    process.env.DEVELOPER_TEST_PUBLIC_KEY,
    "latest"
  ); //get latest nonce

  //the transaction
  const tx = {
    from: process.env.DEVELOPER_TEST_PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods
      .mintNFT(process.env.DEVELOPER_TEST_PUBLIC_KEY, tokenURI)
      .encodeABI(),
  };
  const signPromise = web3.eth.accounts.signTransaction(
    tx,
    process.env.META_MASK_PRIVATE_API_KEY
  );
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}

mintNFT("ipfs://Qmbr75hiCWgbQDEypphjB9E3nsvRKj8ef6TPcWHNtD9TiN");
