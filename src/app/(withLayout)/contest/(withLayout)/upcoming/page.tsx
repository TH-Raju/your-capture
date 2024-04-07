import Upcoming from "@/components/Contest/WithLayout/Upcoming/Upcoming";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming",
  description: "Your Capture Upcoming Challenges page",
};

const upcomingPage = () => {
  return (
    <>
      <Upcoming />
    </>
  );
};

export default upcomingPage;
