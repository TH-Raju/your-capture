/* eslint-disable react/no-unescaped-entities */
"use client";

import { AllImages } from "@/assets/AllImage";
import { Divider } from "antd";
import Image from "next/image";

const CrazeStudio = () => {
  return (
    <div className=" my-20 flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Hello! This is Capture Craze Studios.
      </h1>
      <div>
        <div className="text-center flex gap-3 items-center lg:w-[30%] mx-auto mb-7 ">
          <div className="  ">
            <Divider
              style={{
                borderBlockColor: "#fd8533",
                marginLeft: -2,
              }}
            />
            <Divider
              style={{
                borderBlockColor: "white",
                marginLeft: 8,
                marginRight: 75,
                marginTop: -20,
              }}
            />
          </div>
          <h1 className="text-xl lg:text-2xl text-site-color mx-5">
            MY SPECIALTIES
          </h1>
          <div className="">
            <Divider
              style={{
                borderBlockColor: "#fd8533",
                marginLeft: -2,
              }}
            />
            <Divider
              style={{
                borderBlockColor: "white",
                marginLeft: 8,
                marginRight: 75,
                marginTop: -20,
              }}
            />
          </div>
        </div>
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-items-center items-center bg-[#1F1F1F] py-3">
            <Image
              src={AllImages.about.lens}
              className="w-fit max-h-[494px] "
              alt="lens"
            />
            <h1 className="text-3xl font-semibold text-site-color mt-7 ">
              Lens Expertise
            </h1>
            <p className="w-[60%] mx-auto mt-3 text-center">
              Specialized eye. Finding beauty in the overlooked, crafting unique
              visual narratives with precision and creativity.
            </p>
          </div>
          <div className="flex flex-col justify-items-center items-center bg-[#1F1F1F] py-3">
            <Image
              src={AllImages.about.niche}
              className="w-fit max-h-[494px] "
              alt="lens"
            />
            <h1 className="text-3xl font    -semibold text-site-color mt-7 ">
              Photo Niche
            </h1>
            <p className="w-[60%] mx-auto mt-3 text-center">
              Precision focus, artistic composition. Capturing moments with
              clarity and finesse, revealing unique perspectives.
            </p>
          </div>
          <div className="flex flex-col justify-items-center items-center bg-[#1F1F1F] py-3">
            <Image
              src={AllImages.about.savvy}
              className="w-fit max-h-[494px] "
              alt="lens"
            />
            <h1 className="text-3xl font-semibold text-site-color mt-7 ">
              Snapshot Savvy
            </h1>
            <p className="w-[60%] mx-auto mt-3 text-center">
              Quick eye, creative flair. Transforming fleeting moments into
              timeless images, capturing life's essence effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrazeStudio;
