"use client";

import { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import TopPhoto from "./TopPhoto";
import YcTopPick from "./YcTopPick";
import TopPhotographer from "./TopPhotographer";

const RankJoined = () => {
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
          <span className="text-xl font-semibold uppercase">
            Top photographer
          </span>
        </h1>
      ),
      children: <TopPhotographer />,
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
          <span className="text-xl font-semibold uppercase">Top photo</span>
        </h1>
      ),
      children: <TopPhoto />,
    },
    {
      key: "3",
      label: (
        <h1
          className={`${
            activeTab === "3" ? "text-site-color" : "text-white"
          } flex gap-2 p-2 rounded-lg`}
          onClick={() => handleTabClick("3")}
        >
          <span className="text-xl font-semibold uppercase">YC Pick</span>
        </h1>
      ),
      children: <YcTopPick />,
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
        tabBarGutter={30}
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

export default RankJoined;
