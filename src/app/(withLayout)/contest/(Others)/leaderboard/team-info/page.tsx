import TeamInfo from "@/components/Contest/Others/LeaderBoard/TeamInfo/TeamInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Info",
  description: "Your Capture Team Info page",
};

const TeamInfoPage = () => {
  return (
    <>
      <TeamInfo />
    </>
  );
};

export default TeamInfoPage;
