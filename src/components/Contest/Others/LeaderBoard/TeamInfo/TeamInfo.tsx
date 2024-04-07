"use client";

import { AllImages } from "@/assets/AllImage";
import { Button } from "antd";
import Image from "next/image";
import { PiUsersThreeFill } from "react-icons/pi";
import { SiGoogletranslate } from "react-icons/si";
import { CiTrophy } from "react-icons/ci";
import ChatPage from "../ChatPage";

const TeamInfo = () => {
  return (
    <div className="lg:w-[90%] mx-auto">
      {/* Banner  */}
      <div className=" bg-white text-black py-6 px-8 rounded-md">
        <div className="flex justify-between items-center lg:gap-4 gap-5">
          <div className="flex  justify-center items-center lg:gap-8 gap-2">
            <Image
              src={AllImages.contest.leaderboard.myTeam.Banlogo}
              className="h-16 w-fit"
              alt="team logo"
            />
            <h1 className="lg:text-4xl text-2xl font-semibold">
              The Photography Crew
            </h1>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-start ">
        <div className=" w-full ">
          {/* Scores */}
          <div className="my-5 grid grid-cols-2 justify-items-center lg:flex items-center lg:gap-20 gap-10 justify-center">
            <Image
              src={AllImages.contest.leaderboard.myTeam.Badgelogo}
              className="lg:h-24 h-12 w-fit"
              alt="team logo"
            />
            <div>
              <div className="flex items-center gap-2 ">
                <h3 className="font-semibold mb-2 text-xl lg:text-2xl">
                  1,452,496
                </h3>
                <Image
                  src={AllImages.contest.leaderboard.myTeam.ScoreIcon}
                  className="h-5 w-fit -mt-3"
                  alt="team logo"
                />
              </div>
              <p className="text-center">Team Score</p>
            </div>
            <div>
              <div className="flex items-center gap-2 ">
                <h3 className="font-semibold mb-2 text-2xl">967</h3>
                <Image
                  src={AllImages.contest.leaderboard.myTeam.TeamIcon}
                  className="h-9 w-fit -mt-2"
                  alt="team logo"
                />
              </div>
              <p className="text-center">Team Win</p>
            </div>
            <div>
              <div className="flex items-center gap-2 ">
                <h3 className="font-semibold mb-2 text-2xl">20/20</h3>

                <PiUsersThreeFill className="h-7 w-fit -mt-2 text-site-color" />
              </div>
              <p className="text-center">Team Members</p>
            </div>
            <div>
              <div className="flex items-center gap-2 ">
                <h3 className="font-semibold mb-2 lg:text-2xl text-lg uppercase">
                  CHALLENGER
                </h3>
                <Image
                  src={AllImages.contest.leaderboard.myTeam.RequirementIcon}
                  className="lg:h-9 h-6 w-fit -mt-2"
                  alt="team logo"
                />
              </div>
              <p className="text-center">Min. Requirement</p>
            </div>
            <div>
              <div className="flex items-center gap-2 ">
                <h3 className="font-semibold mb-2 lg:text-2xl text-xl">
                  Bangladesh
                </h3>

                <Image
                  src={AllImages.contest.leaderboard.leader.bdFlag}
                  className="lg:h-9 h-7 w-fit -mt-2"
                  alt="team logo"
                />
              </div>
              <p className="text-center">Country</p>
            </div>
          </div>

          {/* Table  */}
          <div className="relative  bg-[#181818] py-6 px-5  flex flex-col gap-8 rounded-md">
            <div>
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={AllImages.person}
                    className="h-10 w-fit"
                    alt="team logo"
                  />
                  <h1 className="lg:text-xl text-lg font-semibold">
                    {" "}
                    John Julie{" "}
                  </h1>
                </div>
                <div>
                  <Button
                    className="flex items-center justify-center  lg:px-6 px-3 py-1"
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "none",
                    }}
                  >
                    <span className="uppercase lg:text-sm text-xs">
                      Team Leader
                    </span>
                  </Button>
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
                    <span className="uppercase lg:text-sm text-xs">34,974</span>

                    <CiTrophy className="h-5 w-fit  " />
                  </Button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div>
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={AllImages.person}
                    className="h-10 w-fit"
                    alt="team logo"
                  />
                  <h1 className="lg:text-xl text-lg font-semibold">
                    {" "}
                    John Julie{" "}
                  </h1>
                </div>
                <div>
                  <Button
                    className="flex items-center justify-center  lg:px-6 px-3 py-1"
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "none",
                    }}
                  >
                    <span className="uppercase lg:text-sm text-xs">
                      Team Leader
                    </span>
                  </Button>
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
                    <span className="uppercase lg:text-sm text-xs">34,974</span>

                    <CiTrophy className="h-5 w-fit  " />
                  </Button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div>
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={AllImages.person}
                    className="h-10 w-fit"
                    alt="team logo"
                  />
                  <h1 className="lg:text-xl text-lg font-semibold">
                    {" "}
                    John Julie{" "}
                  </h1>
                </div>
                <div>
                  <Button
                    className="flex items-center justify-center  lg:px-6 px-3 py-1"
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "none",
                    }}
                  >
                    <span className="uppercase lg:text-sm text-xs">
                      Team Leader
                    </span>
                  </Button>
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
                    <span className="uppercase lg:text-sm text-xs">34,974</span>

                    <CiTrophy className="h-5 w-fit  " />
                  </Button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div>
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={AllImages.person}
                    className="h-10 w-fit"
                    alt="team logo"
                  />
                  <h1 className="lg:text-xl text-lg font-semibold">
                    {" "}
                    John Julie{" "}
                  </h1>
                </div>
                <div>
                  <Button
                    className="flex items-center justify-center  lg:px-6 px-3 py-1"
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "none",
                    }}
                  >
                    <span className="uppercase lg:text-sm text-xs">
                      Team Leader
                    </span>
                  </Button>
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
                    <span className="uppercase lg:text-sm text-xs">34,974</span>

                    <CiTrophy className="h-5 w-fit  " />
                  </Button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div>
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={AllImages.person}
                    className="h-10 w-fit"
                    alt="team logo"
                  />
                  <h1 className="lg:text-xl text-lg font-semibold">
                    {" "}
                    John Julie{" "}
                  </h1>
                </div>
                <div>
                  <Button
                    className="flex items-center justify-center  lg:px-6 px-3 py-1"
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "none",
                    }}
                  >
                    <span className="uppercase lg:text-sm text-xs">
                      Team Leader
                    </span>
                  </Button>
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
                    <span className="uppercase lg:text-sm text-xs">34,974</span>

                    <CiTrophy className="h-5 w-fit  " />
                  </Button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div>
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={AllImages.person}
                    className="h-10 w-fit"
                    alt="team logo"
                  />
                  <h1 className="lg:text-xl text-lg font-semibold">
                    {" "}
                    John Julie{" "}
                  </h1>
                </div>
                <div>
                  <Button
                    className="flex items-center justify-center  lg:px-6 px-3 py-1"
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "none",
                    }}
                  >
                    <span className="uppercase lg:text-sm text-xs">
                      Team Leader
                    </span>
                  </Button>
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
                    <span className="uppercase lg:text-sm text-xs">34,974</span>

                    <CiTrophy className="h-5 w-fit  " />
                  </Button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div>
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={AllImages.person}
                    className="h-10 w-fit"
                    alt="team logo"
                  />
                  <h1 className="lg:text-xl text-lg font-semibold">
                    {" "}
                    John Julie{" "}
                  </h1>
                </div>
                <div>
                  <Button
                    className="flex items-center justify-center  lg:px-6 px-3 py-1"
                    style={{
                      color: "white",
                      backgroundColor: "#fd8533",
                      border: "none",
                    }}
                  >
                    <span className="uppercase lg:text-sm text-xs">
                      Team Leader
                    </span>
                  </Button>
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
                    <span className="uppercase lg:text-sm text-xs">34,974</span>

                    <CiTrophy className="h-5 w-fit  " />
                  </Button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
