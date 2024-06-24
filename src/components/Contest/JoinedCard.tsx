"use client";

import { Avatar, Button, Modal, Progress } from "antd";
import { green, red, gray, orange } from "@ant-design/colors";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdOutlineGroupAdd } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import VoteModal from "./VoteModal/VoteModal";

const JoinedCard = () => {
  const [swapModalOpen, setSwapModalOpen] = useState(false);
  const [voteModalOpen, setVoteModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className=" flex flex-col justify-center items-center  mx-auto my-20">
        <div className="relative w-full overflow-hidden">
          <Image
            src={AllImages.contest.selectBg}
            className="lg:h-80 h-60 w-full object-cover rounded-md opacity-55"
            alt="Select Image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className=" font-semibold  flex items-center text-center leading-4 py-1 px-6 lg:text-4xl text-lg -mt-10 lg:-mt-0">
              Natural Beauty
            </h1>
            <div className="grid items-center justify-center">
              <Button
                className="flex items-center justify-center  gap-3 py-1"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  border: "none",
                }}
              >
                <Image
                  src={AllImages.contest.joined.vote}
                  className="h-5 w-fit "
                  alt="vote"
                />
                <span className="uppercase text-sm">Vote</span>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 -right-9   mt-4 rotate-45">
            <h1 className="text-xl font-semibold  bg-[#181818]  flex items-center  text-center leading-4 py-1 px-12    ">
              4<br /> Photos
            </h1>
          </div>

          <div className="absolute bottom-10 left-0 w-full py-2 flex gap-3 mx-4">
            <div className="flex flex-col justify-center  items-center">
              <MdOutlineGroupAdd className="h-8 w-fit text-site-color" />
              <h1>Friends</h1>
            </div>
            <div className="flex flex-col justify-center  items-center">
              <FaRankingStar className="h-8 w-fit text-site-color" />
              <h1>Ranking</h1>
            </div>
          </div>
          <div className="absolute bottom-0 w-full text-center py-2 bg-[#181818]">
            <h1 className="text-xl">12h 45m 34s</h1>
          </div>
        </div>

        {/* Image bottom Data  */}
        <div className=" bg-[#4E4E4E] px-5 w-full rounded-b-lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 my-5">
            {/* Ranked  */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="my-2 font-medium text-lg">Current Level</h2>
              <Image
                src={AllImages.contest.Ranked}
                className="h-32 w-fit"
                alt="Ranked"
              />
            </div>

            {/* GS Point  */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="my-6 font-medium text-lg"></h2>
              <div className="border border-site-color border-spacing-16  w-32  h-32 rounded-full flex flex-col items-center justify-center">
                <div className="border border-site-color border-spacing-16  w-28  h-28 rounded-full flex flex-col items-center justify-center">
                  <span className="text-xl ">34</span>
                  <Avatar.Group className="lg:my-1">
                    <Avatar size={14} style={{ backgroundColor: "#fed0b0" }} />
                    <Avatar size={14} style={{ backgroundColor: "#feb98a" }} />
                    <Avatar size={14} style={{ backgroundColor: "#fd9854" }} />
                    <Avatar size={14} style={{ backgroundColor: "#fd8533" }} />
                  </Avatar.Group>
                  <span className="text-xs  text-center ">
                    50 votes to next level
                  </span>
                </div>
              </div>
            </div>

            {/* Votes  */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="my-2 font-medium text-lg">Total Votes</h2>
              <div className="border border-site-color border-spacing-16  w-32  h-32 rounded-full flex flex-col items-center justify-center">
                <div className="border border-site-color border-spacing-16  w-28  h-28 rounded-full flex flex-col items-center justify-center">
                  <span className="text-xl ">89</span>
                  <Image
                    src={AllImages.contest.joined.vote}
                    className="h-8 w-fit"
                    alt="vote"
                  />
                </div>
              </div>
            </div>

            {/* Exposure */}

            <div className="flex flex-col items-center justify-center">
              <h2 className="my-2 font-medium text-lg">Exposure Bonus</h2>
              <div className="border border-site-color border-spacing-16  w-32  h-32 rounded-full flex flex-col items-center justify-center">
                <div className="border border-site-color border-spacing-16  w-28  h-28 rounded-full flex flex-col items-center justify-center">
                  <span className="flex  gap-16">
                    <span>L</span>
                    <span>H</span>
                  </span>
                  <Progress
                    steps={5}
                    percent={98}
                    format={() => ""}
                    strokeColor={[
                      gray[0],
                      orange[1],
                      orange[3],
                      orange[4],
                      orange[5],
                    ]}
                    className="ml-8"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Upload Cards  */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-5">
            <Image
              src={AllImages.contest.o1}
              className="h-28 rounded-md w-fit"
              alt=""
            />
            <div className="flex flex-col justify-center items-center  border  px-5 py-8 rounded-md">
              <MdOutlineCloudDownload className="h-7 w-fit text-site-color" />
              <p className="font-medium text-center">Upload Photo</p>
            </div>
            <div className="flex flex-col justify-center items-center  border  px-5 py-8 rounded-md">
              <MdOutlineCloudDownload className="h-7 w-fit text-site-color" />
              <p className="font-medium text-center">Upload Photo</p>
            </div>
            <div className="flex flex-col justify-center items-center  border  px-5 py-8 rounded-md">
              <MdOutlineCloudDownload className="h-7 w-fit text-site-color" />
              <p className="font-medium text-center">Upload Photo</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-5">
            <Button
              className="flex items-center justify-center bg-gray-900 px-11 py-1"
              style={{
                color: "white",
                backgroundColor: "#181818",
                border: "none",
              }}
              onClick={() => setVoteModalOpen(true)}
            >
              <Image
                src={AllImages.contest.joined.vote}
                className="h-8 w-fit mr-2 "
                alt="vote"
              />
              <span className="uppercase text-sm">Charge</span>
            </Button>

            <Button
              className="flex items-center justify-center bg-gray-900 px-11 py-1"
              style={{
                color: "white",
                backgroundColor: "#181818",
                border: "none",
              }}
              onClick={() => setSwapModalOpen(true)}
            >
              <Image
                src={AllImages.contest.colorSwap}
                className="h-5 w-fit mr-2"
                alt="vote"
              />
              <span className="uppercase text-sm"> trade</span>
            </Button>
            <Button
              className="flex items-center justify-center bg-gray-900 px-8 py-1"
              style={{
                color: "white",
                backgroundColor: "#181818",
                border: "none",
              }}
            >
              <Image
                src={AllImages.contest.colorPromote}
                className="h-5 w-fit mr-2"
                alt="vote"
              />
              <span className="uppercase text-sm">promote</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Card 2  */}
      <div className=" flex flex-col justify-center items-center  mx-auto my-20">
        <div className="relative w-full overflow-hidden">
          <Image
            src={AllImages.contest.selectBg}
            className="lg:h-80 h-60 w-full object-cover rounded-md opacity-55"
            alt="Select Image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className=" font-semibold  flex items-center text-center leading-4 py-1 px-6 lg:text-4xl text-lg -mt-10 lg:-mt-0">
              Natural Beauty
            </h1>
            <div className="grid items-center justify-center">
              <Button
                className="flex items-center justify-center  gap-3 py-1"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  border: "none",
                }}
              >
                <Image
                  src={AllImages.contest.joined.vote}
                  className="h-5 w-fit "
                  alt="vote"
                />
                <span className="uppercase text-sm">Vote</span>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 -right-9   mt-4 rotate-45">
            <h1 className="text-xl font-semibold  bg-[#181818]  flex items-center  text-center leading-4 py-1 px-12    ">
              3 <br /> Photos
            </h1>
          </div>

          <div className="absolute bottom-10 left-0 w-full py-2 flex gap-3 mx-4">
            <div className="flex flex-col justify-center  items-center">
              <MdOutlineGroupAdd className="h-8 w-fit text-site-color" />
              <h1>Friends</h1>
            </div>
            <div className="flex flex-col justify-center  items-center">
              <FaRankingStar className="h-8 w-fit text-site-color" />
              <h1>Ranking</h1>
            </div>
          </div>
          <div className="absolute bottom-0 w-full text-center py-2 bg-[#181818]">
            <h1 className="text-xl">12h 45m 34s</h1>
          </div>
        </div>

        {/* Image bottom Data  */}
        <div className=" bg-[#4E4E4E] px-5 w-full rounded-b-lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 my-5">
            {/* Ranked  */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="my-2 font-medium text-lg">Current Level</h2>
              <Image
                src={AllImages.contest.Ranked}
                className="h-32 w-fit"
                alt="Ranked"
              />
            </div>

            {/* GS Point  */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="my-6 font-medium text-lg"></h2>
              <div className="border border-site-color border-spacing-16  w-32  h-32 rounded-full flex flex-col items-center justify-center">
                <div className="border border-site-color border-spacing-16  w-28  h-28 rounded-full flex flex-col items-center justify-center">
                  <span className="text-xl ">34</span>
                  <Avatar.Group className="lg:my-1">
                    <Avatar size={14} style={{ backgroundColor: "#fed0b0" }} />
                    <Avatar size={14} style={{ backgroundColor: "#feb98a" }} />
                    <Avatar size={14} style={{ backgroundColor: "#fd9854" }} />
                    <Avatar size={14} style={{ backgroundColor: "#fd8533" }} />
                  </Avatar.Group>
                  <span className="text-xs  text-center ">
                    50 votes to next level
                  </span>
                </div>
              </div>
            </div>

            {/* Votes  */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="my-2 font-medium text-lg">Total Votes</h2>
              <div className="border border-site-color border-spacing-16  w-32  h-32 rounded-full flex flex-col items-center justify-center">
                <div className="border border-site-color border-spacing-16  w-28  h-28 rounded-full flex flex-col items-center justify-center">
                  <span className="text-xl ">89</span>
                  <Image
                    src={AllImages.contest.joined.vote}
                    className="h-8 w-fit"
                    alt="vote"
                  />
                </div>
              </div>
            </div>

            {/* Exposure */}

            <div className="flex flex-col items-center justify-center">
              <h2 className="my-2 font-medium text-lg">Exposure Bonus</h2>
              <div className="border border-site-color border-spacing-16  w-32  h-32 rounded-full flex flex-col items-center justify-center">
                <div className="border border-site-color border-spacing-16  w-28  h-28 rounded-full flex flex-col items-center justify-center">
                  <span className="flex  gap-16">
                    <span>L</span>
                    <span>H</span>
                  </span>
                  <Progress
                    steps={5}
                    percent={98}
                    format={() => ""}
                    strokeColor={[
                      gray[0],
                      orange[1],
                      orange[3],
                      orange[4],
                      orange[5],
                    ]}
                    className="ml-8"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Upload Cards  */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-5">
            <Image
              src={AllImages.contest.o1}
              className="h-28 rounded-md w-fit"
              alt=""
            />
            <div className="flex flex-col justify-center items-center  border  px-5 py-8 rounded-md">
              <MdOutlineCloudDownload className="h-7 w-fit text-site-color" />
              <p className="font-medium text-center">Upload Photo</p>
            </div>
            <div className="flex flex-col justify-center items-center  border  px-5 py-8 rounded-md">
              <MdOutlineCloudDownload className="h-7 w-fit text-site-color" />
              <p className="font-medium text-center">Upload Photo</p>
            </div>
            <div className="flex flex-col justify-center items-center  border  px-5 py-8 rounded-md">
              <MdOutlineCloudDownload className="h-7 w-fit text-site-color" />
              <p className="font-medium text-center">Upload Photo</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-5">
            <Button
              className="flex items-center justify-center bg-gray-900 px-11 py-1"
              style={{
                color: "white",
                backgroundColor: "#181818",
                border: "none",
              }}
              onClick={() => setVoteModalOpen(true)}
            >
              <Image
                src={AllImages.contest.joined.vote}
                className="h-8 w-fit mr-2 "
                alt="vote"
              />
              <span className="uppercase text-sm">Charge</span>
            </Button>

            <Button
              className="flex items-center justify-center bg-gray-900 px-11 py-1"
              style={{
                color: "white",
                backgroundColor: "#181818",
                border: "none",
              }}
              onClick={() => setSwapModalOpen(true)}
            >
              <Image
                src={AllImages.contest.colorSwap}
                className="h-5 w-fit mr-2"
                alt="vote"
              />
              <span className="uppercase text-sm"> Trade</span>
            </Button>
            <Button
              className="flex items-center justify-center bg-gray-900 px-8 py-1"
              style={{
                color: "white",
                backgroundColor: "#181818",
                border: "none",
              }}
            >
              <Image
                src={AllImages.contest.colorPromote}
                className="h-5 w-fit mr-2"
                alt="vote"
              />
              <span className="uppercase text-sm">promote</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Swap Modal  */}
      <Modal
        centered
        footer={null}
        open={swapModalOpen}
        onOk={() => setSwapModalOpen(false)}
        onCancel={() => setSwapModalOpen(false)}
        width={630}
      >
        <div>
          <div className="flex justify-center items-center justify-items-center gap-3">
            <AiFillThunderbolt className="h-8 w-fit mt-2" />
            <p className="text-xl font-semibold">
              Select the photo you want to boost
            </p>
          </div>
          <p className=" font-semibold text-center my-10 bg-site-color py-2 rounded-md">
            All images receive equal exposure, regardless of when boosted or
            submitted.
          </p>
          <div className="w-[60%] mx-auto relative">
            <div className=" relative">
              <Image
                src={AllImages.contest.swapPic}
                className="max-h-72 rounded-md w-full"
                alt="boost image"
              />
              <h1 className="text-4xl absolute bottom-2 left-2 text-white">
                420
              </h1>
            </div>
          </div>
        </div>
      </Modal>

      {/* Vote Modal  */}
      <Modal
        centered
        footer={null}
        open={voteModalOpen}
        onOk={() => setVoteModalOpen(false)}
        onCancel={() => setVoteModalOpen(false)}
        width={950}
      >
        <VoteModal setVoteModalOpen={setVoteModalOpen} />
      </Modal>
    </div>
  );
};

export default JoinedCard;
