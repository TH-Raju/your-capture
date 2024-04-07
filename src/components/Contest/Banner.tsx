"use client";

import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import BackgroundImage from "./BanComponent";
import { Button } from "antd";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const ContestJoinBanner = () => {
  return (
    <div>
      {" "}
      <BackgroundImage
        image={
          <Image
            src={AllImages.contest.contestBanner}
            alt="Image Alt Text"
            className="rounded-md "
            fill
          />
        }
      >
        <div className="flex flex-col justify-center items-center lg:mx-10 my-5 lg:my-0">
          <h1 className="text-5xl font-semibold text-center">Sunset Tree</h1>
          <p className="w-[65%] mx-auto text-center my-5">
            Fresh challenges just unveiled
          </p>
          <Link href="/contest/open">
            <Button
              style={{
                color: "white",
                backgroundColor: "#fd8533",
                border: "1px solid #fd8533",
              }}
            >
              <h2 className="flex items-center justify-center gap-2">
                {" "}
                <span>Join Now</span>
                <MdArrowForward className="h-5 w-5" />
              </h2>
            </Button>
          </Link>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default ContestJoinBanner;
