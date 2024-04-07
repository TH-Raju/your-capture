"use client";
import { AllImages } from "@/assets/AllImage";
import { Divider, Progress } from "antd";
import Image from "next/image";
import React from "react";

const CompanySection = () => {
  return (
    <div className=" my-24 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="-mb-5 text-2xl text-site-color">Company</h1>
        <div className="">
          <Divider
            style={{
              borderBlockColor: "#fd8533",
              marginLeft: -10,
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
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center lg:gap-0 gap-5">
        <div className="">
          <Image
            src={AllImages.about.building}
            alt="building"
            className="bg-white max-h-96"
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold pb-5 text-center md:text-start">
            Your Capture Awards
          </h1>
          <p className="leading-6 lg:w-[75%] ">
            Your Capture Awards Studios specializes in immortalizing your
            moments with unparalleled creativity and precision. Our team of
            passionate photographers harnesses the power of light and
            composition to craft timeless images that capture the essence of
            every occasion
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-start mt-12 gap-14 justify-items-center lg:justify-items-start">
            <Progress
              type="circle"
              strokeColor={"#FD8533"}
              percent={97}
              size={90}
              format={(percent) => (
                <p className="text-white font-bold">
                  {percent}% <br />{" "}
                  <span className="font-thin text-base">Capture</span>
                </p>
              )}
            />
            <Progress
              type="circle"
              strokeColor={"#FD8533"}
              percent={90}
              size={90}
              format={(percent) => (
                <p className="text-white font-bold">
                  {percent}% <br />
                  <span className="font-thin text-base">Final Cut</span>
                </p>
              )}
            />
            <Progress
              type="circle"
              strokeColor={"#FD8533"}
              percent={88}
              size={90}
              format={(percent) => (
                <p className="text-white font-bold">
                  {percent}% <br />
                  <span className="font-thin text-base">Gaining</span>
                </p>
              )}
            />
            <Progress
              type="circle"
              strokeColor={"#FD8533"}
              percent={82}
              size={90}
              format={(percent) => (
                <p className="text-white font-bold">
                  {percent}% <br />
                  <span className="font-thin text-base">Vedio</span>
                </p>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
