"use client";

import React from "react";
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

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => (
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
        {/* Upper for google and facebook login  */}

        <UpperPart />

        <Divider style={{ borderBlockColor: "white" }}>
          <span className="text-white">OR</span>
        </Divider>
      </div>
      <Typography.Title level={5}>
        <span className="text-white">User Name or Email</span>
      </Typography.Title>
      <Form.Item<FieldType>
        name="username"
        className="mb-6"
        rules={[{ required: true, message: "Please input your username!" }]}
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
          <span className="text-white">Password</span>
        </Typography.Title>
        <Link href="/forgot-password">
          <Button
            type="link"
            className="border-b-orange-400 text-orange-400 mb-3"
          >
            Forgot
          </Button>
        </Link>
      </div>

      <Form.Item<FieldType>
        name="password"
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

      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Checkbox>
          <span className="text-white">Remember me</span>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Link href="/home">
          <SubmitButton title={"Sign in"} />
        </Link>
      </Form.Item>
      <div>
        <div className="flex justify-center items-center text-white ">
          <p>New here?</p>
          <Link href="/signup">
            <Button
              type="link"
              style={{
                color: "#fd8533",
                border: "none",
                borderBottom: "1px solid #fd8533",
              }}
              className="hover:text-blue-500 hover:border-blue-500 ml-3 "
            >
              Create a Your Capture Awards Account
            </Button>
          </Link>
        </div>
        <Divider style={{ borderBlockColor: "white" }} className="py-2" />
        <p className="text-white text-balance text-center">
          Your Capture Awards collects and uses personal data in accordance with
          our Privacy Policy. By creating an account, you agree to our Terms &
          Conditions.
        </p>
      </div>
    </Form>
  </div>
);

export default Login;
