import React, { Suspense } from "react";
import PuzzleLogic from "../../components/PuzzleLogic";
import { getAllGames } from "@/utils/api";

const ArcadeGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }
  return (
    <div>
      <Suspense
        fallback={<p>Loading Puzzle and Logic games.......................</p>}
      >
        <PuzzleLogic data={data.games} showAllGames={true} />
      </Suspense>
    </div>
  );
};

export default ArcadeGames;
