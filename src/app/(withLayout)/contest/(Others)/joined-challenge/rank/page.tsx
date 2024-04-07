import RankJoined from "@/components/Contest/Others/Joined-Challenge/Rank/Rank";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rank",
  description: "Your Capture Joined Challengers Rank page",
};

const RankJoinedPage = () => {
  return (
    <>
      <RankJoined />
    </>
  );
};

export default RankJoinedPage;
