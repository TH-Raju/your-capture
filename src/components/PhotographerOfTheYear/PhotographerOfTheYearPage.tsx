"use client"
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "../Shared/BackgroundImage";
import { Button, Divider } from "antd";
import { useState } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LiaFacebookF } from "react-icons/lia";
import { CopyOutlined, FlagOutlined } from "@ant-design/icons";

const PhotographerOfTheYear = () => {  
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className=" mb-24">
      <BackgroundImage
      image={
        <Image
          // src={AllImages.exhibition.exhibitionBanner}
          src={AllImages.POTY}
          alt="Image Alt Text"
          className="rounded-md object-cover opacity-30"
          fill
        />
      }
    >
      <div className="flex flex-col justify-center items-center lg:mx-10">
        <h1 className="lg:text-7xl text-2xl font-semibold">Photographer Of The Year</h1>
        {/* <Link href="/contest/create-team">
        <Button
            className="border-none text-white border-orange-400 flex  items-center mt-10"
            style={{
              color: "white",
              backgroundColor: hovered ? "#fd8533" : "transparent",
              border: "1px solid #fd8533",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Create
          </Button></Link> */}
      </div>
    </BackgroundImage>
    <div className="mt-14">
      
      <div className="flex flex-col justify-center items-center gap-12">
        <Image
          src={AllImages.contest.winner.winnerPro}
          className="w-60 lg:w-72 h-fit"
          alt="user"
        />
        <div className="flex flex-col justify-center ">
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
            className="border-none text-white border-orange-400 my-5 "
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
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20">
        <div className="flex justify-center items-center  my-10 gap-2">
          <Image
            src={AllImages.contest.detail.voteIcon}
            className="h-8 w-fit"
            alt="vote"
          />
          <p className="text-xl font-semibold">
            10,897,492 <span className="text-xs">VOTES</span>
          </p>
        </div>

        <div className="flex justify-center items-center  lg:my-10 gap-2">
          <Image
            src={AllImages.contest.detail.timeIcon}
            className="h-8 w-fit"
            alt="vote"
          />
          <p className="text-xl font-semibold">
            Jan 23, 2024 <span className="text-xs"> ENDED</span>
          </p>
        </div>

        <div className="flex justify-center items-center  my-10 gap-2">
          <Image
            src={AllImages.contest.detail.dollars}
            className="h-8 w-fit"
            alt="vote"
          />
          <p className="text-xl font-semibold">
            Jan 23, 2024 <span className="text-xs"> ENDED</span>
          </p>
        </div>
      </div>
      <div>
        <div className="text-center mt-16">
          <h1 className="-mb-5 text-2xl uppercase">PHOTOGRAPHER OF THE YEAR</h1>
          <div className="w-[50%] lg:w-[20%] mx-auto">
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
        <p className="w-[90%] lg:w-[35%] mx-auto text-sm ">
        Capturing moments that transcend time, Photographer of the Year unveils the world's beauty through a lens of innovation and emotion. <br />
          Best of luck!
        </p>
      </div>
    </div>
    <div className=" w-[80%] mx-auto my-20 grid grid-cols-2  lg:grid-cols-4 items-center justify-items-center justify-center gap-4">
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
  );
};

export default PhotographerOfTheYear;
