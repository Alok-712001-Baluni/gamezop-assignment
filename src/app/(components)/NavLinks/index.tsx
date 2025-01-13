import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActionIcon from "@/app/(components)/icons/Action";
import AdventureIcon from "@/app/(components)/icons/Adventure";
import ArcadeIcon from "@/app/(components)/icons/Arcade";
import PuzzleLogicIcon from "@/app/(components)/icons/PuzzleLogic";
import SportsRacingIcon from "@/app/(components)/icons/SportsRacing";
import StrategyIcon from "@/app/(components)/icons/Strategy";
import Favourites from "@/app/(components)/icons/Favourites";

const NavLinks = () => {
  const router = usePathname();

  const isActionGames = router === "/action-games";
  const isAdventureGames = router === "/adventure-games";
  const isArcadeGames = router === "/arcade-games";
  const isPuzzleLogicGames = router === "/puzzle-and-logic-games";
  const isSportsRacingGames = router === "/sports-and-racing-games";
  const isStrategyGames = router === "/strategy-games";

  return (
    <>
      <Link
        href="/action-games"
        className={`dark:bg-[#151823] dark:text-white bg-[#f0f1f9] text-[#3e51b5] rounded-3xl w-max ${
          isActionGames
            ? "dark:!bg-[#ffcc5b] !bg-[#3e51b5] dark:!text-[#151823] !text-white"
            : ""
        }`}
      >
        <div className="flex items-center justify-center py-2.5 px-6">
          <ActionIcon isActive={isActionGames} />
          <p className="text-sm mx-2">Action</p>
        </div>
      </Link>
      <Link
        href="/adventure-games"
        className={`dark:bg-[#151823] dark:text-white bg-[#f0f1f9] text-[#3e51b5] rounded-3xl w-max ${
          isAdventureGames
            ? "dark:!bg-[#ffcc5b] !bg-[#3e51b5] dark:!text-[#151823] !text-white"
            : ""
        }`}
      >
        <div className="flex items-center justify-center py-2.5 px-6">
          <AdventureIcon isActive={isAdventureGames} />
          <p className="text-sm mx-2">Adventure</p>
        </div>
      </Link>
      <Link
        href="/arcade-games"
        className={`dark:bg-[#151823] dark:text-white bg-[#f0f1f9] text-[#3e51b5] rounded-3xl w-max ${
          isArcadeGames
            ? "dark:!bg-[#ffcc5b] !bg-[#3e51b5] dark:!text-[#151823] !text-white"
            : ""
        }`}
      >
        <div className="flex items-center justify-center py-2.5 px-6">
          <ArcadeIcon isActive={isArcadeGames} />
          <p className="text-sm mx-2">Arcade</p>
        </div>
      </Link>
      <Link
        href="/puzzle-and-logic-games"
        className={`dark:bg-[#151823] dark:text-white bg-[#f0f1f9] text-[#3e51b5] rounded-3xl w-max ${
          isPuzzleLogicGames
            ? "dark:!bg-[#ffcc5b] !bg-[#3e51b5] dark:!text-[#151823] !text-white"
            : ""
        }`}
      >
        <div className="flex items-center justify-center py-2.5 px-6">
          <PuzzleLogicIcon isActive={isPuzzleLogicGames} />
          <p className="text-sm mx-2">Puzzle & Logic</p>
        </div>
      </Link>
      <Link
        href="/sports-and-racing-games"
        className={`dark:bg-[#151823] dark:text-white bg-[#f0f1f9] text-[#3e51b5] rounded-3xl w-max ${
          isSportsRacingGames
            ? "dark:!bg-[#ffcc5b] !bg-[#3e51b5] dark:!text-[#151823] !text-white"
            : ""
        }`}
      >
        <div className="flex items-center justify-center py-2.5 px-6">
          <SportsRacingIcon isActive={isSportsRacingGames} />
          <p className="text-sm mx-2">Sports & Racing</p>
        </div>
      </Link>
      <Link
        href="/strategy-games"
        className={`dark:bg-[#151823] dark:text-white bg-[#f0f1f9] text-[#3e51b5] rounded-3xl w-max ${
          isStrategyGames
            ? "dark:!bg-[#ffcc5b] !bg-[#3e51b5] dark:!text-[#151823] !text-white"
            : ""
        }`}
      >
        <div className="flex items-center justify-center py-2.5 px-6">
          <StrategyIcon isActive={isStrategyGames} />
          <p className="text-sm mx-2">Strategy</p>
        </div>
      </Link>
      <Link
        href="#"
        className="dark:bg-[#151823] dark:text-white bg-[#f0f1f9] text-[#3e51b5] rounded-3xl w-max"
      >
        <div className="flex items-center justify-center py-2.5 px-6">
          <Favourites />
          <p className="text-sm mx-2">My Favourites</p>
        </div>
      </Link>
    </>
  );
};

export default NavLinks;
