"use client";
import React, { useState, useEffect } from "react";
import { Game } from "@/utils/types";
import { getFilteredGame } from "@/utils/gamesFilter";
import Card from "../Card";
import ArcadeIcon from "@/app/(components)/icons/Arcade";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";

type ArcadeProps = {
  data: Game[];
  showAllGames?: boolean;
};

const Arcade = ({ data, showAllGames }: ArcadeProps) => {
  const arcadeGames = getFilteredGame(data, "Arcade");
  const [showAll, setShowAll] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    if (showAllGames) {
      setShowAll(true);
    }
  }, [showAllGames]);

  const visibleItems = showAll ? arcadeGames : arcadeGames.slice(0, 8);

  return (
    <div
      className={`dark:bg-tertiaryBlack border border-customPurple ml-10 rounded-xl shadow-custom-games-container mt-5 px-8  max-sm:px-2 max-sm:mx-4 ${
        showAllGames ? "mr-8" : ""
      }`}
    >
      <div className="flex justify-between items-center mt-4">
        <div className="font-bold text-2xl max-sm:text-sm flex items-center justify-center gap-2">
          <ArcadeIcon
            width={isSmallScreen ? 20 : 26}
            height={isSmallScreen ? 20 : 26}
          />
          <div>Arcade</div>
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

export default Arcade;
