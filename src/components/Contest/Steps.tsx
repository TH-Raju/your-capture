"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";
import { useState } from "react";
import { Button, Modal, Popover, Progress } from "antd";
import { RiTeamFill } from "react-icons/ri";
import Link from "next/link";

const Steps = () => {
  const [trophyOpen, setTrophyOpen] = useState(false);

  return (
    <div className="w-full py-6 mt-20 mb-10">
      <div className="flex">
        <div className="w-1/4">
          <div className="relative mb-2">
            <Popover
              placement="bottomRight"
              title={"APPRENTICE"}
              content={"Contents "}
              // arrow={mergedArrow}
            >
              <div
                className="w-10 h-10 mx-auto bg-white rounded-full text-lg text-white flex items-center"
                onClick={() => setTrophyOpen(true)}
              >
                <span className="text-center flex justify-center text-white w-full">
                  <Image
                    src={AllImages.contest.lock}
                    className="h-6 w-fit"
                    alt="icon"
                  />
                </span>
              </div>
            </Popover>
          </div>

          <div className="text-xs text-center md:text-base">APPRENTICE</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-gray-600 py-1 rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <Popover
              placement="bottomRight"
              title={"STUDENT"}
              content={"Contents "}
              // arrow={mergedArrow}
            >
              <div className="w-10 h-10 mx-auto bg-white rounded-full text-lg text-white flex items-center">
                <span className="text-center flex justify-center text-white w-full">
                  <Image
                    src={AllImages.contest.lock}
                    className="h-6 w-fit"
                    alt="icon"
                  />
                </span>
              </div>
            </Popover>
          </div>

          <div className="text-xs text-center md:text-base">STUDENT</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: " translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-gray-600 py-1 rounded"
                  style={{ width: "33%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
              <span className="text-center flex justify-center text-white w-full">
                <Image
                  src={AllImages.contest.lock}
                  className="h-6 w-fit"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">TRAINED</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-gray-600 py-1 rounded"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-gray-500 border-2 border-gray-600 rounded-full text-lg text-white flex items-center">
              <span className="text-center flex justify-center text-white w-full">
                <Image
                  src={AllImages.contest.lock}
                  className="h-6 w-fit"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">TALENTED</div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-gray-500 border-2 border-gray-600 rounded-full text-lg text-white flex items-center">
              <span className="text-center flex justify-center text-white w-full">
                <Image
                  src={AllImages.contest.lock}
                  className="h-6 w-fit"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">CONTENDER</div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-gray-500 border-2 border-gray-600 rounded-full text-lg text-white flex items-center">
              <span className="text-center flex justify-center text-white w-full">
                <Image
                  src={AllImages.contest.lock}
                  className="h-6 w-fit"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">VIRTUOSO</div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-gray-500 border-2 border-gray-600 rounded-full text-lg text-white flex items-center">
              <span className="text-center flex justify-center text-white w-full">
                <Image
                  src={AllImages.contest.lock}
                  className="h-6 w-fit"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">LEADER</div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-gray-500 border-2 border-gray-600 rounded-full text-lg text-white flex items-center">
              <span className="text-center flex justify-center text-white w-full">
                <Image
                  src={AllImages.contest.lock}
                  className="h-6 w-fit"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base ">AVANTGARDE</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-600 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="w-10 h-10 mx-auto bg-gray-500 border-2 border-gray-600 rounded-full text-lg text-white flex items-center">
              <span className="text-center flex justify-center text-white w-full">
                <Image
                  src={AllImages.contest.lock}
                  className="h-6 w-fit"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">
            {" "}
            <StarFilled className="text-site-color mr-1" />
            Pro{" "}
          </div>
        </div>
      </div>
      <Modal
        centered
        open={trophyOpen}
        footer={null}
        onOk={() => setTrophyOpen(false)}
        onCancel={() => setTrophyOpen(false)}
        width={550}
      >
        <div className="mt-5">
          <div className="flex justify-center items-center">
            <div className="w-[50%]">
              <Image
                src={AllImages.contest.Trophy}
                className="w-fit min-h-[30vh]"
                alt="Trophy"
              />
            </div>
            <div className="w-[50%]">
              <h1 className="text-site-color text-3xl font-semibold">
                Congrats!
              </h1>
              <p className="text-4xl font-bold my-4">
                You did it! High fives all around!
              </p>
            </div>
          </div>
          <div className="lg:w-[90%] mx-auto flex items-center">
            <Progress
              percent={100}
              strokeWidth={20} // Set the stroke width explicitly
              strokeColor="#fd8533"
              style={{ flex: 1, borderRadius: 10 }}
              showInfo={false}
            />
            <Image
              src={AllImages.contest.MagicBox}
              className="h-16 -ml-3 z-20 w-fit"
              alt="magic-box"
            />
          </div>
          <p className="text-center text-lg">10,000 steps done!</p>
          <div className="grid justify-center my-4">
            <Link href="/contest/leaderboard">
              <Button
                className="flex items-center gap-2 justify-center"
                style={{
                  backgroundColor: "#fd8533",
                  fontWeight: "bold",
                  color: "black",
                  border: "none",
                }}
              >
                <RiTeamFill />
                <span>Join Team</span>
              </Button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Steps;
