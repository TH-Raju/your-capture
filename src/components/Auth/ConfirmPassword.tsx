"use client";

import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Typography } from "antd";
import Link from "next/link";
import SubmitButton from "../Shared/Button";
import { GrShieldSecurity } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

export default function ConfirmPassword() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="py-5 px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[30%] mx-auto border border-orange-400">
        <div className="mb-6 ">
          <div className="flex items-baseline gap-2 text-2xl font-bold mb-4">
            <Link href="/verification">
              <ArrowLeftOutlined />
            </Link>
            <h1 className="font-sans">Set New Password </h1>
          </div>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Typography.Title level={5} className="font-sans ">
            <span className="text-white">Enter New Password </span>
          </Typography.Title>
          <Form.Item
            className="text-white"
            name="new_password"
            rules={[{ required: true, message: "Please Enter new password" }]}
          >
            <Input.Password
              size="large"
              prefix={<GrShieldSecurity className="site-form-item-icon mr-2" />}
              placeholder="Enter New password"
              style={{
                background: "transparent",
                color: "white",
              }}
            />
          </Form.Item>
          <Typography.Title level={5} className="font-sans ">
            <span className="text-white">Confirm Password </span>
          </Typography.Title>
          <Form.Item
            className="text-white"
            name="confirm_password"
            rules={[{ required: true, message: "Please confirm password" }]}
          >
            <Input.Password
              size="large"
              prefix={
                <RiLockPasswordFill className="site-form-item-icon mr-2" />
              }
              placeholder="Re-enter your password"
              style={{
                background: "transparent",
                color: "white",
              }}
            />
          </Form.Item>

          <Form.Item>
            <SubmitButton title="send" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
