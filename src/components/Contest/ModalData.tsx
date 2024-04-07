"use client";

import { Button, Progress } from "antd";
import { green, red, gray, orange } from "@ant-design/colors";
import { useState } from "react";
import Link from "next/link";

const ContestModalData = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1 className="lg:text-4xl text-xl lg:font-semibold font-bold mt-10 text-center">
        You have joined <br /> ‘Make Your Mark’ challenge
      </h1>
      <p className="lg:text-2xl text-lg font-semibold my-3">Exposure Bonus</p>
      <div className="border border-site-color border-spacing-16 lg:w-36 w-28 lg:h-36 h-28 rounded-full flex flex-col items-center justify-center">
        <p className="border border-site-color border-spacing-16 lg:w-32 w-24 lg:h-32 h-24 rounded-full flex flex-col items-center justify-center">
          <span className="flex lg:gap-20 gap-16">
            <span>L</span>
            <span>H</span>
          </span>
          <Progress
            steps={5}
            percent={98}
            format={() => ""}
            strokeColor={[gray[0], orange[1], orange[3], orange[4], orange[5]]}
            className="ml-8"
          />
        </p>
      </div>
      <p className="lg:w-[50%] text-center text-xl mx-auto lg:my-8 my-4">
        Your Exposure Meter is empty. <br /> Fill up to get your Exposure Bonus!
      </p>
      <div className="flex flex-row justify-between lg:gap-20 gap-7">
        <Button
          className="border-none text-black border-orange-400  mx-3"
          style={{
            color: "black",
            backgroundColor: hovered ? "#fd8533" : "transparent",
            border: "1px solid #fd8533",
            width: "60px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Fill
        </Button>

        <Button
          className=" text-white border-orange-400"
          style={{
            color: "black",
            backgroundColor: hovered2 ? "#fd8533" : "transparent",
            border: "1px solid #fd8533",
            width: "60px",
          }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          Span
        </Button>
      </div>
    </div>
  );
};

export default ContestModalData;
