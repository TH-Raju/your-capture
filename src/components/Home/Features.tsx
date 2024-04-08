"use client";

import { AllImages } from "@/assets/AllImage";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const Features = () => {
  return (
    <div className="text-center my-36 ">
      <div>
        <h1 className="text-3xl">Key Features Of Your Capture Awar ds</h1>
        {/* <p className="font-thin text-xl lg:w-[35%] mx-auto mt-3">
          We are constantly working to bring new updates and features to Upload,
          such as:
        </p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-10">
        <div className="border border-site-color flex flex-col justify-center items-center gap-5 rounded-md">
          <Image
            src={AllImages.POTY}
            alt="feature"
            className="h-32 my-5 w-fit object-contain rounded-md"
          />
          <h1 className="text-xl font-bold">Photographer of the year</h1>
          <p className="font-thin w-[70%]  mx-auto ">
          Capturing moments that transcend time, Photographer of the Year unveils the world's beauty through a lens of innovation and emotion. 
          </p>
        </div>
        <Link
          href="/contest/create-team"
          className="border border-site-color flex flex-col justify-center items-center gap-5 rounded-md"
        >
          <Image
            src={AllImages.TeamPhoto}
            alt="feature"
            className="h-32 my-5 w-fit object-cover rounded-md"
          />
          <h1 className="text-xl font-bold">Create a Team</h1>
          <p className="font-thin w-[70%]  mx-auto ">
          A dynamic ensemble of diverse talents united by a common goal, synergy  ing creativity, innovation, and excellence to achieve success.
          </p>
        </Link>
        <Link href="/exhibitions" className="border border-site-color flex flex-col justify-center items-center gap-5 p-6 rounded-md">
          <Image
            src={AllImages.Exhibition}
            alt="feature"
            className="h-32 my-5 w-fit rounded-md"
          />
          <h1 className="text-xl font-bold">Host a Exhibition</h1>
          <p className="font-thin lg:w-[70%]  mx-auto ">
          Experience innovation and creativity at our immersive exhibition showcasing cutting-edge art, technology, and culture
          </p>
        </Link>
      </div>

      <div>
        <p className="font-thin text-xl lg:w-[35%] mx-auto my-3">
          We are constantly working to bring new updates and features to Upload.
        </p>
        <h1 className="text-3xl font-bold">And so much more...</h1>
        <p className="font-thin text-xl lg:w-[35%] mx-auto mt-3 ">
          Earn achievements, read reviews, explore custom recommendations, and
          more.
        </p>
        <Link href="/login">
          <Button
            className="border-none text-white border-orange-400  mx-3 my-8 "
            style={{
              color: "black",
              backgroundColor: "#fd8533",
              border: "1px solid #fd8533",
            }}
          >
            <div className="flex items-center justify-center gap-2">
              {" "}
              <span>Upload Image </span>
              <MdArrowForward className="h-5 w-5" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
