import React, { Suspense } from "react";
import Action from "../../components/Action";
import { getAllGames } from "@/utils/api";

const ActionGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }

  return (
    <div>
      <Suspense fallback={<p>Loading action games...............</p>}>
        <Action data={data.games} showAllGames={true} />
      </Suspense>
    </div>
  );
};

export default ActionGames;
