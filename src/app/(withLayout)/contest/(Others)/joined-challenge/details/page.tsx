import DetailsJoinedChallenge from "@/components/Contest/Others/Joined-Challenge/DetailsJoined";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details",
  description: "Your Capture Joined Challengers Details page",
};

const DetailsJoinedChallengePage = () => {
  return (
    <>
      <DetailsJoinedChallenge />
    </>
  );
};

export default DetailsJoinedChallengePage;
