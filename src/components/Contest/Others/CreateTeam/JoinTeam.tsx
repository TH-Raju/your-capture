"use client";

import { AllImages } from "@/assets/AllImage";
import { Avatar, Button } from "antd";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";

const JoinTeam = () => {
  return (
    <div>
      <h1 className="text-site-color font-bold text-2xl">Suggested Team</h1>
      <div>
        {/* Cards  */}
        <div className="flex flex-col lg:flex-row gap-10 ">
          {/* Card 1  */}
          <div className="lg:w-[30%]">
            <div className="flex justify-start gap-5 items-center my-5">
              <Image
                src={AllImages.person}
                className="h-12 w-fit"
                alt="team logo"
              />
              <div>
                <h1 className="text-xl font-semibold mb-2">Active Shooter</h1>
                <div className="flex justify-start gap-3">
                  <p className="flex gap-2">
                    <span>
                      <FaUsers className="h-5 w-fit" />
                    </span>
                    <span>15</span>
                  </p>{" "}
                  |
                  <p className="flex gap-2">
                    <span>6.35</span>
                    <span>
                      <FaRankingStar className="h-5 w-fit" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-10">
              <Avatar.Group size="default">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Avatar.Group>
              <h1 className="text-2xl font-semibold">15+</h1>
            </div>
            <div className="border my-5 rounded-lg px-3  py-3">
              <div className="flex justify-start gap-5 items-center ">
                <Image
                  src={AllImages.person}
                  className="h-12 w-fit"
                  alt="team logo"
                />
                <div>
                  <h1 className="text-xl font-semibold mb-2">Active Shooter</h1>
                  <div className="flex justify-start gap-3">
                    <p className="flex gap-2">
                      <span>
                        <FaUsers className="h-5 w-fit" />
                      </span>
                      <span>15</span>
                    </p>{" "}
                    |
                    <p className="flex gap-2">
                      <span>6.35</span>
                      <span>
                        <FaRankingStar className="h-5 w-fit" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <p className=" my-10 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="flex justify-end gap-3">
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#fd8533",
                    border: "1px solid #fd8533",
                    width: "100px",
                  }}
                >
                  <h2 className="flex items-center justify-center gap-2  font-semibold pb-2 hover:text-black ">
                    {" "}
                    <span className="">View Team</span>
                  </h2>
                </Button>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#fd8533",
                    border: "1px solid #fd8533",
                    width: "100px",
                  }}
                >
                  <h2 className="flex items-center justify-center gap-2  font-semibold pb-2 hover:text-black ">
                    {" "}
                    <span className="">Join</span>
                  </h2>
                </Button>
              </div>
            </div>
          </div>
          {/* Card 2  */}
          <div className="lg:w-[30%]">
            <div className="flex justify-start gap-5 items-center my-5">
              <Image
                src={AllImages.person}
                className="h-12 w-fit"
                alt="team logo"
              />
              <div>
                <h1 className="text-xl font-semibold mb-2">Active Shooter</h1>
                <div className="flex justify-start gap-3">
                  <p className="flex gap-2">
                    <span>
                      <FaUsers className="h-5 w-fit" />
                    </span>
                    <span>15</span>
                  </p>{" "}
                  |
                  <p className="flex gap-2">
                    <span>6.35</span>
                    <span>
                      <FaRankingStar className="h-5 w-fit" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-10">
              <Avatar.Group size="default">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Avatar.Group>
              <h1 className="text-2xl font-semibold">15+</h1>
            </div>
            <div className="border my-5 rounded-lg px-3  py-3">
              <div className="flex justify-start gap-5 items-center ">
                <Image
                  src={AllImages.person}
                  className="h-12 w-fit"
                  alt="team logo"
                />
                <div>
                  <h1 className="text-xl font-semibold mb-2">Active Shooter</h1>
                  <div className="flex justify-start gap-3">
                    <p className="flex gap-2">
                      <span>
                        <FaUsers className="h-5 w-fit" />
                      </span>
                      <span>15</span>
                    </p>{" "}
                    |
                    <p className="flex gap-2">
                      <span>6.35</span>
                      <span>
                        <FaRankingStar className="h-5 w-fit" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <p className=" my-10 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="flex justify-end gap-3">
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#fd8533",
                    border: "1px solid #fd8533",
                    width: "100px",
                  }}
                >
                  <h2 className="flex items-center justify-center gap-2  font-semibold pb-2 hover:text-black ">
                    {" "}
                    <span className="">View Team</span>
                  </h2>
                </Button>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#fd8533",
                    border: "1px solid #fd8533",
                    width: "100px",
                  }}
                >
                  <h2 className="flex items-center justify-center gap-2  font-semibold pb-2 hover:text-black ">
                    {" "}
                    <span className="">Join</span>
                  </h2>
                </Button>
              </div>
            </div>
          </div>
          {/* Card 3  */}
          <div className="lg:w-[30%]">
            <div className="flex justify-start gap-5 items-center my-5">
              <Image
                src={AllImages.person}
                className="h-12 w-fit"
                alt="team logo"
              />
              <div>
                <h1 className="text-xl font-semibold mb-2">Active Shooter</h1>
                <div className="flex justify-start gap-3">
                  <p className="flex gap-2">
                    <span>
                      <FaUsers className="h-5 w-fit" />
                    </span>
                    <span>15</span>
                  </p>{" "}
                  |
                  <p className="flex gap-2">
                    <span>6.35</span>
                    <span>
                      <FaRankingStar className="h-5 w-fit" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-10">
              <Avatar.Group size="default">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Avatar.Group>
              <h1 className="text-2xl font-semibold">15+</h1>
            </div>
            <div className="border my-5 rounded-lg px-3  py-3">
              <div className="flex justify-start gap-5 items-center ">
                <Image
                  src={AllImages.person}
                  className="h-12 w-fit"
                  alt="team logo"
                />
                <div>
                  <h1 className="text-xl font-semibold mb-2">Active Shooter</h1>
                  <div className="flex justify-start gap-3">
                    <p className="flex gap-2">
                      <span>
                        <FaUsers className="h-5 w-fit" />
                      </span>
                      <span>15</span>
                    </p>{" "}
                    |
                    <p className="flex gap-2">
                      <span>6.35</span>
                      <span>
                        <FaRankingStar className="h-5 w-fit" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <p className=" my-10 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="flex justify-end gap-3">
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#fd8533",
                    border: "1px solid #fd8533",
                    width: "100px",
                  }}
                >
                  <h2 className="flex items-center justify-center gap-2  font-semibold pb-2 hover:text-black ">
                    {" "}
                    <span className="">View Team</span>
                  </h2>
                </Button>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#fd8533",
                    border: "1px solid #fd8533",
                    width: "100px",
                  }}
                >
                  <h2 className="flex items-center justify-center gap-2  font-semibold pb-2 hover:text-black ">
                    {" "}
                    <span className="">Join</span>
                  </h2>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
