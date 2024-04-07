"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ContestNav = () => {
  const path = usePathname();

  const [selected, setSelected] = useState(null);
  const select = (index: any) => {
    setSelected(index); // Close mobile menu when an item is selected
  };

  const menu = [
    {
      id: 1,
      name: "joined",
      link: "/contest",
    },
    {
      id: 2,
      name: "completed",
      link: "/contest/completed",
    },
  ];

  const menu2 = [
    {
      id: 3,
      name: "open",
      link: "/contest/open",
    },
    {
      id: 4,
      name: "upcoming",
      link: "/contest/upcoming",
    },
    {
      id: 7,
      name: "closed",
      link: "/contest/closed",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row  items-center gap-5  py-3 lg:gap-20 lg:px-20 bg-black justify-between  w-full">
        <div className="flex justify-between items-center  w-full ">
          <Link href="/contest">
            <Button
              className={`px-4 cursor-pointer capitalize font-normal duration-200 hover:scale-105 border-none lg:ml-3 text-gray-300`}
              style={{
                backgroundColor: "transparent",
                color: path === "/contest" ? "#fd8533" : "white",
              }}
              onClick={() => select(1)}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={AllImages.contest.navIcon}
                  alt="navImage"
                  className="h-5 w-5"
                />
                <span>My Challenges</span>
              </div>
            </Button>
          </Link>
          {menu.map((item) => (
            <Link href={item.link} key={item.id}>
              <Button
                className={`px-4 cursor-pointer uppercase font-medium duration-200 hover:scale-105 border-none lg:ml-3 ${
                  selected === item.id ? "text-white" : "text-gray-300"
                }`}
                style={{
                  backgroundColor: "transparent",
                  color: path === item.link ? "#fd8533" : "white",
                }}
                onClick={() => select(item.id)}
              >
                <span>{item.name}</span>
              </Button>
            </Link>
          ))}
        </div>

        <Divider
          type="vertical"
          style={{ borderColor: "#fd8533", height: "6vh" }}
          className="hidden lg:block"
        />

        <div className="flex justify-between items-center w-full">
          <Link href="/contest/open">
            <Button
              className={`px-4 cursor-pointer capitalize font-normal duration-200 hover:scale-105 border-none lg:ml-3 text-gray-300`}
              style={{
                backgroundColor: "transparent",
                color: path === "/contest/open" ? "#fd8533" : "white",
              }}
              onClick={() => select(3)}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={AllImages.contest.navIcon}
                  alt="navImage"
                  className="h-5 w-5"
                />{" "}
                <span>Discover</span>
              </div>
            </Button>
          </Link>

          {menu2.map((item) => (
            <Link href={item.link} key={item.id}>
              <Button
                className={`px-4 cursor-pointer uppercase font-medium duration-200 hover:scale-105 border-none lg:ml-3 ${
                  selected === item.id ? "text-white" : "text-gray-300"
                }`}
                style={{
                  backgroundColor: "transparent",
                  color: path === item.link ? "#fd8533" : "white",
                }}
                onClick={() => select(item.id)}
              >
                <span>{item.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestNav;
