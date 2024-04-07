"use client";

import { AllImages } from "@/assets/AllImage";
import { Avatar, Button } from "antd";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { VscSend } from "react-icons/vsc";

const ChatPage = () => {
  return (
    <div className="h-full relative w-full bg-white text-black z-10 px-2">
      {/* Top section */}
      <div className="py-5 px-3 lg:px-0">
        {" "}
        {/* Added padding */}
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar.Group size="small">
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Avatar.Group>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={AllImages.contest.leaderboard.myTeam.Banlogo}
              className="h-5 w-auto" // Changed width to auto for responsiveness
              alt="team logo"
            />
            <p className="font-bold">The Photography Crew</p>
          </div>
        </div>
      </div>

      {/* Middle section */}
      <div className="mt-1 px-3 lg:px-0  h-[60vh] overflow-y-scroll py-6">
        {" "}
        {/* Added padding */}
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Image src={AllImages.person} className="h-10 w-auto" alt="vote" />
          <div className="bg-[#fff0e6] px-3 w-full rounded-md pb-2">
            <h1 className="font-semibold text-lg">Jav</h1>
            <div className="flex items-start justify-between w-full gap-3 ">
              <p className="w-[70%]">I'm down! Any ideas??</p>{" "}
              <h3 className="w-[30%] text-gray-400"> 11:35 AM</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="py-8  lg:px-0 ">
        {" "}
        {/* Added padding */}
        <div className="absolute bottom-0 w-full text-center  flex justify-between  py-4">
          <Button style={{ border: "none" }}>
            <CiImageOn className="h-7 w-fit" />
          </Button>
          <input
            type="text"
            className="border rounded-full text-center  w-full mx-1"
            placeholder="Start typing..."
          />
          <div className="flex mr-2">
            <Button style={{ border: "none" }}>
              <HiOutlineEmojiHappy className="h-6 w-fit" />
            </Button>
            <Button style={{ border: "none" }}>
              <VscSend className="h-6 w-fit" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
