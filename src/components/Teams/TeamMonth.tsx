"use client";

import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "../Shared/BackgroundImage";
import { Divider } from "antd";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const TeamMonth = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); // Small screens
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2); // Medium screens
      }
    };

    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial values
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BackgroundImage
      image={
        <Image
          src={AllImages.backCircle}
          alt="Image Alt Text"
          className="object-fit object-center opacity-25 "
          fill
        />
      }
    >
      <div className="text-center mb-20 mt-24  w-[80%] mx-auto items-center">
        <div className="text-center">
          <h1 className="-mb-5 text-4xl">
            {" "}
            <span className="text-site-color">TEAM OF</span> THE MONTH
          </h1>
          <div className=" lg:w-[15%] w-[40%] mx-auto">
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
        <div className="mt-14"></div>
        <p className="text-center mt-14 lg:w-[70%] mx-auto">
          Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie aliquet
          arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor lectus quis
          turpis malesuada, eu luctus elit dignissim.
        </p>
        <div className=" lg:w-[25%] w-[50%] mx-auto font-bold">
          <Divider
            style={{
              borderBlockColor: "#fd8533",
              marginRight: 30,
            }}
          />
        </div>
        <div className=" lg:w-[80%] mx-auto mt-10">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide className="mb-10">
              <div className="bg-white flex flex-col justify-center items-center mx-8 mt-20">
                <Image
                  src={AllImages.team.photographer2}
                  alt="images"
                  className="object-cover h-72 w-auto -mt-20"
                />
                <div className="text-center mt-4">
                  <h1 className="text-black font-bold text-xl">Emily Parker</h1>
                  <h1 className="text-black">Portrait Photographer</h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="mb-10">
              <div className="bg-white flex flex-col justify-center items-center mx-8 mt-20">
                <Image
                  src={AllImages.team.photographer2}
                  alt="images"
                  className="object-cover h-72 w-auto -mt-20"
                />
                <div className="text-center mt-4">
                  <h1 className="text-black font-bold text-xl">Emily Parker</h1>
                  <h1 className="text-black">Portrait Photographer</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div className="bg-white flex flex-col justify-center items-center mx-8 mt-20">
                <Image
                  src={AllImages.team.photographer2}
                  alt="images"
                  className="object-cover h-72 w-auto -mt-20"
                />
                <div className="text-center mt-4">
                  <h1 className="text-black font-bold text-xl">Emily Parker</h1>
                  <h1 className="text-black">Portrait Photographer</h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default TeamMonth;
