"use client";

import { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import MyTeam from "./MyTeam/page";
import Match from "./Match/Match";
import LeaderBoards from "./leaderBoards/LeaderBoards";

const LeaderTabBar = () => {
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
          <span className="text-xl font-semibold ">My Team</span>
        </h1>
      ),
      children: <MyTeam />,
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
          <span className="text-xl font-semibold ">Match</span>
        </h1>
      ),
      children: <Match />,
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
          <span className="text-xl font-semibold ">Leader board</span>
        </h1>
      ),
      children: <LeaderBoards />,
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

export default LeaderTabBar;
