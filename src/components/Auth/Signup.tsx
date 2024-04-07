"use client";

import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Typography,
  Divider,
} from "antd";
import SubmitButton from "../Shared/Button";
import UpperPart from "./UpperPart";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { SiGoogle } from "react-icons/si";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";

type FieldType = {
  username?: {
    firstName?: string;
    LastName?: string;
  };
  contact?: string;
  email?: string;
  newPassword?: string;
  confirmPassword?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Signup = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="w-[40%] mx-auto h-screen"
    >
      <Form
        className="w-[80%] mx-auto"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className=" text-white">
          {/* Upper for google and facebook signup  */}

          <div>
            <div className="flex justify-center mb-14">
              <Image src={AllImages.logo} alt="logo" className="h-full" />
            </div>
            <div className="mb-12 text-center">
              <h1 className="mb-3 text-3xl font-bold ">
                Welcome to Your Capture Awards
              </h1>
              <p>Create your account easily with less information.</p>
            </div>
            <Button
              className="w-full flex items-center my-3 border-orange-400 text-xl h-8 text-white font-thin  py-5 "
              style={{
                background: "transparent",
                borderColor: "#fd8533",
                color: "white",
              }}
            >
              <SiGoogle className="ml-8 mr-2 text-white font-thin bg-transparent hover:bg-transparent" />
              Continue with Google
            </Button>
            <Button
              className="w-full flex items-center my-3 border-orange-400 text-xl h-8 text-white font-thin  py-5 "
              style={{
                background: "transparent",
                borderColor: "#fd8533",
                color: "white",
              }}
            >
              <TiSocialFacebook className="ml-7 mr-1 text-3xl text-white font-thin bg-transparent hover:bg-transparent" />
              Continue with Facebook
            </Button>
          </div>

          <Divider style={{ borderBlockColor: "white" }}>
            <span className="text-white">OR</span>
          </Divider>
        </div>

        <Typography.Title level={5}>
          <span className="text-white">First Name </span>
        </Typography.Title>
        <Form.Item<FieldType>
          name={["username", "firstName"]}
          className="mb-6"
          rules={[{ required: true, message: "Please Write your First Name!" }]}
        >
          <Input
            className="bg-transparent hover:bg-orange-400"
            style={{
              background: "transparent",
              color: "white",
            }}
          />
        </Form.Item>

        <Typography.Title level={5}>
          <span className="text-white">Last Name</span>
        </Typography.Title>
        <Form.Item<FieldType>
          name={["username", "LastName"]}
          className="mb-6"
          rules={[{ required: true, message: "Please Write your Last Name!" }]}
        >
          <Input
            className="bg-transparent"
            style={{
              background: "transparent",
              color: "white",
            }}
          />
        </Form.Item>

        <Typography.Title level={5}>
          <span className="text-white">Email</span>
        </Typography.Title>
        <Form.Item<FieldType>
          name="email"
          className="mb-6"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            className="bg-transparent"
            style={{
              background: "transparent",
              color: "white",
            }}
          />
        </Form.Item>

        <Typography.Title level={5}>
          <span className="text-white">Contact Number </span>
        </Typography.Title>
        <Form.Item<FieldType>
          name="contact"
          className="mb-6"
          rules={[{ required: true, message: "Write your Last Name!" }]}
        >
          <Input
            className="bg-transparent"
            style={{
              background: "transparent",
              color: "white",
            }}
          />
        </Form.Item>

        <div className="flex justify-between items-baseline ">
          <Typography.Title level={5}>
            <span className="text-white">New Password</span>
          </Typography.Title>
          {/* <Button
          type="link"
          className="border-b-orange-400 text-orange-400 mb-3"
        >
          Forgot
        </Button> */}
        </div>

        <Form.Item<FieldType>
          name="newPassword"
          rules={[{ required: true, message: "Please Enter new password!" }]}
        >
          <Input.Password
            className="bg-transparent "
            style={{
              background: "transparent",
              color: "white",
            }}
          />
        </Form.Item>
        <div className="flex justify-between items-baseline ">
          <Typography.Title level={5}>
            <span className="text-white">Confirm Password</span>
          </Typography.Title>
        </div>

        <Form.Item<FieldType>
          name="confirmPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="bg-transparent "
            style={{
              background: "transparent",
              color: "white",
            }}
          />
        </Form.Item>

        <Link href="/contest">
          <Form.Item>
            <SubmitButton title={"Create Account"} />
          </Form.Item>
        </Link>
        <div>
          <div className="flex justify-center items-center text-white ">
            <p>Already have account?</p>
            <Link href="/login">
              <Button
                type="link"
                style={{
                  color: "#fd8533",
                  border: "none",
                  borderBottom: "1px solid #fd8533",
                }}
                className="hover:text-blue-500 hover:border-blue-500 ml-3 "
              >
                Sign in
              </Button>
            </Link>
          </div>
          <Divider style={{ borderBlockColor: "white" }} className="py-2" />
          <p className="text-white text-balance text-center">
            Your Capture Awards collects and uses personal data in accordance
            with our Privacy Policy. By creating an account, you agree to
            our Terms & Conditions.
          </p>
        </div>
      </Form>
    </div>
  );
};
export default Signup;
