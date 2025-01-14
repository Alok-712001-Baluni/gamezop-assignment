import React, { Suspense } from "react";
import Strategy from "../../components/Strategy";
import { getAllGames } from "@/utils/api";

const ArcadeGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }
  return (
    <div>
      <Suspense fallback={<p>Loading Strategy games.............</p>}>
        <Strategy data={data.games} showAllGames={true} />
      </Suspense>
    </div>
  );
};

export default ArcadeGames;
