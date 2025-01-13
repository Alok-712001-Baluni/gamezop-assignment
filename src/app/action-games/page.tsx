import React from "react";
import Action from "../../components/Action";
import { getAllGames } from "@/utils/api";

const ActionGames = async () => {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }

  return (
    <div>
      <Action data={data.games} showAllGames={true} />
    </div>
  );
};

export default ActionGames;
