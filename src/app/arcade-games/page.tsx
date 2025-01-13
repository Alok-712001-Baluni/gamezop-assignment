import React from "react";
import Arcade from "../../components/Arcade";
import { getAllGames } from "@/utils/api";

const ArcadeGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }

  return (
    <div>
      <Arcade data={data.games} showAllGames={true} />
    </div>
  );
};

export default ArcadeGames;
