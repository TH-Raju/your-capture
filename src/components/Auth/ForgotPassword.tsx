"use client";

import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Typography } from "antd";
import Link from "next/link";
import SubmitButton from "../Shared/Button";

export default function ForgotPassword() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="py-5 px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[30%] mx-auto border border-orange-400">
        <div className="mb-6 ">
          <div className="flex items-baseline gap-2 text-2xl font-bold mb-4">
            <Link href="/login">
              <ArrowLeftOutlined />
            </Link>
            <h1 className="font-sans">Forgot Password ?</h1>
          </div>
          <p className="font-sans">
            Enter your details below to request a Your Capture Awards account
            password reset.
          </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Typography.Title level={5} className="font-sans ">
            <span className="text-white">Email </span>
          </Typography.Title>
          <Form.Item
            className="text-white"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              size="large"
              prefix={<MailOutlined className="site-form-item-icon mr-2" />}
              placeholder="Enter your email"
              style={{
                background: "transparent",
                color: "white",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Link href="/verification">
              <SubmitButton title="submit" />
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
