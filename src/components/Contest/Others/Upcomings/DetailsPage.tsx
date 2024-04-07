"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider } from "antd";
import Image from "next/image";

const DetailsPage = () => {
  return (
    <div className="">
      <div className="lg:w-[80%] px-3 mx-auto flex flex-col justify-center items-center mt-28">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="lg:w-[50%] flex flex-col items-center justify-center">
            <Image
              src={AllImages.contest.deails.deatilUser}
              className="h-36 w-36 rounded-full"
              alt="user"
            />
            <h1 className="text-2xl font-semibold top-1 left-0 mt-10 mb-7">
              By Jonny khan
            </h1>
            <Divider type="horizontal" style={{ borderColor: "gray" }} />
            <Button
              className="px-4 py-1 uppercase  text-black rounded-md  bg-site-color "
              style={{
                color: "black",
                border: "1px solid #fd8533",
                backgroundColor: "#fd8533",
              }}
            >
              Follow
            </Button>
          </div>
          <div className="lg:w-[50%] text-center">
            <h1 className="text-4xl mb-8">“ Sunset Tree “</h1>
            <p className=" font-thin">
              The Sunset Tree stands tall, its branches silhouetted against the
              vibrant hues of dusk. A symbol of strength and resilience, it
              whispers secrets of the day's end, offering solace and serenity to
              those who pause beneath its boughs.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-32 bg-[#181818] my-24 py-8">
        <div className="flex flex-col justify-center items-center border border-site-color p-4 rounded-md lg:w-[20%]">
          <Image
            src={AllImages.contest.deails.voteIcon}
            className="h-20 w-fit"
            alt="vote"
          />
          <h1>VOTING START SOON </h1>
        </div>
        <div className="hidden lg:block">
          <Divider
            type="vertical"
            style={{
              borderColor: "gray",
              height: "25vh",
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-center border border-site-color p-4 rounded-md lg:w-[20%]">
          <Image
            src={AllImages.contest.deails.dollar}
            className="h-20 w-fit"
            alt="vote"
          />
          <h1>$100 IN AWARDS </h1>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
