"use client";

import Image from "next/image";
import back from "../../assets/home/back-girl.png";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "../Shared/BackgroundImage";
import { Button } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Discover = () => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <BackgroundImage
      image={
        <Image
          src={AllImages.discover.skills}
          alt="Image Alt Text"
          className="object-cover object-center h-screen"
          fill
        />
      }
    >
      <div className="text-center mb-20 mt-10  w-[80%] mx-auto flex justify-center items-center">
        <div className="">
          <p className="text-center text-2xl font-bold">
            Discover incredible insights, strengthen skills.
          </p>
          <p className="w-[70%] mx-auto mt-4">
            Explore insights, bolster skills. Elevate your expertise with
            newfound knowledge and refined abilities
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5  py-10">
            <div className="border p-2 rounded-full border-site-color">
              <Button
                type="primary"
                shape="circle"
                className="h-44 w-44"
                style={{ backgroundColor: "#fd8533" }}
              >
                <div
                  className="flex flex-col items-center justify-center delay-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={AllImages.discover.experiment}
                    alt="experiment"
                    className="h-14 w-fit"
                  />
                  <p className="text-black font-bold">Experiment</p>
                  {hovered && (
                    <p className="text-xs text-black">WITH YOUR PHOTOS</p>
                  )}
                </div>
              </Button>
            </div>
            <div className="border p-2 rounded-full border-site-color">
              <Button
                type="primary"
                shape="circle"
                className="h-32 w-32 hover:h-40 hover:w-40"
                style={{ backgroundColor: "#fd8533" }}
              >
                <div className="flex flex-col items-center justify-center delay-150">
                  <Image
                    src={AllImages.discover.promote}
                    alt="experiment"
                    className="h-14 w-fit"
                  />
                  <p className="text-black font-bold">PROMOTE</p>
                </div>
              </Button>
            </div>
            <div className="border p-2 rounded-full border-site-color">
              <Button
                type="primary"
                shape="circle"
                className="h-32 w-32 hover:h-40 hover:w-40"
                style={{ backgroundColor: "#fd8533" }}
              >
                <div className="flex flex-col items-center justify-center delay-150">
                  <Image
                    src={AllImages.discover.votes}
                    alt="experiment"
                    className="h-14 w-fit"
                  />
                  <p className="text-black font-bold uppercase">charges</p>
                </div>
              </Button>
            </div>
            <div className="border p-2 rounded-full border-site-color">
              <Button
                type="primary"
                shape="circle"
                className="h-32 w-32 hover:h-40 hover:w-40"
                style={{ backgroundColor: "#fd8533" }}
              >
                <div className="flex flex-col items-center justify-center delay-150">
                  <Image
                    src={AllImages.discover.keys}
                    alt="experiment"
                    className="h-14 w-fit"
                  />
                  <p className="text-black font-bold">KEYS</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Discover;
