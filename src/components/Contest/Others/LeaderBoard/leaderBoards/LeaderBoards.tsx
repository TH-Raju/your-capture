"use client";
import { AllImages } from "@/assets/AllImage";
import { Button } from "antd";
import Image from "next/image";
import { PiUsersThreeFill } from "react-icons/pi";
import { SiGoogletranslate } from "react-icons/si";
import { CiTrophy } from "react-icons/ci";
import ChatPage from "../ChatPage";
import LeaderTabs from "./LeaderTabs";

const LeaderBoards = () => {
  return (
    <div className="lg:w-[90%] mx-auto">
      {/* Banner  */}
      <div className="relative">
        {/* First image */}
        <div className="relative">
          <Image
            src={AllImages.contest.leaderboard.leader.leaderBanner}
            className="h-full w-full"
            alt="banner"
          />
        </div>
        {/* Second image */}
        <div className="absolute lg:top-[25%] top-[20%] left-1/2 transform -translate-x-1/2">
          <Image
            src={AllImages.contest.leaderboard.leader.Badgelogo}
            className="lg:h-32 h-10 w-fit"
            alt="badge"
          />
        </div>
      </div>

      <div className="lg:flex justify-start ">
        <div className=" lg:w-[70%] ">
          <LeaderTabs />
        </div>

        {/* Chat  */}
        <div className="lg:w-[30%] mt-12 mx-2 bg-white">
          <ChatPage />
        </div>
      </div>
    </div>
  );
};

export default LeaderBoards;
