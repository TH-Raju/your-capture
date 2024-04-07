import CreateTeam from "@/components/Contest/Others/CreateTeam/CreateTeam";
import TeamTabs from "@/components/Contest/Others/CreateTeam/Tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Team",
  description: "Your Capture Create Team page",
};

const CreateTeamPage = () => {
  return (
    <>
      <TeamTabs />
    </>
  );
};

export default CreateTeamPage;
