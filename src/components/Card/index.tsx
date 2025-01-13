import React from "react";
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
  return (
    <div
      className={`mt-5 grid grid-cols-[190px_190px_190px_190px_190px_190px_190px_190px] max-sm:grid-cols-[150px_150px_150px_150px_150px_150px_150px_150px]  gap-5 max-sm:gap-3 overflow-x-scroll scrollbar-hidden
  ${showAllGames ? "!grid-cols-[190px_190px_190px_190px_190px]" : ""}`}
    >
      {visibleItems.map((vI) => {
        return (
          <div className="ml-5" key={vI.code}>
            <div className="h-[210px]">
              <div
                className="h-full"
                data-tooltip-id="my-tooltip"
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
                <Tooltip
                  id="my-tooltip"
                  className="dark:bg-white dark:text-black bg-black text-white max-w-[400px]"
                />
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
