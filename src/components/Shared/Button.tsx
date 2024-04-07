"use client";
import { Button, Form } from "antd";
import React from "react";

const SubmitButton = ({ title }: { title: any }) => {
  return (
    <Button
      htmlType="submit"
      className="w-full border-none font-bold "
      style={{ backgroundColor: "#fd8533", color: "black" }}
    >
      {title.toUpperCase()}
    </Button>
  );
};

export default SubmitButton;
