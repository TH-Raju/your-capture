import RulesJoinedChallenge from "@/components/Contest/Others/Joined-Challenge/RulesJoinedChallenge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules",
  description: "Your Capture Joined Challengers Rules page",
};

const RulesJoinedPage = () => {
  return (
    <>
      <RulesJoinedChallenge />
    </>
  );
};

export default RulesJoinedPage;
