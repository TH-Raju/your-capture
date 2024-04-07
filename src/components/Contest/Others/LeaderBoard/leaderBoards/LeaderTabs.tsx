"use client";

import { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "../index.css";
import LeaguesTable from "./LeaguesTable";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import { TiWorld } from "react-icons/ti";
import { FiShield } from "react-icons/fi";
import GlobalTable from "./GlobalTable";

const LeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  // Function to handle clicking on a tab
  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <h1
          className={`${
            activeTab === "1" ? "text-site-color" : "text-white"
          } flex gap-2 p-2 rounded-lg`}
          onClick={() => handleTabClick("1")}
        >
          <span className="text-xl font-semibold flex items-center gap-2">
            <FiShield className="h-8 w-fit" />
            <span>Leagues</span>
          </span>
        </h1>
      ),
      children: <LeaguesTable />,
    },
    {
      key: "2",
      label: (
        <h1
          className={`${
            activeTab === "2" ? "text-site-color" : "text-white"
          } flex gap-2 p-2 rounded-lg`}
          onClick={() => handleTabClick("2")}
        >
          <span className="text-xl font-semibold flex items-center  gap-2">
            <TiWorld className="h-8 mt-1 w-fit" />
            <span>Global</span>
          </span>
        </h1>
      ),
      children: <GlobalTable />,
    },
  ];

  return (
    <div>
      <Tabs
        centered
        className="mt-8 text-white"
        activeKey={activeTab}
        onChange={setActiveTab}
        items={items}
        tabBarGutter={90}
        tabBarStyle={{
          paddingTop: 5,
          paddingBottom: 5,
          color: "#fd8535",
        }}
        indicator={{
          size: (activeTab) => activeTab - 20,
        }}
      />
    </div>
  );
};

export default LeaderTabs;
