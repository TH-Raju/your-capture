"use client"
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "../Shared/BackgroundImage";
import { Button } from "antd";
import { useState } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import Link from "next/link";

const Team = () => {  
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
          src={AllImages.TeamPhoto}
          alt="Image Alt Text"
          className="rounded-md object-cover opacity-30"
          fill
        />
      }
    >
      <div className="flex flex-col justify-center items-center lg:mx-10">
        <h1 className="text-5xl font-semibold">Create Your Own Team</h1>
        <Link href="/contest/create-team">
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
          </Button></Link>
      </div>
    </BackgroundImage>
      {/* <div className="absolute lg:top-[15%] top-5 left-1/2 transform -translate-x-1/2 text-black lg:text-3xl  text-xl text-center font-bold">
        <h1 className="lg:w-[60%] mx-auto">Your Capture Awards Teams</h1>
      </div> */}
    </div>
  );
};

export default Team;
