"use client";
import React, { useState, useEffect } from "react";
import { Game } from "@/utils/types";
import { getFilteredGame } from "@/utils/gamesFilter";
import Card from "../Card";
import SportsRacingIcon from "@/app/(components)/icons/SportsRacing";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";

type SportsRacingProps = {
  data: Game[];
  showAllGames?: boolean;
};

const SportsRacing = ({ data, showAllGames = false }: SportsRacingProps) => {
  const sportsRacingGames = getFilteredGame(data, "Sports & Racing");
  const [showAll, setShowAll] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    if (showAllGames) {
      setShowAll(true);
    }
  }, [showAllGames]);

  const visibleItems = showAll
    ? sportsRacingGames
    : sportsRacingGames.slice(0, 8);

  return (
    <div
      className={`dark:bg-[#222341] border border-[#404380] ml-10 rounded-xl shadow-custom-games-container mt-5 px-8  max-sm:px-2 max-sm:mx-4 ${
        showAllGames ? "mr-8" : ""
      }`}
    >
      <div className="flex justify-between items-center mt-4">
        <div className="font-bold text-2xl max-sm:text-sm flex items-center justify-center gap-2">
          <SportsRacingIcon
            width={isSmallScreen ? 20 : 26}
            height={isSmallScreen ? 20 : 26}
          />
          <div>Sports & Racing</div>
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

export default SportsRacing;
