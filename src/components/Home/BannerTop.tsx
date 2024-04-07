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

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
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
          src={AllImages.topBack}
          alt="Image Alt Text"
          className="object-cover object-center h-screen rounded-md"
          fill
        />
      }
    >
      {/* Change the  w-[80%] and lg:-ml-14 or delete it  */}

      <div className="flex flex-col-reverse lg:flex-row justify-start items-center lg:mx-10  lg:w-[80%]">
        <div className=" ">
          <div className="flex items-centerz gap-5 mb-4">
            <Image src={AllImages.award} alt="award" className="h-fit" />
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-b from-orange-500 to-orange-300 inline-block text-transparent bg-clip-text font-bold">
                THE
              </h1>
              <p className="bg-gradient-to-b from-orange-300 to-orange-200 inline-block text-transparent bg-clip-text font-bold">
                GAME
              </p>
              <p className="font-bold">AWARD</p>
            </div>
          </div>
          <p className="text-6xl lg:w-[55%] w-full font-bold my-4">
            Play, Improve & Win.
          </p>
          <p className=" lg:w-[45%]">
            Your Capture Awards, the ultimate destination for photographers,
            discussing, and creating stunning imagery.
          </p>

          <div className="my-4 flex gap-12">
            <div>
              <h4>Online</h4>
              <p>16,985,304</p>
            </div>
            <div>
              <h4>Voting Now</h4>
              <p>16,985,304</p>
            </div>
          </div>

          <Button
            className="border-none text-white border-orange-400 flex  items-center"
            style={{
              color: "white",
              backgroundColor: hovered ? "#fd8533" : "transparent",
              border: "1px solid #fd8533",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            LEARN MORE <ArrowDownOutlined className="border  rounded-full" />
          </Button>
        </div>
        {/* <div data-aos="fade-down-left">
          <Image
            src={AllImages.person}
            alt="logo"
            className="lg:h-full h-60 w-fit"
          />
        </div> */}
      </div>
    </BackgroundImage>
  );
};

export default Banner;
