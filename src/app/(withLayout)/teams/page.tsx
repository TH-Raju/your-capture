"use client";
import { useEffect, useState } from "react";
import TeamInfo from "@/components/Teams/TeamInfo";
import TeamMonth from "@/components/Teams/TeamMonth";
import TeamVisual from "@/components/Teams/TeamVisual";
import Team from "@/components/Teams/team";

const TeamsPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts (client-side)
  }, []);

  return (
    <>
      {isClient && (
        <>
          <Team />
          <TeamInfo />
          <TeamMonth />
          <TeamVisual />
        </>
      )}
    </>
  );
};

export default TeamsPage;
