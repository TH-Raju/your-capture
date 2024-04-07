/* eslint-disable @next/next/no-img-element */
"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider, Modal, Statistic } from "antd";
import type { CountdownProps } from "antd";
import Image from "next/image";
import { useState } from "react";
import UploadModalData from "./UploadModalData";
import Link from "next/link";
import { useRouter } from "next/navigation";
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
const onFinish: CountdownProps["onFinish"] = () => {
  console.log("finished!");
};

const SingleCard = ({ data }: { data: any }) => {
  const router = useRouter();
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const handleImageClick = () => {
    router.push("/contest/joined-challenge");
  };

  const handleButtonClick = (e: any) => {
    e.stopPropagation(); // Prevent click event from bubbling to the parent div
    setModal1Open(true);
  };

  return (
    <div className="max-w-xs">
      <h1 className="text-center pb-5 text-2xl">“ {data.name} “</h1>
      <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
        <Image
          src={data.bg}
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
          alt="Louvre"
        />
        {/* User name and Image */}
        <div
          onClick={() => router.push("/contest/joined-challenge/details")}
          className="absolute inset-0 flex flex-col items-center justify-start p-4 text-white bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
        >
          <div className="bg-gray-600 bg-opacity-70 flex items-center gap-2 px-5 py-1 rounded-full w-full">
            <Image
              src={data.user}
              className="h-8 w-8 rounded-full"
              alt="user"
            />
            <h1 className="text-lg font-bold top-1 left-0">
              By {data.userName}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-2  px-2 ">
            <Button
              className="px-4 py-1 uppercase  text-black rounded-md mt-5 bg-white z-40"
              style={{ color: "#fd8533", border: "none" }}
              onClick={handleButtonClick}
            >
              Join
            </Button>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="flex justify-center items-center w-full absolute bottom-0 space-x-4 bg-[#181818] pt-1">
          <div className=" flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.contestDollar}
              className="h-6 w-6"
              alt="dollar"
            />
            <p className="text-center text-xl mt-1  font-semibold">
              ${data.dollar}
            </p>
          </div>
          <Divider
            type="vertical"
            style={{ borderColor: "#fd8533", height: "5vh" }}
          />
          <div>
            <Countdown
              value={deadline}
              onFinish={onFinish}
              valueStyle={{ color: "white" }}
            />
          </div>
          <Divider
            type="vertical"
            style={{ borderColor: "#fd8533", height: "5vh" }}
          />
          <div className=" flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.contestVote}
              className="h-6 w-6"
              alt="dollar"
            />
            <p className="text-center text-xl mt-1  font-semibold">68 M</p>
          </div>
        </div>
      </div>

      <Modal
        centered
        open={modal1Open}
        footer={null}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <div className="mt-10 text-center ">
          <h1 className="uppercase font-bold text-3xl">Light</h1>
          <div className="text-center flex gap-3 items-center justify-center mb-7 ">
            <div className="  ">
              <Divider
                style={{
                  borderBlockColor: "#fd8533",
                  marginLeft: -2,
                }}
              />
              <Divider
                style={{
                  borderBlockColor: "black",
                  marginLeft: 8,
                  marginRight: 75,
                  marginTop: -20,
                }}
              />
            </div>
            <h1 className="text-sm uppercase lg:text-sm text-black font-semibold mx-5">
              4 PHOTO CHALLENGE
            </h1>
            <div className="">
              <Divider
                style={{
                  borderBlockColor: "black",
                  marginLeft: -2,
                }}
              />
              <Divider
                style={{
                  borderBlockColor: "#fd8533",
                  marginLeft: 8,
                  marginRight: 75,
                  marginTop: -20,
                }}
              />
            </div>
          </div>
          <div className="bg-opacity-70 flex items-center gap-2 px-5 py-1 rounded-full w-full ">
            <Image
              src={AllImages.contest.modalPhotoGrapher}
              className="h-12 w-12 rounded-full"
              alt="user"
            />
            <h1 className="text-lg font-semibold top-1 left-0">
              By {data.userName}
            </h1>
          </div>
          <p className="text-start w-[90%] mx-auto mt-2 mb-6 ">
            Capture impactful moments with beautiful lighting, be it natural or
            artificial. Light holds the key to success in creating lasting
            impressions.
          </p>
          <p className="border-b border-b-black border-spacing-28 mt-0 w-[90%] mx-auto"></p>
          <div className="flex justify-around">
            <Button
              className="px-4 py-1 uppercase  text-black rounded-md mt-5 bg-white"
              style={{ color: "black", border: "1px solid #fd8533" }}
              onClick={() => setModal2Open(true)}
            >
              Continue
            </Button>
            <Link href="/contest/upcoming-challange/rules">
              <Button
                className="px-4 py-1 uppercase  text-black rounded-md mt-5 bg-white"
                style={{ color: "black", border: "1px solid #fd8533" }}
              >
                View Rules
              </Button>
            </Link>
          </div>
        </div>
        <Modal
          centered
          open={modal2Open}
          footer={null}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <UploadModalData />
        </Modal>
      </Modal>
    </div>
  );
};

export default SingleCard;
