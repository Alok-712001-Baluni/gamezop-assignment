"use client";
import React, { useState } from "react";
import { Game } from "@/utils/types";
import { getHighlyRatedGames } from "@/utils/gamesFilter";
import Card from "../Card";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";

type HighlyRatedProps = {
  data: Game[];
};

const HighlyRated = ({ data }: HighlyRatedProps) => {
  const mostPlayed = getHighlyRatedGames(data);
  const [showAll, setShowAll] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  const visibleItems = showAll ? mostPlayed : mostPlayed.slice(0, 8);

  return (
    <div className="dark:bg-[#222341] border border-[#404380] ml-10 rounded-xl shadow-custom-games-container mt-5 px-8 max-sm:px-2 max-sm:mx-4">
      <div className="flex justify-between items-center mt-4">
        <div className="font-bold text-2xl max-sm:text-sm">
          Highly Rated Games
        </div>
        <div
          className="text-xl max-sm:text-sm font-bold uppercase underline hover:no-underline cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          View {showAll ? "Less" : "All"}
        </div>
      </div>
      <Card isSmallScreen={isSmallScreen} visibleItems={visibleItems} />
    </div>
  );
};

export default HighlyRated;
