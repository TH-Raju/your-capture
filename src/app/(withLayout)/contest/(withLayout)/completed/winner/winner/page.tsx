import Winners from "@/components/Contest/WithLayout/Completed/Winner/Winners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winner",
  description: "Your Capture Challenges Winner page",
};

const WinnersPage = () => {
  return (
    <>
      <Winners />
    </>
  );
};

export default WinnersPage;
