"use client";

import BottomRankUser from "./RankWinner/BottomRankUser";
import TopPhotographerRank from "./RankWinner/RankUser";

const RankWinner = () => {
  return (
    <div>
      <TopPhotographerRank />
      <BottomRankUser />
    </div>
  );
};

export default RankWinner;
