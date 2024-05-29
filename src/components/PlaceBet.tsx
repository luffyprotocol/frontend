"use client";
import { use, useEffect, useState } from "react";
import Dropdown from "./Game/Dropdown";
import PlayerProgress from "./Game/PlayerProgress";
import VrfTooltip from "./Game/Tooltip/VrfTooltip";
import { dropdownElements } from "@/utils/constants";
import resolveTokens from "@/utils/resolveTokens";
import getVrfFee from "@/utils/transactions/read/getVrfFee";
import getGasPrice from "@/utils/transactions/read/getGasPrice";

interface PlaceBetProps {
  selectedPlayersCount: number;
  setTransactionLoading: (loading: boolean) => void;
}

export default function PlaceBet({
  selectedPlayersCount,
  setTransactionLoading,
}: PlaceBetProps) {
  const [betInEther, setBetInEther] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [betamount, setBetAmount] = useState(0);
  const [chain, setChain] = useState(0);
  const [token, setToken] = useState(0);
  const [enableRandomness, setEnableRandomness] = useState(false);
  const [crosschainfee, setCrosschainFee] = useState(0);
  const [vrffee, setVrfFee] = useState(0);
  // useEffect(() => {
  //   const getDet = async () => {
  //     const gas = await getGasPrice(chain);
  //     setGasPrice(gas);
  //   };
  //   getDet();
  // }, [chain]);
  return (
    <div className="flex justify-center items-center w-1/2 h-2/3">
      <div className=" relative z-10 mx-2 mt-16">
        <img src="/assets/FixBorder.svg" className=" w-fit h-2/3" />
      </div>
      <div className="absolute  w-1/3 inset-y-80 z-20  mt-24 h-2/3">
        <div className=" flex flex-col mx-2 mt-16 justify-center items-center 2xl:gap-28 min-[1400px]:gap-20">
          <div className="">
            <PlayerProgress noPlayers={selectedPlayersCount} />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="flex w-full font-stalinist text-[10px] justify-around">
              <p className="text-[10px]">Chain</p>
              <p className="text-[10px]">Token</p>
            </div>
            <div
              className="flex  gap-4 justify-start items-start w-full sm:flex-row flex-col"
              style={{ transform: "scale(.60)" }}
            >
              <Dropdown
                label={
                  chain == 0
                    ? "Choose Chain"
                    : dropdownElements.chains[chain - 1].name
                }
                selectedOption={chain}
                setSelectedOption={setChain}
                options={dropdownElements.chains}
              />
              <Dropdown
                label={
                  token == 0
                    ? "Choose Token"
                    : dropdownElements.tokens[token - 1].name
                }
                selectedOption={token}
                setSelectedOption={setToken}
                options={resolveTokens(dropdownElements, chain - 1)}
              />
            </div>
          </div>
          <div className="flex gap-10 mt-2">
            <div>
              <div className="flex flex-col mt-2 justify-center items-center">
                <p className="text-md  font-stalinist text-slate-500">
                  Bet Amount
                </p>
                <p className="text-xl  font-stalinist  ">
                  {betInEther}&nbsp;
                  <span className=" text-[#d94956]">
                    {token < 2
                      ? chain > 1
                        ? "ETH"
                        : "AVAX"
                      : dropdownElements.tokens[token - 1].name}
                  </span>
                </p>
              </div>
              <div className="flex mt-2 justify-center items-center">
                <img src="/assets/gas.png" alt="chain" className=" -mt-1" />
                <p className="text-[10px] font-stalinist text-center">
                  {gasPrice} gwei
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-2 justify-center items-center">
                <p className="text-md  font-stalinist text-slate-500">
                  Cross Chain Fee
                </p>
                <p className="text-xl  font-stalinist  ">
                  {crosschainfee}&nbsp;
                  <span className=" text-[#d94956]">
                    {token < 2
                      ? chain > 1
                        ? "ETH"
                        : "AVAX"
                      : dropdownElements.tokens[token - 1].name}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={() => {
                      setEnableRandomness(!enableRandomness);
                    }}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border  after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#410C5E]"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 font-stalinist">
                    Randomness
                  </span>
                </label>
              </div>
              <div className="ml-4 mt-0">
                <VrfTooltip />
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-2 justify-center items-center">
                <p className="text-md  font-stalinist text-slate-500">
                  VRF Fee
                </p>
                <p className="text-xl  font-stalinist  ">
                  {vrffee}&nbsp;
                  <span className=" text-[#d94956]">
                    {token < 2
                      ? chain > 1
                        ? "ETH"
                        : "AVAX"
                      : dropdownElements.tokens[token - 1].name}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center items-center mt-28">
              <button
                className={` bg-no-repeat  w-fit bg-cover `}
                style={{
                  backgroundImage: `url('/assets/LoginBorder.svg')`,
                  backgroundSize: "contain",
                }}
                onClick={() => {
                  setTransactionLoading(true);
                }}
              >
                <span className="text-[12px] font-stalinist flex justify-center self-center p-7 cursor-pointer text-center -ml-2">
                  Submit Squad
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}