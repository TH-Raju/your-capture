import LeaderTabBar from "@/components/Contest/Others/LeaderBoard/LeaderTabBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Your Capture Leaderboard page",
};

const LeaderBoardPage = () => {
  return (
    <div>
      <LeaderTabBar />
    </div>
  );
};

export default LeaderBoardPage;
