import DetailsWinner from "@/components/Contest/WithLayout/Completed/Winner/DetailsWinner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details",
  description: "Your Capture Challenges Winner Detail page",
};

const WinnerDetailsPage = () => {
  return (
    <>
      <DetailsWinner />
    </>
  );
};

export default WinnerDetailsPage;
