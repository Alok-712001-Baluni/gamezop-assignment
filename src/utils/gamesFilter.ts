import { Game } from "./types";

export const getFilteredGame = (data: Game[], filterKey: string) => {
  return data.filter((game) => game.categories.en.includes(filterKey));
};

export const getMostPlayedGame = (data: Game[]) => {
  return data.filter((game) => game.rating > 4.5);
};
