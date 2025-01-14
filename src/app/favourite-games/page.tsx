import React, { Suspense } from "react";
import Favourites from "@/components/Favourites";

const FavouriteGames = async () => {
  return (
    <div>
      <Suspense fallback={<p>Loading Favourite games..........</p>}>
        <Favourites showAllGames={true} />
      </Suspense>
    </div>
  );
};

export default FavouriteGames;
