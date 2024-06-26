"use client";
import Dropdown from "@/components/Game/Dropdown";
import { chainToChainIds, dropdownElements } from "@/utils/constants";
import resolveTokens from "@/utils/game/resolveTokens";
import { getTokenBalance } from "@/utils/transactions/read/token/getTokenBalance";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import React, { useEffect, useState } from "react";

export default function PlaceBet() {
  const { isAuthenticated, primaryWallet, walletConnector } =
    useDynamicContext();
  const [chainsOpen, setChainsOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState(0);
  const [tokensOpen, setTokensOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col space-y-2 justify-center items-center">
      <p className="font-bold text-4xl">Game Page</p>
      <DynamicWidget />
      <p className="mt-6 mb-4 font-semibold text-white text-2xl">Step 1</p>
      <div className="flex space-x-4">
        <Dropdown
          label="Choose Chain"
          selectedOption={selectedChain}
          setSelectedOption={async (chain: number) => {
            if (walletConnector == null) return;
            if (primaryWallet == null) return;
            if (chain == selectedChain) setSelectedChain(0);
            else {
              console.log("PRIMARY WALLET CHAIN");
              console.log(primaryWallet.chain);
              if (
                chainToChainIds[chain] != Number(primaryWallet.chain) &&
                walletConnector.supportsNetworkSwitching()
              ) {
                await walletConnector.switchNetwork({
                  networkChainId: chainToChainIds[chain],
                });
                console.log("Success! Network switched");
              }
              setSelectedChain(chain);
            }
          }}
          options={dropdownElements.chains}
        />
        <Dropdown
          label="Choose Token"
          selectedOption={selectedToken}
          setSelectedOption={async (token: number) => {
            if (token == selectedToken) setSelectedToken(0);
            else setSelectedToken(token);
          }}
          options={resolveTokens(dropdownElements, selectedChain)}
        />
      </div>
      <p className="mt-6 mb-4 font-semibold text-white text-2xl">Step 2</p>
      <p className="text-lg text-white">Bet Amount - 0.1 USDC</p>
      <p className="text-lg text-white">Crosschain Fee - 0.1 ETH</p>
      <p className="text-lg text-white">ETH to USDC Swap Fee - 0.1 ETH</p>
      <p className="mt-6 mb-4 font-semibold text-white text-2xl">Step 3</p>
      <button
        type="button"
        className="my-4 inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        Place Bet 💰
      </button>
      <button
        type="button"
        onClick={async () => {
          if (primaryWallet == null) return;
          // const response = await generateProof({
          //   primaryWallet,
          //   resultsUrl:
          //     "https://amethyst-impossible-ptarmigan-368.mypinata.cloud/ipfs/bafkreic2oubuisvjs6z3zbpnwergd6kpvcx5gfjrf6ttran6d634n6i2sa?pinataGatewayToken=CUMCxB7dqGB8wEEQqGSGd9u1edmJpWmR9b0Oiuewyt5gs633nKmTogRoKZMrG4Vk",
          //   playerIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          // });

          // console.log(response);
        }}
        className="my-4 inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        Generate Proof
      </button>
      {/* {squadHash != "" && (
        <p className="text-white text-xl font-bold">
          {Array.from(Buffer.from(squadHash.slice(2), "hex")).map((e) =>
            e.toString()
          )}
        </p>
      )} */}
      <button
        onClick={async () => {
          await getTokenBalance(
            11155111,
            selectedToken,
            primaryWallet?.address as `0x${string}`
          );
        }}
      >
        Balance
      </button>
    </div>
  );
}
