import React from "react";
import Adventure from "../../components/Adventure";
import { getAllGames } from "@/utils/api";

const ActionGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }
  return (
    <div>
      <Adventure data={data.games} showAllGames={true} />
    </div>
  );
};

export default ActionGames;
