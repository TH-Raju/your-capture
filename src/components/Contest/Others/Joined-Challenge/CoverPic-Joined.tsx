"use client";

import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import JoinedBackgroundImage from "./Background-compo";
import { Button } from "antd";

const JoinedBanner = () => {
  return (
    <JoinedBackgroundImage
      image={
        <Image
          src={AllImages.contest.joined.joinedBg}
          alt="Image Alt Text"
          className="rounded-md opacity-35"
          fill
        />
      }
    >
      <div className="flex flex-col justify-center items-center lg:mx-10">
        <h1 className="text-5xl font-semibold text-center">
          Alpine sunrise, high mountain scenery.
        </h1>
        <Button
          style={{ backgroundColor: "#fd8533", border: "none", color: "black" }}
          className="my-6 uppercase px-8"
        >
          Vote
        </Button>
      </div>
    </JoinedBackgroundImage>
  );
};

export default JoinedBanner;
