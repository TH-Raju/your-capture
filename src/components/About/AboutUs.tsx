"use client";
import Image from "next/image";
import BackgroundImage from "../Shared/BackgroundImage";
import { Divider } from "antd";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AllImages } from "@/assets/AllImage";
import Testimonials from "./Testimonials";

const AboutUs = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); // Small screens
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(3); // Medium screens
      } else if (window.innerWidth > 1024) {
        setSlidesPerView(5); // Large screens
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
    <div className=" my-24 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="-mb-5 text-2xl text-site-color">
          About <span className="text-white">Us</span>
        </h1>
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
      <div>
        <p className="w-[50%] mx-auto text-center font-light text-gray-400">
          "Your Capture Awards" is a website designed for hosting photo contests
          where teams compete against each other. Participants submit their
          photos, and visitors to the website can vote for their favorites.
          Winning teams earn vote key charges and prestigious awards, adding an
          element of competition and recognition to the platform. The website
          provides an interactive and engaging platform for photographers to
          showcase their work, gain recognition, and compete for rewards.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-[50%] mx-auto my-10">
        <div className="text-center my-3">
          <h1 className="text-5xl font-bold">+10 years</h1>
          <p className="lg:text-right text-center mt-3">Experience</p>
        </div>
        <Divider
          type="vertical"
          style={{ borderColor: "#fff", height: "20vh" }}
          className="hidden lg:block"
        />
        <Divider
          type="horizontal"
          style={{ borderColor: "#fff" }}
          className=" lg:hidden block"
        />
        <div className="text-center my-3">
          <h1 className="text-5xl font-bold">+450</h1>
          <p className="lg:text-right text-center mt-3">Participants</p>
        </div>
        <Divider
          type="vertical"
          style={{ borderColor: "#fff", height: "20vh" }}
          className="hidden lg:block"
        />
        <Divider
          type="horizontal"
          style={{ borderColor: "#fff" }}
          className=" lg:hidden block"
        />
        <div className="text-center my-3">
          <h1 className="text-5xl font-bold">+15k</h1>
          <p className="lg:text-right text-center mt-3">Total photos</p>
        </div>
      </div>

      {/* swap image  */}
      <div className=" w-[80%] mx-auto mt-10 ">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-10 ">
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
  );
};

export default AboutUs;
