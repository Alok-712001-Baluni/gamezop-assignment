import React from "react";
import SportsRacing from "../../components/SportsRacing";
import { getAllGames } from "@/utils/api";

const ArcadeGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }
  return (
    <div>
      <SportsRacing data={data.games} showAllGames={true} />
    </div>
  );
};

export default ArcadeGames;
