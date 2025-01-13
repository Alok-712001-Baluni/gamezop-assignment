import MostPlayed from "../components/MostPlayed";
import Action from "../components/Action";
import Adventure from "../components/Adventure";
import Arcade from "../components/Arcade";
import PuzzleLogic from "../components/PuzzleLogic";
import SportsRacing from "../components/SportsRacing";
import Strategy from "../components/Strategy";
import { getAllGames } from "@/utils/api";

export default async function Home() {
  const data = await getAllGames();
  if (!data) {
    return <div>Something went wrong in the API</div>;
  }

  return (
    <div className="scrollable">
      <MostPlayed data={data.games} />
      <Action data={data.games} showAllGames={false} />
      <Adventure data={data.games} showAllGames={false} />
      <Arcade data={data.games} showAllGames={false} />
      <PuzzleLogic data={data.games} showAllGames={false} />
      <SportsRacing data={data.games} showAllGames={false} />
      <Strategy data={data.games} showAllGames={false} />
    </div>
  );
}
