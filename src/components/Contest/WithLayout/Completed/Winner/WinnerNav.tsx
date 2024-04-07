"use client";

import { AllImages } from "@/assets/AllImage";
import { Button, Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const WinnerNav = () => {
  const path = usePathname();
  console.log(path);
  const [selected, setSelected] = useState(null);
  const select = (index: any) => {
    setSelected(index); // Close mobile menu when an item is selected
  };

  const menu = [
    {
      id: 1,
      name: "Winners",
      link: "/contest/completed/winner/winner",
    },
    {
      id: 2,
      name: "Details",
      link: "/contest/completed/winner/details",
    },
    {
      id: 3,
      name: "Prizes",
      link: "/contest/completed/winner/prizes",
    },
    {
      id: 4,
      name: "Rank",
      link: "/contest/completed/winner/rank",
    },
  ];

  return (
    <div className="lg:w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-5  py-3 lg:gap-20 lg:px-20 bg-[#595959] justify-between lg:w-[80%] px-3 mx-auto rounded-full ">
        <div className="flex justify-between  items-center w-full lg:mx-20 mx-0">
          {menu.map((item) => (
            <Link href={item.link} key={item.id}>
              <Button
                className={`px-4 cursor-pointer capitalize font-medium duration-200 hover:scale-105 border-none lg:ml-3 ${
                  selected === item.id ? "text-white" : "text-gray-300"
                }`}
                style={{
                  backgroundColor:
                    path === item.link ? "#fd8533" : "transparent",
                  color: path === item.link ? "black" : "white",
                  border: "1px solid orange",
                  borderRadius: "100px",
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

export default WinnerNav;
