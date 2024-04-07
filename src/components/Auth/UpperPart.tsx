"use client";
import { Button } from "antd";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { SiGoogle } from "react-icons/si";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";

const UpperPart = () => {
  return (
    <div>
      <div className="flex justify-center mb-14">
        <Image src={AllImages.logo} alt="logo" className="h-full" />
      </div>
      <h1 className="text-center text-3xl font-bold mb-12">
        Great to have you back !
      </h1>
      <Button
        className="w-full flex items-center my-3 border-orange-400 text-xl h-8 text-white font-thin  py-5 "
        style={{
          background: "transparent",
          borderColor: "#fd8533",
          color: "white",
        }}
      >
        <SiGoogle className="ml-8 mr-2 text-white font-thin bg-transparent hover:bg-transparent" />
        Continue with Google
      </Button>
      <Button
        className="w-full flex items-center my-3 border-orange-400 text-xl h-8 text-white font-thin  py-5 "
        style={{
          background: "transparent",
          borderColor: "#fd8533",
          color: "white",
        }}
      >
        <TiSocialFacebook className="ml-7 mr-1 text-3xl text-white font-thin bg-transparent hover:bg-transparent" />
        Continue with Facebook
      </Button>
    </div>
  );
};

export default UpperPart;
