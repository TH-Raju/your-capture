"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider } from "antd";
import Image from "next/image";
import { CopyOutlined, FlagOutlined } from "@ant-design/icons";
import { IoIosAddCircleOutline } from "react-icons/io";

const PhotographerMention = () => {
  return (
    <div className="text-center  flex flex-col justify-center items-center my-28">
      <div className="text-center my-8">
        <h1 className="-mb-5 w-[80%] lg:w-full mx-auto text-center lg:text-2xl uppercase">
          TOP PHOTOGRAPHER HONORABLE MENTIONS
        </h1>
        <div className=" mx-20">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-36 gap-x-20">
        <div className=" relative mb-20">
          <Image
            src={AllImages.contest.winner.back1}
            alt="Cover"
            className="object-fill h-72 w-fit lg:h-[410px] lg:w-[424px]"
          />
          <p className=" absolute top-0 p-1 font-bold text-sm">
            3232 <br /> <span className="uppercase">total votes</span>
          </p>
          <p className=" absolute top-0 right-0 p-2 bg-white text-black m-2">
            #2
          </p>

          <div className="absolute lg:-bottom-[50%] left-0 lg:left-[6%] -mt-10 lg:mt-0 flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.winner.f1}
              alt="Profile"
              className="lg:h-40 h-20 w-fit rounded-full"
            />
            <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 mt-3">
              <span>Charles Deo</span>
            </h1>
            <h1 className="text-xs mt-3 flex gap-2 lg:ml-1 -ml-3 text-white ">
              <span>
                <FlagOutlined className="text-site-color mr-2" />
                Netherlands
              </span>
              |
              <span className="flex items-center">
                <Image
                  src={AllImages.modal.voteIcon}
                  alt="Vote"
                  className="h-4 w-fit mr-2"
                />
                Total Votes
              </span>
            </h1>
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
          </div>
        </div>

        {/* 2nd Image  */}

        <div className=" relative  mb-20">
          <Image
            src={AllImages.contest.winner.back2}
            alt="Cover"
            className="object-fill h-72 w-fit lg:h-[410px] lg:w-[424px]"
          />
          <p className=" absolute top-0 p-1 font-bold text-sm">
            3232 <br /> <span className="uppercase">total votes</span>
          </p>
          <p className=" absolute top-0 right-0 p-2 bg-white text-black m-2">
            #2
          </p>

          <div className="absolute lg:-bottom-[50%] left-0 lg:left-[6%] -mt-10 lg:mt-0 flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.winner.f2}
              alt="Profile"
              className="lg:h-40 h-20 w-fit rounded-tr-2xl rounded-bl-2xl"
            />
            <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 mt-3">
              <span>Charles Deo</span>
            </h1>
            <h1 className="text-xs mt-3 flex gap-2 lg:ml-1 -ml-3 text-white ">
              <span>
                <FlagOutlined className="text-site-color mr-2" />
                Netherlands
              </span>
              |
              <span className="flex items-center">
                <Image
                  src={AllImages.modal.voteIcon}
                  alt="Vote"
                  className="h-4 w-fit mr-2"
                />
                Total Votes
              </span>
            </h1>
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
          </div>
        </div>

        {/* 3rd Image  */}

        <div className=" relative  mb-20">
          <Image
            src={AllImages.contest.winner.back3}
            alt="Cover"
            className="object-fill h-72 w-fit lg:h-[410px] lg:w-[424px]"
          />
          <p className=" absolute top-0 p-1 font-bold text-sm">
            3232 <br /> <span className="uppercase">total votes</span>
          </p>
          <p className=" absolute top-0 right-0 p-2 bg-white text-black m-2">
            #2
          </p>

          <div className="absolute lg:-bottom-[50%] left-0 lg:left-[6%] -mt-10 lg:mt-0 flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.winner.f3}
              alt="Profile"
              className="lg:h-40 h-20 w-fit rounded-tr-2xl rounded-bl-2xl"
            />
            <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 mt-3">
              <span>Charles Deo</span>
            </h1>
            <h1 className="text-xs mt-3 flex gap-2 lg:ml-1 -ml-3 text-white ">
              <span>
                <FlagOutlined className="text-site-color mr-2" />
                Netherlands
              </span>
              |
              <span className="flex items-center">
                <Image
                  src={AllImages.modal.voteIcon}
                  alt="Vote"
                  className="h-4 w-fit mr-2"
                />
                Total Votes
              </span>
            </h1>
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
          </div>
        </div>

        {/* 4th Image  */}

        <div className=" relative  mb-20">
          <Image
            src={AllImages.contest.winner.back4}
            alt="Cover"
            className="object-fill h-72 w-fit lg:h-[410px] lg:w-[424px]"
          />
          <p className=" absolute top-0 p-1 font-bold text-sm">
            3232 <br /> <span className="uppercase">total votes</span>
          </p>
          <p className=" absolute top-0 right-0 p-2 bg-white text-black m-2">
            #2
          </p>

          <div className="absolute lg:-bottom-[50%] left-0 lg:left-[6%] -mt-10 lg:mt-0 flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.winner.f4}
              alt="Profile"
              className="lg:h-40 h-20 w-fit rounded-tr-2xl rounded-bl-2xl"
            />
            <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 mt-3">
              <span>Charles Deo</span>
            </h1>
            <h1 className="text-xs mt-3 flex gap-2 lg:ml-1 -ml-3 text-white ">
              <span>
                <FlagOutlined className="text-site-color mr-2" />
                Netherlands
              </span>
              |
              <span className="flex items-center">
                <Image
                  src={AllImages.modal.voteIcon}
                  alt="Vote"
                  className="h-4 w-fit mr-2"
                />
                Total Votes
              </span>
            </h1>
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
          </div>
        </div>

        {/* 5th Image  */}

        <div className=" relative  mb-20">
          <Image
            src={AllImages.contest.winner.back5}
            alt="Cover"
            className="object-fill h-72 w-fit lg:h-[410px] lg:w-[424px]"
          />
          <p className=" absolute top-0 p-1 font-bold text-sm">
            3232 <br /> <span className="uppercase">total votes</span>
          </p>
          <p className=" absolute top-0 right-0 p-2 bg-white text-black m-2">
            #2
          </p>

          <div className="absolute lg:-bottom-[50%] left-0 lg:left-[6%] -mt-10 lg:mt-0 flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.winner.f5}
              alt="Profile"
              className="lg:h-40 h-20 w-fit rounded-tr-2xl rounded-bl-2xl"
            />
            <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 mt-3">
              <span>Charles Deo</span>
            </h1>
            <h1 className="text-xs mt-3 flex gap-2 lg:ml-1 -ml-3 text-white ">
              <span>
                <FlagOutlined className="text-site-color mr-2" />
                Netherlands
              </span>
              |
              <span className="flex items-center">
                <Image
                  src={AllImages.modal.voteIcon}
                  alt="Vote"
                  className="h-4 w-fit mr-2"
                />
                Total Votes
              </span>
            </h1>
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
          </div>
        </div>

        {/* 6th Image  */}

        <div className=" relative  mb-20">
          <Image
            src={AllImages.contest.winner.back6}
            alt="Cover"
            className="object-fill h-72 w-fit lg:h-[410px] lg:w-[424px]"
          />
          <p className=" absolute top-0 p-1 font-bold text-sm">
            3232 <br /> <span className="uppercase">total votes</span>
          </p>
          <p className=" absolute top-0 right-0 p-2 bg-white text-black m-2">
            #2
          </p>

          <div className="absolute lg:-bottom-[50%] left-0 lg:left-[6%] -mt-10 lg:mt-0 flex flex-col justify-center items-center">
            <Image
              src={AllImages.contest.winner.f6}
              alt="Profile"
              className="lg:h-40 h-20 w-fit rounded-tr-2xl rounded-bl-2xl"
            />
            <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 mt-3">
              <span>Charles Deo</span>
            </h1>
            <h1 className="text-xs mt-3 flex gap-2 lg:ml-1 -ml-3 text-white ">
              <span>
                <FlagOutlined className="text-site-color mr-2" />
                Netherlands
              </span>
              |
              <span className="flex items-center">
                <Image
                  src={AllImages.modal.voteIcon}
                  alt="Vote"
                  className="h-4 w-fit mr-2"
                />
                Total Votes
              </span>
            </h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerMention;
