import ContestJoinBanner from "@/components/Contest/Banner";
import ModalLayout from "@/components/Contest/ContestOpenModal/modal";
import JoinedCard from "@/components/Contest/JoinedCard";
import Steps from "@/components/Contest/Steps";
import SwapButtons from "@/components/Contest/SwapButtons/SwapButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contest",
  description: "Your Capture Contest page",
};

const ContestLayoutPage = () => {
  return (
    <>
      <Steps />
      <SwapButtons />
      <ContestJoinBanner />
      <ModalLayout />
      <JoinedCard />
    </>
  );
};

export default ContestLayoutPage;
