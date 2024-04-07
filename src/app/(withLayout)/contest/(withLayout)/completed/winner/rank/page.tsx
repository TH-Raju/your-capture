import RankWinner from "@/components/Contest/WithLayout/Completed/Winner/RankWinner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ranks",
  description: "Your Capture Challenges Winner Rank page",
};
const WinnerRankPage = () => {
  return (
    <>
      <RankWinner />
    </>
  );
};

export default WinnerRankPage;
