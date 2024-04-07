"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";
import { CopyOutlined, FlagOutlined } from "@ant-design/icons";
import { Button } from "antd";
import UploadSite from "./UploadSite";
import Skeleton from "./Skeleton";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { useState } from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];

const Profile = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleDropdown = (value: string) => {
    console.log(value);
    setSelectedValue(value);
  };
  return (
    <div className="mb-36">
      <div className="bg-white  relative">
        <Image
          src={AllImages.profile.cover}
          alt="Cover"
          className="object-cover h-full w-full"
        />
        <div className="absolute lg:bottom-[18%] left-0 lg:left-[6%] -mt-10 lg:mt-0">
          <Image
            src={AllImages.profile.profile}
            alt="Profile"
            className="lg:h-40 h-20 w-fit rounded-full"
          />
        </div>
        <div className="lg:mt-14 mt-10 flex flex-col lg:flex-row text-black justify-between mx-4 lg:mx-28 pb-10">
          <div>
            <h1 className="font-bold text-2xl text-site-color flex items-center justify-start gap-2 lg:ml-1 -ml-3 ">
              <span>Charles Deo</span>
              <Button className="border-none">
                <CopyOutlined className="h-3 w-3 text-black text-center" />
              </Button>
            </h1>
            <h1 className="text-xs mt-3 flex gap-2 lg:ml-1 -ml-3">
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
          </div>
          <div className="flex items-center justify-center lg:gap-11 gap-4 mt-5 lg:mt-0">
            <div className="flex flex-col items-center">
              <p className="bg-site-color px-2 py-1 rounded-full text-white">
                63
              </p>
              <h1 className="font-semibold">Photo</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="bg-site-color px-2 py-1 rounded-full text-white">
                23
              </p>
              <h1 className="font-semibold">Achivement</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="bg-site-color px-2 py-1 rounded-full text-white">
                72
              </p>
              <h1 className="font-semibold">Likes</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="bg-site-color px-2 py-1 rounded-full text-white">
                63
              </p>
              <h1 className="font-semibold">Followers</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="bg-site-color px-2 py-1 rounded-full text-white">
                30
              </p>
              <h1 className="font-semibold">Following</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-5 flex flex-col lg:flex-row gap-5 justify-between items-center lg:mx-20">
        <div className="flex items-center gap-5">
          <Image
            src={AllImages.profile.profileUser}
            alt="user portfolio"
            className="h-7 w-fit"
          />
          <h1>Portfolio Website</h1>
        </div>
        <div className="flex items-center  gap-4">
          <h1>Sort By:</h1>
          <div className="relative h-10 w-52 min-w-[100px] ">
            <select
              onChange={(event) => {
                handleDropdown(event.target.value);
              }}
              className="bg-gray-500 p-4 peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="vote" className="font-semibold">
                Vote
              </option>
              <option value="view" className="font-semibold">
                View
              </option>
              <option value="likes" className="font-semibold">
                Likes
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20">
        <UploadSite />
        <Skeleton />
        <Skeleton />
        <div className="hidden lg:block">
          <Skeleton />
        </div>
        <div className="hidden lg:block">
          <Skeleton />
        </div>
        <div className="hidden lg:block">
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

export default Profile;
