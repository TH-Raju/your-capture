"use client";

import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "./BackgroudCompo";

const UpcomingBanner = () => {
  return (
    <BackgroundImage
      image={
        <Image
          src={AllImages.contest.UpBanner}
          alt="Image Alt Text"
          className="rounded-md "
          fill
        />
      }
    >
      <div className="flex flex-col justify-center items-center lg:mx-10">
        <h1 className="text-5xl font-semibold text-center">
          YOUR CAPTURE AWARD
        </h1>
        <p className="w-[65%] mx-auto text-center my-10">
          Showcase your photography in galleries spanning the globe, giving your
          work exposure to diverse audiences worldwide
        </p>
      </div>
    </BackgroundImage>
  );
};

export default UpcomingBanner;
