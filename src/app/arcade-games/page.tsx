import React, { Suspense } from "react";
import Arcade from "../../components/Arcade";
import { getAllGames } from "@/utils/api";

const ArcadeGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }

  return (
    <div>
      <Suspense fallback={<p>Loading Arcade games...................</p>}>
        <Arcade data={data.games} showAllGames={true} />
      </Suspense>
    </div>
  );
};

export default ArcadeGames;
