"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider } from "antd";
import Image from "next/image";
import { CopyOutlined, FlagOutlined } from "@ant-design/icons";
import { IoIosAddCircleOutline } from "react-icons/io";
import BackgroundImage from "./WinBackCom";
import { MdFavoriteBorder } from "react-icons/md";

const TopPhotoWinner = () => {
  return (
    <div className="text-center my-20 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="-mb-5 text-2xl uppercase">TOP Photo WINNER</h1>
        <div className="">
          <Divider
            style={{
              borderBlockColor: "#fd8533",
              marginRight: 15,
            }}
          />
          <Divider
            style={{
              borderBlockColor: "white",
              marginLeft: 15,
              marginTop: -20,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-12">
        <Image
          src={AllImages.contest.winner.winnerPro}
          className="w-60 lg:w-72 h-fit"
          alt="user"
        />
        <div>
          <h1 className="font-bold text-2xl text-site-color text-center lg:text-4xl gap-2 lg:ml-1 -ml-3 ">
            <span>Charles Deo</span>
          </h1>
          <h1 className="text-center text-xs mt-3 flex gap-2 lg:ml-4 -ml-3">
            <span>
              <FlagOutlined className="text-site-color mr-2" />
              Netherlands
            </span>
            |
            <span className="flex items-center">
              <Image
                src={AllImages.modal.voteIcon}
                alt="Vote"
                className="h-4 w-fit mr-2"
              />
              Total Votes
            </span>
          </h1>

          <Button
            className="border-none text-white border-orange-400 my-5"
            style={{
              color: "black",
              backgroundColor: "#fff",
              border: "1px solid #fff",
            }}
          >
            <div className="flex items-center justify-center gap-1">
              <span>Follow</span>
              <IoIosAddCircleOutline className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
      <div className="my-10">
        <BackgroundImage
          image={
            <Image
              src={AllImages.contest.winner.groundGirl}
              alt="Image Alt Text"
              className="rounded-md"
              fill
            />
          }
        >
          {/* Div on top-right */}
          <div className="absolute top-0 right-0 p-3">
            <h1>
              <MdFavoriteBorder className="h-8 w-8 lg:h-10 lg:w-10 " />
            </h1>
          </div>

          {/* Div in the middle */}
          <div className="flex flex-col justify-center items-center lg:mx-10 lg:py-24">
            {/* Logo */}
            <span className="text-5xl font-semibold text-center lg:px-96">
              <Image
                src={AllImages.contest.winner.winnerLogo}
                className=" h-28  lg:h-40 w-fit"
                alt="logo"
              />
            </span>

            {/* Text */}
            <p className="lg:w-[65%] mx-auto text-center my-5 text-xl lg:text-2xl -pt-5">
              34354 <br /> <span className="uppercase">Total votes</span>
            </p>
          </div>

          {/* Div on bottom-left */}
          <div className="absolute bottom-0 right-0 p-3">
            <h1 className="text-sm lg:text-xl font-semibold">
              454 <br />
              <span className="uppercase">votes</span>
            </h1>
          </div>
        </BackgroundImage>
        <div className=" my-5 mx-8 grid grid-cols-2  lg:grid-cols-4 items-center justify-items-center justify-center gap-4">
          <Image
            src={AllImages.contest.winner.p1}
            className="h-32 w-fit rounded-md"
            alt="image"
          />
          <Image
            src={AllImages.contest.winner.p2}
            className="h-32 w-fit rounded-md"
            alt="image"
          />
          <Image
            src={AllImages.contest.winner.p3}
            className="h-32 w-fit rounded-md"
            alt="image"
          />
          <Image
            src={AllImages.contest.winner.p4}
            className="h-32 w-fit rounded-md"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default TopPhotoWinner;
