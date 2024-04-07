import DetailsPage from "@/components/Contest/Others/Upcomings/DetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details",
  description: "Your Capture Challenges Details page",
};

const ChallangeDetailsPage = () => {
  return (
    <>
      <DetailsPage />
    </>
  );
};

export default ChallangeDetailsPage;
