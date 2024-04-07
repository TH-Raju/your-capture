"use client";
import { PiUsersThreeFill } from "react-icons/pi";
import { SiGoogletranslate } from "react-icons/si";
import { CiTrophy } from "react-icons/ci";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import { Button } from "antd";
import Link from "next/link";

const GlobalTable = () => {
  return (
    <div className="relative overflow-y-scroll bg-[#181818] py-6 px-5 lg:h-[65vh] flex flex-col gap-8 rounded-md">
      {/* 1st  */}
      <Link href="/contest/leaderboard/team-info">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={AllImages.contest.leaderboard.leader.L1st}
              className="h-8 w-fit"
              alt="team logo"
            />
            <Image
              src={AllImages.person}
              className="h-10 w-fit"
              alt="team logo"
            />
            <h1 className="lg:text-xl text-lg font-semibold"> John Julie </h1>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src={AllImages.contest.leaderboard.leader.Lg1}
              className="h-8 w-fit"
              alt="team logo"
            />
            <Button
              className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "none",
              }}
            >
              <span className="uppercase text-sm">+ 34,974</span>

              <CiTrophy className="h-5 w-fit  " />
            </Button>
          </div>
        </div>
        <hr className="mt-3" />
      </Link>

      {/* 2nd  */}
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={AllImages.contest.leaderboard.leader.L2nd}
              className="h-8 w-fit"
              alt="team logo"
            />
            <Image
              src={AllImages.person}
              className="h-10 w-fit"
              alt="team logo"
            />
            <h1 className="lg:text-xl text-lg font-semibold"> John Julie </h1>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src={AllImages.contest.leaderboard.leader.Lg2}
              className="h-8 w-fit"
              alt="team logo"
            />
            <Button
              className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "none",
              }}
            >
              <span className="uppercase text-sm">+ 34,974</span>

              <CiTrophy className="h-5 w-fit  " />
            </Button>
          </div>
        </div>
        <hr className="mt-3" />
      </div>

      {/* 3rd  */}
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={AllImages.contest.leaderboard.leader.L3rd}
              className="h-8 w-fit"
              alt="team logo"
            />
            <Image
              src={AllImages.person}
              className="h-10 w-fit"
              alt="team logo"
            />
            <h1 className="lg:text-xl text-lg font-semibold"> John Julie </h1>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src={AllImages.contest.leaderboard.leader.Lg3}
              className="h-8 w-fit"
              alt="team logo"
            />
            <Button
              className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "none",
              }}
            >
              <span className="uppercase text-sm">+ 34,974</span>

              <CiTrophy className="h-5 w-fit  " />
            </Button>
          </div>
        </div>
        <hr className="mt-3" />
      </div>

      {/* Others  */}
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={AllImages.person}
              className="h-10 w-fit ml-9"
              alt="team logo"
            />
            <h1 className="lg:text-xl text-lg font-semibold"> John Julie </h1>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "none",
              }}
            >
              <span className="uppercase text-sm">+ 34,974</span>

              <CiTrophy className="h-5 w-fit  " />
            </Button>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={AllImages.person}
              className="h-10 w-fit ml-9"
              alt="team logo"
            />
            <h1 className="lg:text-xl text-lg font-semibold"> John Julie </h1>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "none",
              }}
            >
              <span className="uppercase text-sm">+ 34,974</span>

              <CiTrophy className="h-5 w-fit  " />
            </Button>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={AllImages.person}
              className="h-10 w-fit ml-9"
              alt="team logo"
            />
            <h1 className="lg:text-xl text-lg font-semibold"> John Julie </h1>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "none",
              }}
            >
              <span className="uppercase text-sm">+ 34,974</span>

              <CiTrophy className="h-5 w-fit  " />
            </Button>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={AllImages.person}
              className="h-10 w-fit ml-9"
              alt="team logo"
            />
            <h1 className="lg:text-xl text-lg font-semibold"> John Julie </h1>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              className="flex items-center justify-center  gap-1 lg:gap-3 py-1"
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "none",
              }}
            >
              <span className="uppercase text-sm">+ 34,974</span>

              <CiTrophy className="h-5 w-fit  " />
            </Button>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </div>
  );
};

export default GlobalTable;
