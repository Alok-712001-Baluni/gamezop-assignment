import React, { Suspense } from "react";
import Adventure from "../../components/Adventure";
import { getAllGames } from "@/utils/api";

const ActionGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }
  return (
    <div>
      <Suspense fallback={<p>Loading Arcade games................</p>}>
        <Adventure data={data.games} showAllGames={true} />
      </Suspense>
    </div>
  );
};

export default ActionGames;
