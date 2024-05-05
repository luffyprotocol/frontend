"use client";
import { gameResults, playerIdRemappings } from "@/utils/constants";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import PlayerImage from "./PlayerImage";
import { useAccount } from "wagmi";

interface Player {
  name: string;
  team:
    | "plain"
    | "csk"
    | "rcb"
    | "mi"
    | "dc"
    | "kkr"
    | "pbks"
    | "rr"
    | "srh"
    | "gt"
    | "lsg"
    | "pkbs"
    | "dc";
  type: "bat" | "bowl" | "ar" | "wk";
}

interface PitchProps {
  open: boolean;
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setindex: React.Dispatch<React.SetStateAction<number>>;
  playerPositions: Player[];
  points: any[];
  setPoints: (number: any) => void;
  showPoints: boolean;
}

const Pitch: React.FC<PitchProps> = ({
  open,
  slug,
  setOpen,
  setindex,
  index,
  playerPositions,
  points,
  setPoints,
  showPoints,
}) => {
  const { address } = useAccount();
  const handlePlayerClick = (index: number) => {
    console.log("Player", index, "clicked");
    setindex(index);
    setOpen(true);
  };

  return (
    <div className="flex justify-start  relative w-[85%] mx-auto">
      {/* <div className="relative rounded-lg shadow-md border-2 border-black bg-[url('/pitchbase.png')] w-full bg-contain  h-[122svh] bg-no-repeat">
        {playerPositions.map((player, index) => (
          <>
            <PlayerImage
              name={player.name}
              key={index}
              index={index}
              player={player}
              points={points}
              showPoints={showPoints}
              onClick={() => handlePlayerClick(index)}
            />
            <div></div>
          </>
        ))}
      </div> */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="flex justify-center items-center relative ">
          <img
            className="rounded-lg shadow-md border-2 border-black w-full"
            src="/pitchbase.png"
            alt="Pitch"
          />
          {playerPositions.map((player, index) => (
            <>
              <PlayerImage
                name={player.name}
                key={index}
                index={index}
                player={player}
                points={points}
                showPoints={showPoints}
                onClick={() => handlePlayerClick(index)}
              />
              <div></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pitch;
