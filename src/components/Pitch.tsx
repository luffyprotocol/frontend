import React from "react";
import PlayerImage from "./PlayerImage";

interface Player {
  name: string;
  team:
    | "avatar"
    | "atlanta-united"
    | "austin"
    | "charlotte"
    | "chicago-fire"
    | "fc-cincinnati"
    | "columbus-crew"
    | "dc-united"
    | "inter-miami"
    | "cf-montreal"
    | "new-england-revolution"
    | "nycfc"
    | "orlando-city"
    | "philadelphia-union"
    | "toronto"
    | "colorado-rapids"
    | "fc-dallas"
    | "houston-dynamo"
    | "la-galaxy"
    | "lafc"
    | "minnesota-united"
    | "nashville"
    | "portland-timbers"
    | "real-salt-lake"
    | "san-jose-earthquakes"
    | "seattle-sounders"
    | "sporting-kc"
    | "st-louis-city"
    | "vancouver-whitecaps";
}

interface PitchProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setindex: React.Dispatch<React.SetStateAction<number>>;
  playerPositions: Player[];
  points: any[];
  showPoints: boolean;
  viceCaptain: number;
  captain: number;
}

const Pitch: React.FC<PitchProps> = ({
  setOpen,
  setindex,
  playerPositions,
  points,
  showPoints,
  viceCaptain,
  captain,
}) => {
  const handlePlayerClick = (index: number) => {
    console.log("Player", index, "clicked");
    setindex(index);
    setOpen(true);
  };

  return (
    <div className="flex justify-centerrelative mx-auto">
      <div className="relative isolate overflow-hidden pt-14">
        <div className="flex justify-center items-center relative ">
          <div>
            <img
              className="rounded-lg w-full flex justify-center items-center"
              src="/pitch.png"
              key={2}
              alt="Pitch"
            />
          </div>
          <div className="pl-2 ">
            {playerPositions.map((player, index) => (
              <div className=" pt-5" key={index}>
                <PlayerImage
                  name={player.name}
                  key={index}
                  index={index}
                  player={player}
                  points={points}
                  showPoints={showPoints}
                  onClick={() => handlePlayerClick(index)}
                  viceCaptain={viceCaptain}
                  captain={captain}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pitch;
