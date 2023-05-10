"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Inter } from "next/font/google";

import { contractAbi, contractAddress } from "@/lib/constant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [account, setAccount] = useState<string>("");
  const [adsdress, setAdsdress] = useState<string>("");
  const [contract, setContract] = useState<undefined | null>(null);
  const [provider, setProvider] = useState<undefined | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { ethereum } = window;

  // const connectWallet = async () => {
  //   if (ethereum) {
  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     setAccount(accounts[0]);
  //   } else {
  //     return alert("Please install metamask wallet");
  //   }
  // };

  useEffect(() => {
    const provider = new ethers.BrowserProvider(ethereum);
    const connectWallet = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Signer Address:", (await signer).getAddress());
        const address = (await signer).getAddress();
        setAdsdress(await address);
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          await signer
        );
        console.log("contract:", contract);
      } else {
        alert("Please install metamask wallet");
      }
    };

    provider && connectWallet();
  }, [ethereum]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl "></div>
    </main>
  );
}
