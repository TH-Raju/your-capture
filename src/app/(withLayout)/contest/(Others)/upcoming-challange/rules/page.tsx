import RulesPage from "@/components/Contest/Others/Upcomings/RulesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules",
  description: "Your Capture Challenges Rules page",
};
const UpcomingChallengeRulesPage = () => {
  return (
    <>
      <RulesPage />
    </>
  );
};

export default UpcomingChallengeRulesPage;
