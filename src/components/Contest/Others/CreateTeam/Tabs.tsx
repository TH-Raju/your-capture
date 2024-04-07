"use client";

import { useState } from "react";
import { Tabs } from "antd";
import CreateTeam from "./CreateTeam";
import JoinTeam from "./JoinTeam";

const TeamTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  // Function to handle clicking on a tab
  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: (
        <div
          className={`${
            activeTab === "1" ? "text-site-color" : "text-white border"
          } flex flex-col items-center justify-center gap-2 p-2 rounded-lg ml-10 `}
          onClick={() => handleTabClick("1")}
        >
          <h1 className="text-2xl">Create your team</h1>
        </div>
      ),
      children: <CreateTeam />,
    },
    {
      key: "2",
      label: (
        <div
          className={`${
            activeTab === "2" ? "text-site-color" : "text-white border"
          } flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}
          onClick={() => handleTabClick("2")}
        >
          <h1 className="text-2xl">Join Team</h1>
        </div>
      ),
      children: <JoinTeam />,
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
        tabBarGutter={100}
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

export default TeamTabs;
