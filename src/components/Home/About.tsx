/* eslint-disable react/no-unescaped-entities */
"use client";
// eslint-disable-next-line react/no-unescaped-entities
import { AllImages } from "@/assets/AllImage";
import { Divider } from "antd";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="text-center my-20 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="-mb-5 text-2xl">ABOUT US</h1>
        <div className="">
          <Divider
            style={{
              borderBlockColor: "#fd8533",
              marginRight: 30,
            }}
          />
          <Divider
            style={{
              borderBlockColor: "white",
              marginLeft: 20,
              marginTop: -20,
            }}
          />
        </div>
      </div>
      <div className="lg:w-[35%]">
        <p className="text-site-color text-4xl font-bold ">
          Your Capture Awards Captures All of Your Beautiful Memories
        </p>
      </div>
      <div className="lg:flex justify-center gap-10 lg:mx-36 mt-14 w-[90%] mx-auto">
        <Image
          src={AllImages.photographer}
          alt="photographer"
          className="h-full"
        />
        <div className="text-start mt-7  mx-10">
          <p className="font-medium text-3xl lg:w-[95%]">
            A Photographic Journey Through Life's Beautiful Tapestry.
          </p>
          <p className="font-thin  mt-4 lg:w-[95%]">
            Embark on a captivating odyssey through life's intricate tapestry,
            where each snapshot immortalizes a moment of beauty and wonder. From
            sunrise vistas to candid smiles, this photographic journey unveils
            the richness and diversity of human experience.
          </p>
        </div>
        <Image src={AllImages.studio} alt="studio" className="h-full" />
      </div>
    </div>
  );
};

export default About;
