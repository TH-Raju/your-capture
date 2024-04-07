"use client";

import { AllImages } from "@/assets/AllImage";
import { Modal, Tabs } from "antd";
import Image from "next/image";
import { useState } from "react";
import type { TabsProps } from "antd";
import SwapContent from "./SwapContent";
import BoostContent from "./BoostContent";
import KeysContent from "./KeysContent";

const SwapButtons = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const openModalAndSetActiveTab = (tabKey: string) => {
    setModal1Open(true);
    setActiveTab(tabKey);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <h1
          className={`${
            activeTab === "1" ? " bg-site-color " : "bg-black"
          } flex gap-2   p-2 rounded-lg`}
        >
          <Image
            src={AllImages.contest.swap}
            className="h-6 w-fit"
            alt="boost"
          />
          <span className="text-white ">Swap</span>
        </h1>
      ),
      children: <SwapContent />,
    },
    {
      key: "2",
      label: (
        <h1
          className={`${
            activeTab === "2" ? " bg-site-color " : "bg-black"
          } flex gap-2   p-2 rounded-lg`}
        >
          <Image
            src={AllImages.contest.modal.boostIcon}
            className="h-6 w-fit"
            alt="boost"
          />
          <span className="text-white ">Charge</span>
        </h1>
      ),
      children: <BoostContent />,
    },
    {
      key: "3",
      label: (
        <h1
          className={`${
            activeTab === "3" ? " bg-site-color " : "bg-black"
          } flex gap-2   p-2 rounded-lg`}
        >
          <Image
            src={AllImages.contest.modal.keyIcon}
            className="h-6 w-fit"
            alt="boost"
          />
          <span className="text-white ">Keys</span>
        </h1>
      ),
      children: <KeysContent />,
    },
  ];

  return (
    <div className="flex justify-between items-center mb-28">
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between   w-[90%] mx-auto">
        <div className="flex  items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <Image src={AllImages.contest.swap} className="" alt="Swap" />
            <button
              className={`border px-3 py-1 rounded-md my-2`}
              onClick={() => openModalAndSetActiveTab("1")} // Open modal and set active tab to 1
            >
              0 Swap <span className="border px-1 py-0 rounded-full">+</span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={AllImages.contest.boost} className="" alt="Swap" />
            <button
              className="border px-3 py-1 rounded-md my-2"
              onClick={() => openModalAndSetActiveTab("2")} // Open modal and set active tab to 2
            >
              0 Charge <span className="border px-1 py-0 rounded-full">+</span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={AllImages.contest.key} className="" alt="Swap" />
            <button
              className="border px-3 py-1 rounded-md my-2"
              onClick={() => openModalAndSetActiveTab("3")} // Open modal and set active tab to 3
            >
              0 Keys <span className="border px-1 py-0 rounded-full">+</span>
            </button>
          </div>
        </div>
        <button className="flex items-center border px-2  rounded-md border-site-color text-sm">
          <Image
            src={AllImages.contest.upload}
            className=" h-10 w-fit mt-1"
            alt="upload"
          />{" "}
          MY CHALLENGES
        </button>
      </div>

      <Modal
        centered
        footer={null}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        width={630}
      >
        <Tabs
          centered
          className="mt-8"
          activeKey={activeTab}
          onChange={setActiveTab}
          type="card"
          items={items}
          tabBarGutter={30}
          tabBarStyle={
            activeTab === "1"
              ? { backgroundColor: "#000", paddingTop: 5, paddingBottom: 5 }
              : activeTab === "2"
              ? { backgroundColor: "#000", paddingTop: 5, paddingBottom: 5 }
              : activeTab === "3"
              ? { backgroundColor: "#000", paddingTop: 5, paddingBottom: 5 }
              : { backgroundColor: "#000", paddingTop: 5, paddingBottom: 5 } // Default background color
          }
        />
      </Modal>
    </div>
  );
};

export default SwapButtons;
