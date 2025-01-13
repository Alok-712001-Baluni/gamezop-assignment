"use client";
import React, { useState, useEffect } from "react";
import { Game } from "@/utils/types";
import { getFilteredGame } from "@/utils/gamesFilter";
import Card from "../Card";
import PuzzleLogicIcon from "@/app/(components)/icons/PuzzleLogic";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";

type PuzzleLogicProps = {
  data: Game[];
  showAllGames?: boolean;
};

const PuzzleLogic = ({ data, showAllGames = false }: PuzzleLogicProps) => {
  const puzzleAndLogicGames = getFilteredGame(data, "Puzzle & Logic");
  const [showAll, setShowAll] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    if (showAllGames) {
      setShowAll(true);
    }
  }, [showAllGames]);

  const visibleItems = showAll
    ? puzzleAndLogicGames
    : puzzleAndLogicGames.slice(0, 8);

  return (
    <div
      className={`dark:bg-[#222341] border border-[#404380] ml-10 rounded-xl shadow-custom-games-container mt-5 px-8  max-sm:px-2 max-sm:mx-4 ${
        showAllGames ? "mr-8" : ""
      }`}
    >
      <div className="flex justify-between items-center mt-4">
        <div className="font-bold text-2xl max-sm:text-sm flex items-center justify-center gap-2">
          <PuzzleLogicIcon
            width={isSmallScreen ? 20 : 26}
            height={isSmallScreen ? 20 : 26}
          />
          <div>Puzzle & Logic</div>
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

export default PuzzleLogic;
