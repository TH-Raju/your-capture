"use client";

import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "../Shared/BackgroundImage";
import { Divider } from "antd";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Memories = () => {
  return (
    <BackgroundImage
      image={
        <Image
          src={AllImages.backCircle}
          alt="Image Alt Text"
          className="object-fit object-center opacity-25"
          fill
        />
      }
    >
      <div className="text-center mb-20 mt-10  w-[80%] mx-auto  items-center">
        <div className="text-center">
          <h1 className="-mb-5 text-2xl">MEMORIES</h1>
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
        <div className="mt-14">
          <p className="text-site-color text-4xl font-bold lg:w-[40%]  mx-auto">
            Guardian of cherished memories through time.
          </p>
        </div>
        <p className="text-center mt-14 lg:w-[45%] mx-auto">
          Presenting nearly 30,000 diverse captures, spanning natural, cultural,
          and everything-in-between imagery in our collection.
        </p>
        <div className=" lg:w-[80%] mx-auto mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <Image
                src={AllImages.photographer}
                alt="images"
                height={300}
                width={300}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Memories;
