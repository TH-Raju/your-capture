import ExhibitionBanner from "@/components/Exhibition/Banner";
import ExhibitionCard from "@/components/Exhibition/ExhibitionCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition",
  description: "Your Capture Exhibition page",
};
const ExhibitionsPage = () => {
  return (
    <>
      <ExhibitionBanner />
      <ExhibitionCard />
    </>
  );
};

export default ExhibitionsPage;
