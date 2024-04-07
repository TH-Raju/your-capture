import PrizesJoined from "@/components/Contest/Others/Joined-Challenge/PrizesJoined";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prizes",
  description: "Your Capture Joined Challengers Prizes page",
};

const PrizesJoinedPage = () => {
  return (
    <>
      <PrizesJoined />
    </>
  );
};

export default PrizesJoinedPage;
