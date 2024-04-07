import PrizesWinner from "@/components/Contest/WithLayout/Completed/Winner/PrizesWinner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prizes",
  description: "Your Capture Challenges Winner Prize page",
};

const WinnerPrizePage = () => {
  return (
    <>
      <PrizesWinner />
    </>
  );
};

export default WinnerPrizePage;
