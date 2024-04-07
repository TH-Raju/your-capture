import Closed from "@/components/Contest/WithLayout/Closed/Closed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Closed",
  description: "Your Capture Closed Challenges page",
};

const ClosedPage = () => {
  return (
    <>
      <Closed />
    </>
  );
};

export default ClosedPage;
