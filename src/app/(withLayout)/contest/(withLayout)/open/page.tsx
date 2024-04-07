import Open from "@/components/Contest/WithLayout/Open/Open";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open",
  description: "Your Capture Open Challenges page",
};

const OpenPage = () => {
  return (
    <>
      <Open />
    </>
  );
};

export default OpenPage;
