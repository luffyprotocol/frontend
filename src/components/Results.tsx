import { useEffect, useRef, useState } from "react";
import Status from "./Fixtures/FixtureCard/Status";
import { Player } from "@/utils/interface";
interface ResultsProps {
  status: number;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  topPlayer: Player;
  topPlayerPoints: number;
  totalPoints: number;
  matchMinutes: number;
  setTransactionLoading: (loading: boolean) => void;
  claimPointsTransaction: () => Promise<void>;
}
export default function Results({
  status,
  homeTeam,
  awayTeam,
  homeGoals,
  awayGoals,
  topPlayer,
  totalPoints,
  topPlayerPoints,
  claimPointsTransaction,
}: ResultsProps) {
  return (
    <div className="flex justify-center items-center w-1/2 h-2/3">
      <div className="relative z-20 mx-2 mt-16 w-full">
        <img
          src="/assets/ResultsBox.svg"
          className="border-purrple-600 border-3"
          key={1}
        />
      </div>

      <div className="absolute w-1/3 z-20 h-3/4 over animate__fadeInUp">
        <div className="flex flex-col gap-1 scale-110 h-full w-full bg-no-repeat mt-8 justify-center items-center font-stalinist">
          <Status status={status} />
          <div className="flex font-stalinist capitalize justify-between w-full px-10">
            <p className="w-[35%] text-left text-[#D8485F] sm:text-md text-sm truncate whitespace-nowrap animate__fadeIn">
              {homeTeam}
            </p>
            <p className="text-white">FT</p>
            <p className="w-[35%] text-right text-[#B62DD3] sm:text-md text-sm truncate whitespace-nowrap animate__fadeIn animate__delay-100">
              {awayTeam}
            </p>
          </div>
          <div className="flex font-stalinist capitalize justify-between w-full px-20 ">
            <p className="animate__countUp">{homeGoals}</p>
            <p>-</p>
            <p className="animate__countUp">{awayGoals}</p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex font-stalinist capitalize  w-full px-10 mt-2">
              <div className="text-center text-[#D8485F] sm:text-md text-sm animate__fadeIn">
                <p>Top Player</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full ">
              <img
                src={`https://media.api-sports.io/football/players/${topPlayer.id}.png`}
                alt="toppoints"
                className="w-1/5 flex justify-center items-center border-[2px] bg-black border-red-400 animate__pulse hover:animate__pulse-hover"
              />
            </div>
            <div className="text-xs flex flex-col justify-center items-center w-fit py-1 px-2 mt-2 border-2 border-purple-600  ">
              <p className="animate__countUp">{topPlayer.name}</p>
              <p className="animate__countUp border-t-2 w-full text-center border-red-400">
                {topPlayerPoints}
              </p>
            </div>
          </div>
          <div className="text-sm flex justify-center items-center w-full mt-2"></div>
          <div className="flex font-stalinist capitalize justify-center items-center  w-full px-10 ">
            <div className="text-center text-purple-600 sm:text-md text-sm animate__fadeIn">
              <p>Your Points &nbsp; </p>
            </div>
            <div className="text-sm flex justify-center items-center w-fit ">
              <p className="animate__countUp">{totalPoints} </p>
            </div>
          </div>

          <div className="flex w-full justify-center items-center mt-6 ">
            <button
              className="bg-no-repeat w-fit h-[79px] bg-cover cursor-pointer hover:animate__wobble"
              style={{
                backgroundImage: `url('/assets/LoginBorder.svg')`,
              }}
              onClick={async () => {
                await claimPointsTransaction();
              }}
            >
              <span className="text-xs font-stalinist flex justify-center self-center pt-2   px-8 ">
                Claim Points
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
