"use client";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AllImages } from "@/assets/AllImage";
import { openPageDB } from "@/demoDB/OpenPageDB";
import TestimonialCard from "./TestimonialCard";
import { Divider } from "antd";

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); // Small screens
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(3); // Medium screens
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
    <div
      className=" 
        mb-52 mt-40 flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <h1 className="-mb-5 text-4xl text-site-color font-bold">
          Testimonials
        </h1>{" "}
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
      {/* swap cards  */}
      <div className="  w-[99%] mx-auto mt-10">
        <Swiper
          slidesPerView={slidesPerView}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper md:w-[90%] mx-auto my-5"
        >
          {openPageDB.map((card) => (
            <SwiperSlide className=" mb-20" key={card.id}>
              <TestimonialCard data={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
