import React, { useState, useTransition, useEffect } from "react";
import Image from "next/image";
import { Game } from "@/utils/types";
import { Tooltip } from "react-tooltip";

type CardProps = {
  showAllGames?: boolean;
  isSmallScreen: boolean;
  visibleItems: Game[];
};

const Card = ({
  showAllGames = false,
  isSmallScreen,
  visibleItems,
}: CardProps) => {
  const [icons, setIcons] = useState<{ [key: string]: boolean }>({});
  const [, startTransition] = useTransition();

  const toggleIcon = (code: string) => {
    setIcons((prev) => ({ ...prev, [code]: !prev[code] }));
  };

  const handleAddToFavourite = (vI: Game) => {
    toggleIcon(vI.code);
    startTransition(() => {
      const existingFavourites: Game[] = JSON.parse(
        localStorage.getItem("Favourites") || "[]"
      );

      const isAlreadyFavourite = existingFavourites.some(
        (item) => item.code === vI.code
      );

      let updatedFavourites;
      if (isAlreadyFavourite) {
        updatedFavourites = existingFavourites.filter(
          (item) => item.code !== vI.code
        );
      } else {
        updatedFavourites = [...existingFavourites, vI];
      }

      localStorage.setItem("Favourites", JSON.stringify(updatedFavourites));
    });
  };

  useEffect(() => {
    const existingFavourites: Game[] = JSON.parse(
      localStorage.getItem("Favourites") || "[]"
    );
    const initialIcons = visibleItems.reduce((acc, game) => {
      acc[game.code] = existingFavourites.some(
        (item) => item.code === game.code
      );
      return acc;
    }, {} as { [key: string]: boolean });
    setIcons(initialIcons);
  }, [visibleItems]);

  return (
    <div
      className={`mt-5 grid grid-cols-[190px_190px_190px_190px_190px_190px_190px_190px] max-sm:grid-cols-[150px_150px_150px_150px_150px_150px_150px_150px] gap-5 max-sm:gap-3 overflow-x-scroll scrollbar-hidden
      ${showAllGames ? "!grid-cols-[190px_190px_190px_190px_190px]" : ""}`}
    >
      {visibleItems.map((vI) => {
        const isIconActive = icons[vI.code];
        return (
          <div className="ml-5" key={vI.code}>
            <div className="h-[210px]">
              <div
                className="h-full relative"
                data-tooltip-id={`my-tooltip-${vI.code}`}
                data-tooltip-content={vI.description.en}
              >
                <Image
                  src={vI.assets.square}
                  alt={vI.name.en}
                  width={isSmallScreen ? 140 : 187}
                  height={isSmallScreen ? 100 : 200}
                  className="rounded-2xl cursor-pointer"
                  onClick={() => window.open(vI.url, "_blank")}
                />
                {isIconActive ? (
                  <i
                    className={`fa-solid fa-heart bg-black text-red-500 w-6 h-6 rounded-xl text-center !leading-6 cursor-pointer absolute top-3 right-3 ${
                      showAllGames ? "max-sm:right-9" : "max-sm:right-0"
                    } `}
                    onClick={() => handleAddToFavourite(vI)}
                  ></i>
                ) : (
                  <i
                    className={`fa-regular fa-heart bg-white text-black w-6 h-6 rounded-xl text-center !leading-6 cursor-pointer absolute top-3 right-3 ${
                      showAllGames ? "max-sm:right-9" : "max-sm:right-0"
                    }`}
                    onClick={() => handleAddToFavourite(vI)}
                  ></i>
                )}
                {isSmallScreen ? null : (
                  <Tooltip
                    id={`my-tooltip-${vI.code}`}
                    className="dark:bg-white dark:text-black bg-black text-white max-w-[400px] z-50"
                  />
                )}
                <div
                  className={`text-center text-xl font-semibold truncate overflow-hidden whitespace-nowrap mt-1 ${
                    isSmallScreen ? "w-[140px]" : "w-full"
                  }`}
                >
                  {vI.name.en}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
