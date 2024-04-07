"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider } from "antd";
import Image from "next/image";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LiaFacebookF } from "react-icons/lia";

const DetailsJoinedChallenge = () => {
  return (
    <div className="mt-14">
      <div className="flex justify-center items-center gap-5">
        <Image
          src={AllImages.contest.detail.detailsUser}
          className="lg:h-40 h-36 w-fit rounded-tr-2xl rounded-bl-2xl"
          alt="user"
        />
        <div>
          <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 mt-3">
            <span>Charles Deo</span>
          </h1>

          <div className="flex justify-start items-center gap-5">
            <Button
              className="border-none text-white border-orange-400 my-5"
              style={{
                color: "black",
                backgroundColor: "#fff",
                border: "1px solid #fff",
              }}
            >
              <div className="flex items-center justify-center gap-1">
                <span>Follow</span>
                <IoIosAddCircleOutline className="h-4 w-4" />
              </div>
            </Button>
            <div className="border inline-block">
              <LiaFacebookF className="h-6 w-6 p-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20">
        <div className="flex justify-center items-center  my-10 gap-2">
          <Image
            src={AllImages.contest.detail.voteIcon}
            className="h-8 w-fit"
            alt="vote"
          />
          <p className="text-xl font-semibold">
            10,897,492 <span className="text-xs">VOTES</span>
          </p>
        </div>

        <div className="flex justify-center items-center  lg:my-10 gap-2">
          <Image
            src={AllImages.contest.detail.timeIcon}
            className="h-8 w-fit"
            alt="vote"
          />
          <p className="text-xl font-semibold">
            Jan 23, 2024 <span className="text-xs"> ENDED</span>
          </p>
        </div>

        <div className="flex justify-center items-center  my-10 gap-2">
          <Image
            src={AllImages.contest.detail.dollars}
            className="h-8 w-fit"
            alt="vote"
          />
          <p className="text-xl font-semibold">
            Jan 23, 2024 <span className="text-xs"> ENDED</span>
          </p>
        </div>
      </div>
      <div>
        <div className="text-center mt-16">
          <h1 className="-mb-5 text-2xl uppercase">TOP PHOTOGRAPHER WINNER</h1>
          <div className="w-[50%] lg:w-[20%] mx-auto">
            <Divider
              style={{
                borderBlockColor: "#fd8533",
                marginRight: 15,
              }}
            />
            <Divider
              style={{
                borderBlockColor: "white",
                marginLeft: 15,
                marginTop: -20,
              }}
            />
          </div>
        </div>
        <p className="w-[90%] lg:w-[35%] mx-auto text-sm ">
          Share your most captivating photo capturing the essence of your
          favorite <br /> season - be it spring, summer, winter, or fall. <br />
          Best of luck!
        </p>
      </div>
    </div>
  );
};

export default DetailsJoinedChallenge;
