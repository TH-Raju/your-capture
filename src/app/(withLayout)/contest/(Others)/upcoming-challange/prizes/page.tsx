import PrizePage from "@/components/Contest/Others/Upcomings/PrizePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prizes",
  description: "Your Capture Prizes Challenges page",
};
const ChallangePrizePage = () => {
  return (
    <>
      <PrizePage />
    </>
  );
};

export default ChallangePrizePage;
