"use client";
import React, { useState, useEffect } from "react";
import { Game } from "@/utils/types";
import FavouritesICon from "@/app/(components)/icons/FavouritesIcon";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import Card from "../Card";

type ActionProps = {
  showAllGames?: boolean;
};

const Favourites = ({ showAllGames = true }: ActionProps) => {
  const [existingFavouritesGames, setExistingFavouritesGames] = useState<
    Game[]
  >([]);

  // Use useEffect to handle the localStorage call (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavourites = JSON.parse(
        localStorage.getItem("Favourites") || "[]"
      );
      setExistingFavouritesGames(storedFavourites);
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      className={`dark:bg-tertiaryBlack border border-customPurple ml-10 rounded-xl shadow-custom-games-container mt-5 px-8  max-sm:px-2 max-sm:mx-4 ${
        showAllGames ? "mr-10" : ""
      }`}
    >
      <div className="flex justify-between items-center mt-4">
        <div className="font-bold text-2xl max-sm:text-sm flex items-center justify-center gap-2">
          <FavouritesICon
            width={isSmallScreen ? 20 : 26}
            height={isSmallScreen ? 20 : 26}
          />
          <div>My Favourites</div>
        </div>
      </div>
      <Card
        isSmallScreen={isSmallScreen}
        showAllGames={showAllGames}
        visibleItems={existingFavouritesGames}
      />
    </div>
  );
};

export default Favourites;
