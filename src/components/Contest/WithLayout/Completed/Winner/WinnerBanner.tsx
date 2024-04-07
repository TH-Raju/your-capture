"use client";

import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "@/components/Contest/Others/Upcomings/BackgroudCompo";

const WinnerBanner = () => {
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
        <h1 className="text-5xl font-semibold text-center">My Best Photo</h1>
      </div>
    </BackgroundImage>
  );
};

export default WinnerBanner;
