"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider } from "antd";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";
import { LiaShareSolid } from "react-icons/lia";
import Link from "next/link";

const Completed = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#181818] px-2 ">
        <div className="relative overflow-hidden bg-cover bg-no-repeat -mb-8 lg:w-[20%] mx-auto ">
          <Image
            src={AllImages.contest.completed.cameraGirl}
            className="object-fill transition duration-300 ease-in-out hover:scale-110 opacity-45 w-fit"
            alt="Louvre"
          />

          {/* Text in the middle */}
          <div className="absolute top-1/2 left-1/2 lg:left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
            <p className="text-lg mb-8">Show us what you got</p>
          </div>

          {/* Buttons at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center bg-gray-500 text-xs mb-8">
            <Link href="/contest/completed/winner/winner">
              <button className="bg-[#181818] py-2 pl-8 pr-1 mr-4 rounded-md">
                All STAR
              </button>
            </Link>
            <button className="mx-1">Ranked in Level 34</button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="lg:w-[40%]">
          <Image
            src={AllImages.contest.completed.badge}
            className=" w-fit h-24 lg:w-full lg:h-auto"
            alt="badge"
          />
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:w-[30%]">
          <div className="relative overflow-hidden bg-cover bg-no-repeat -mb-8">
            <Image
              src={AllImages.contest.completed.cameraGirl}
              className="object-fill transition duration-300 ease-in-out hover:scale-110 opacity-45"
              alt="Louvre"
            />

            {/* Buttons at the bottom */}
            <div className="absolute bottom-10  flex justify-between items-center w-full bg-gray-500 text-xs">
              <button className="bg-[#181818] py-2 pl-8 pr-1 mr-4 rounded-md">
                3343
              </button>
              <button className="mx-4">
                <StarFilled />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={AllImages.contest.completed.leader}
              className="  h-6 w-fit"
              alt="badge"
            />
            <h1 className="uppercase">230 GS POINTS</h1>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#fd8533",
              color: "white",
              border: "1px solid #fd8533",
            }}
            className="flex justify-center items-center gap-1 my-5"
          >
            <span>Share</span>
            <LiaShareSolid className="h-4 w-4 font-extralight" />
          </Button>
        </div>
      </div>

      {/* 2nd card  */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#181818] px-2 my-16">
        <div className="relative overflow-hidden bg-cover bg-no-repeat -mb-8 lg:w-[20%] mx-auto ">
          <Image
            src={AllImages.contest.completed.cameraGirl}
            className="object-fill transition duration-300 ease-in-out hover:scale-110 opacity-45 w-fit"
            alt="Louvre"
          />

          {/* Text in the middle */}
          <div className="absolute top-1/2 left-1/2 lg:left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
            <p className="text-lg mb-8">Show us what you got</p>
          </div>

          {/* Buttons at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center bg-gray-500 text-xs mb-8">
            <Link href="/contest/completed/winner/winner">
              <button className="bg-[#181818] py-2 pl-8 pr-1 mr-4 rounded-md">
                All STAR
              </button>
            </Link>
            <button className="mx-1">Ranked in Level 34</button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="lg:w-[40%]">
          <Image
            src={AllImages.contest.completed.badge}
            className=" w-fit h-24 lg:w-full lg:h-auto"
            alt="badge"
          />
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="flex flex-col gap-10  lg:w-[30%] items-center justify-center">
          <div className="flex gap-2">
            <Image
              src={AllImages.contest.completed.girl}
              className="  h-14 w-fit"
              alt="badge"
            />
            <Image
              src={AllImages.contest.completed.girl}
              className="  h-14 w-fit"
              alt="badge"
            />
            <Image
              src={AllImages.contest.completed.girl}
              className="  h-14 w-fit"
              alt="badge"
            />
          </div>
          <div className="flex justify-center gap-5">
            <h1 className="flex gap-1">
              <span>13,590</span>
              <Image
                src={AllImages.contest.completed.comVote}
                className="h-5 w-fit"
                alt="vote"
              />
            </h1>
            <h1 className="flex gap-1">
              <span>GS POINT</span>
              <Image
                src={AllImages.contest.completed.compBadge}
                className="h-5 w-fit"
                alt="vote"
              />
            </h1>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#fd8533",
              color: "white",
              border: "1px solid #fd8533",
            }}
            className="flex justify-center items-center gap-1 my-5"
          >
            <span>Share</span>
            <LiaShareSolid className="h-4 w-4 font-extralight" />
          </Button>
        </div>
      </div>

      {/* 3rd Card  */}

      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#181818] px-2 ">
        <div className="relative overflow-hidden bg-cover bg-no-repeat -mb-8 lg:w-[20%] mx-auto ">
          <Image
            src={AllImages.contest.completed.cameraGirl}
            className="object-fill transition duration-300 ease-in-out hover:scale-110 opacity-45 w-fit"
            alt="Louvre"
          />

          {/* Text in the middle */}
          <div className="absolute top-1/2 left-1/2 lg:left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
            <p className="text-lg mb-8">Show us what you got</p>
          </div>

          {/* Buttons at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center bg-gray-500 text-xs mb-8">
            <Link href="/contest/completed/winner/winner">
              <button className="bg-[#181818] py-2 pl-8 pr-1 mr-4 rounded-md">
                All STAR
              </button>
            </Link>
            <button className="mx-1">Ranked in Level 34</button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="lg:w-[40%]">
          <Image
            src={AllImages.contest.completed.badge}
            className=" w-fit h-24 lg:w-full lg:h-auto"
            alt="badge"
          />
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:w-[30%]">
          <div className="relative overflow-hidden bg-cover bg-no-repeat -mb-8">
            <Image
              src={AllImages.contest.completed.cameraGirl}
              className="object-fill transition duration-300 ease-in-out hover:scale-110 opacity-45"
              alt="Louvre"
            />

            {/* Buttons at the bottom */}
            <div className="absolute bottom-10  flex justify-between items-center w-full bg-gray-500 text-xs">
              <button className="bg-[#181818] py-2 pl-8 pr-1 mr-4 rounded-md">
                3343
              </button>
              <button className="mx-4">
                <StarFilled />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={AllImages.contest.completed.leader}
              className="  h-6 w-fit"
              alt="badge"
            />
            <h1 className="uppercase">230 GS POINTS</h1>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#fd8533",
              color: "white",
              border: "1px solid #fd8533",
            }}
            className="flex justify-center items-center gap-1 my-5"
          >
            <span>Share</span>
            <LiaShareSolid className="h-4 w-4 font-extralight" />
          </Button>
        </div>
      </div>

      {/* 4th card  */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#181818] px-2 my-16">
        <div className="relative overflow-hidden bg-cover bg-no-repeat -mb-8 lg:w-[20%] mx-auto ">
          <Image
            src={AllImages.contest.completed.cameraGirl}
            className="object-fill transition duration-300 ease-in-out hover:scale-110 opacity-45 w-fit"
            alt="Louvre"
          />

          {/* Text in the middle */}
          <div className="absolute top-1/2 left-1/2 lg:left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
            <p className="text-lg mb-8">Show us what you got</p>
          </div>

          {/* Buttons at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center bg-gray-500 text-xs mb-8">
            <Link href="/contest/completed/winner/winner">
              <button className="bg-[#181818] py-2 pl-8 pr-1 mr-4 rounded-md">
                All STAR
              </button>
            </Link>
            <button className="mx-1">Ranked in Level 34</button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="lg:w-[40%]">
          <Image
            src={AllImages.contest.completed.badge}
            className=" w-fit h-24 lg:w-full lg:h-auto"
            alt="badge"
          />
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div className="flex flex-col gap-10  lg:w-[30%] items-center justify-center">
          <div className="flex gap-2">
            <Image
              src={AllImages.contest.completed.girl}
              className="  h-14 w-fit"
              alt="badge"
            />
            <Image
              src={AllImages.contest.completed.girl}
              className="  h-14 w-fit"
              alt="badge"
            />
            <Image
              src={AllImages.contest.completed.girl}
              className="  h-14 w-fit"
              alt="badge"
            />
          </div>
          <div className="flex justify-center gap-5">
            <h1 className="flex gap-1">
              <span>13,590</span>
              <Image
                src={AllImages.contest.completed.comVote}
                className="h-5 w-fit"
                alt="vote"
              />
            </h1>
            <h1 className="flex gap-1">
              <span>GS POINT</span>
              <Image
                src={AllImages.contest.completed.compBadge}
                className="h-5 w-fit"
                alt="vote"
              />
            </h1>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "35vh" }}
          />
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#fd8533",
              color: "white",
              border: "1px solid #fd8533",
            }}
            className="flex justify-center items-center gap-1 my-5"
          >
            <span>Share</span>
            <LiaShareSolid className="h-4 w-4 font-extralight" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Completed;
