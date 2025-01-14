import React, { Suspense } from "react";
import SportsRacing from "../../components/SportsRacing";
import { getAllGames } from "@/utils/api";

const ArcadeGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }
  return (
    <div>
      <Suspense fallback={<p>Loading Sports and Racing games..........</p>}>
        <SportsRacing data={data.games} showAllGames={true} />
      </Suspense>
    </div>
  );
};

export default ArcadeGames;
