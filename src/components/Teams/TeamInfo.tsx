"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";
import Link from "next/link";

const TeamInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center lg:ml-28 my-10"></div>
      <div className="flex flex-col lg:flex-row  items-center justify-items-center justify-center mb-24">
        <div className="flex flex-col justify-center items-center ">
          <Image src={AllImages.team.chat} alt="team-chat" />
          <p className=" w-[55%] text-center">
            Connect & Chat with other creatives like you
          </p>
        </div>
        <div className="flex  flex-col justify-center items-center ">
          <Image src={AllImages.team.teammates} alt="team-chat" />
          <p className=" w-[55%] text-center">
            Improve your skills with help from Teammates
          </p>
        </div>
        <div className="flex  flex-col justify-center items-center ">
          <Image src={AllImages.team.earn} alt="team-chat" />
          <p className=" w-[70%] text-center">Earn more swaps fills & keys</p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
