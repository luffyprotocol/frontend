"use client";
import { playerimg } from "@/utils/logos/playerImage";
import { teamLogo } from "@/utils/logos/teamlogo";
import fetchFixtures from "@/utils/fixtureHelpers/FetchFixtures";
import fixtureById from "@/utils/fixtureHelpers/FixtureById";
import Image from "next/image";
import { getPlayerById } from "@/utils/playerHelpers/FetchPlayerById";
import PlayerCard from "@/components/PlayerCard";
import { useState } from "react";
import uploadProfileImg from "@/utils/profileHelpers/uploadprofileImg";

export default function Home() {
  const [img, setimg] = useState<File | null | undefined>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (img) {
      const data = await uploadProfileImg(img, 1001);
      console.log(data.response);
      console.log("uploaded");
    }
  };
  return (
    <div>
      <button
        onClick={async () => {
          // const { message, response } = await fetchFixtures();
          // const { message, response } = await fixtureById(1150754);
          const response = getPlayerById(148);
          console.log(response);
        }}
      >
        Fetch
      </button>
      <img src={teamLogo("1616")} alt="" width={50} height={50} />
      <img src={playerimg(153465)} alt="" width={50} height={50} />
      <PlayerCard playerId={148} />

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Profile Image</label>
        <input
          type="file"
          name="profile"
          id="profile"
          onChange={(e) => {
            if (e.target.files) setimg(e.target.files[0]);
          }}
        />
        <input type="submit" title="submit" />
      </form>
    </div>
  );
}
