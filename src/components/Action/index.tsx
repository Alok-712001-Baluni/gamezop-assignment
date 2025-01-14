"use client";
import React, { useEffect, useState } from "react";
import { Game } from "@/utils/types";
import { getFilteredGame } from "@/utils/gamesFilter";
import ActionIcon from "@/app/(components)/icons/Action";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import Card from "../Card";

type ActionProps = {
  data: Game[];
  showAllGames?: boolean;
};

const Action = ({ data, showAllGames = false }: ActionProps) => {
  const actionGames = getFilteredGame(data, "Action");
  const [showAll, setShowAll] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    if (showAllGames) {
      setShowAll(true);
    }
  }, [showAllGames]);

  const visibleItems = showAll ? actionGames : actionGames.slice(0, 8);

  return (
    <div
      className={`dark:bg-tertiaryBlack border border-customPurple ml-10 rounded-xl shadow-custom-games-container mt-5 px-8  max-sm:px-2 max-sm:mx-4 ${
        showAllGames ? "mr-10" : ""
      }`}
    >
      <div className="flex justify-between items-center mt-4">
        <div className="font-bold text-2xl max-sm:text-sm flex items-center justify-center gap-2">
          <ActionIcon
            width={isSmallScreen ? 20 : 26}
            height={isSmallScreen ? 20 : 26}
          />
          <div>Action</div>
        </div>
        {showAllGames ? null : (
          <div
            className="text-xl max-sm:text-sm font-bold uppercase underline hover:no-underline cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            View {showAll ? "Less" : "All"}
          </div>
        )}
      </div>
      <Card
        isSmallScreen={isSmallScreen}
        showAllGames={showAllGames}
        visibleItems={visibleItems}
      />
    </div>
  );
};

export default Action;
