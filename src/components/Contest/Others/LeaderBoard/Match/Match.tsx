"use client";

import { AllImages } from "@/assets/AllImage";
import { Button } from "antd";
import Image from "next/image";
import { PiUsersThreeFill } from "react-icons/pi";
import { SiGoogletranslate } from "react-icons/si";
import { CiTrophy } from "react-icons/ci";
import ChatPage from "../ChatPage";
import { MdHowToVote } from "react-icons/md";
import Link from "next/link";

import { MdArrowForward } from "react-icons/md";

const Match = () => {
  return (
    <div className="lg:w-[90%] mx-auto">
      {/* Banner  */}
      <div className=" bg-white text-black py-6 px-8 rounded-md">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-4 gap-2">
          <div className="flex  justify-center items-center lg:gap-8 gap-2">
            <Image
              src={AllImages.contest.leaderboard.match.TeamTrophy}
              className="lg:h-40 h-20 w-fit"
              alt="team logo"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="lg:text-6xl text-2xl font-bold">Match is On</h1>

            <p className="text-white bg-black px-4 py-1 lg:text-xl text-sm inline-block ">
              12h 45m 34s
            </p>
          </div>
          <div className="lg:w-[35%]">
            <div className="relative overflow-hidden text-white ">
              {/* Background image */}
              <Image
                src={AllImages.contest.selectBg}
                className="h-60 w-fit object-cover rounded-md"
                alt="Select Image"
              />
              {/* Overlay with opacity */}
              <div className="absolute inset-0 bg-gray-800 opacity-50 rounded-md"></div>

              {/* Content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center">
                <h1 className="font-semibold flex items-center text-center leading-4 py-1 px-6 lg:text-3xl text-lg -mt-10 lg:-mt-0">
                  Natural Beauty
                </h1>
                <Link href="/contest/open">
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "1px solid #fd8533",
                    }}
                  >
                    <h2 className="flex items-center justify-center gap-2">
                      {" "}
                      <span>Join Now</span>
                      <MdArrowForward className="h-5 w-5" />
                    </h2>
                  </Button>
                </Link>
              </div>
              <div className="absolute top-0 -right-9 mt-4 rotate-45">
                <h1 className="text-xl font-semibold bg-[#181818] flex items-center text-center leading-4 py-1 px-12">
                  6 <br /> Photos
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-start ">
        <div className=" lg:w-[70%] ">
          {/* vs */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-[80%] mx-auto my-8 gap-7">
            {/* 1st Team  */}
            <div className="bg-site-color h-[20vh] w-full grid items-center justify-center justify-items-center gap-3 rounded-lg py-2">
              <h1 className="text-2xl font-semibold my-3">
                The Photography Crew
              </h1>
              <Image
                src={AllImages.person}
                className="h-16 w-fit"
                alt="team logo"
              />
              <Button
                className="flex items-center border-none"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <span>13,590</span>
                <MdHowToVote className="h-4 w-fit" />
              </Button>
            </div>
            <div>
              <Image
                src={AllImages.contest.leaderboard.match.VS}
                className="h-32 lg:w-32 w-fit"
                alt="vs"
              />
            </div>

            {/* 2nd Team  */}
            <div className="bg-site-color h-[20vh] w-full grid items-center justify-center justify-items-center gap-3 rounded-lg py-2">
              <h1 className="text-2xl font-semibold my-3">Swiss Photography</h1>
              <Image
                src={AllImages.person}
                className="h-16 w-fit"
                alt="team logo"
              />
              <Button
                className="flex items-center border-none"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <span>13,590</span>
                <MdHowToVote className="h-4 w-fit" />
              </Button>
            </div>
          </div>

          {/* Tables  */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            {/* Table 1  */}
            <div className="pt-8 lg:w-[50%] relative overflow-y-scroll bg-[#181818] py-4 lg:px-5 px-7 lg:h-[55vh] flex flex-col gap-8 rounded-md">
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
            </div>

            {/* Table 2  */}
            <div className="pt-8  lg:w-[50%]  relative overflow-y-scroll bg-[#181818] py-4 px-5 lg:h-[55vh] flex flex-col gap-8 rounded-md">
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
              {/* Single table Row  */}
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={AllImages.person}
                      className="lg:h-10 h-8 w-fit"
                      alt="team logo"
                    />
                    <h1 className="lg:text-xl text-sm font-semibold">
                      {" "}
                      John Julie{" "}
                    </h1>
                  </div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <p>23,481 </p>
                    <MdHowToVote className="h-4 w-fit" />
                  </div>
                  <div>
                    <Button
                      className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
                      style={{
                        color: "white",
                        backgroundColor: "#fd8533",
                        border: "none",
                      }}
                    >
                      <span className="uppercase lg:text-sm text-xs">
                        + 34,974
                      </span>

                      <CiTrophy className="h-5 w-fit  " />
                    </Button>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Chat  */}
        <div className="lg:w-[30%] mt-12 mx-2 bg-white">
          <ChatPage />
        </div>
      </div>
    </div>
  );
};

export default Match;
