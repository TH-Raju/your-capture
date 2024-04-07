"use client";

import {
  Button,
  DatePicker,
  Form,
  FormProps,
  Input,
  message,
  Modal,
  Radio,
  Result,
} from "antd";
import { useState } from "react";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import SubmitButton from "@/components/Shared/Button";
import {
  UserOutlined,
  CreditCardOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { Dayjs } from "dayjs";

const PaymentModalData = () => {
  const [form] = Form.useForm();

  const [modalOpen, setModalOpen] = useState(false);

  type FieldType = {
    method?: string;
    name?: string;
    cardNumber?: string;
    expireDate?: Dayjs | undefined;
    ccv?: string;
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    message.success("Submit success!");
    const formattedValues = {
      ...values,
      expireDate: values.expireDate?.format("YYYY-MM-DD"),
    };
    setModalOpen(true);
    console.log(formattedValues);
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
    setModalOpen(false);
  };

  return (
    <div className=" p-3 rounded-md my-16">
      {/* <h1 className="text-center">{pack} Membership</h1>  */}
      <Form
        requiredMark={"optional"}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label={
            <label style={{ fontSize: 18, fontWeight: "bold" }}>
              Name on card:
            </label>
          }
          rules={[
            { required: true, message: "Please input your name on card!" },
          ]}
        >
          <Input
            status="warning"
            suffix={<UserOutlined />}
            placeholder="Enter Your Name on Card"
            style={{ fontSize: 18 }}
          />
        </Form.Item>

        <Form.Item
          name="cardNumber"
          label={
            <label style={{ fontSize: 18, fontWeight: "bold" }}>
              Card number:
            </label>
          }
          rules={[{ required: true, message: "Please input your card number" }]}
        >
          <Input
            status="warning"
            suffix={<CreditCardOutlined />}
            placeholder="123-456-789-"
            style={{ fontSize: 18 }}
          />
        </Form.Item>

        <div className="lg:flex gap-4 w-full justify-between items-center">
          <Form.Item
            name="expireDate"
            label={
              <label style={{ fontSize: 18, fontWeight: "bold" }}>
                Expiry date:
              </label>
            }
            rules={[{ required: true, message: "Please input Expiry Date" }]}
            className="lg:w-2/10 w-full"
          >
            <DatePicker
              placeholder="MM / YY"
              className="w-full"
              color="white"
              status="warning"
              style={{ fontSize: 18 }}
            />
          </Form.Item>

          <Form.Item
            name="ccv"
            label={
              <label style={{ fontSize: 18, fontWeight: "bold" }}>CCV</label>
            }
            rules={[{ required: true, message: "Please input CCV!" }]}
            className="lg:w-8/10 w-full"
          >
            <Input.Password
              suffix={<EyeOutlined />}
              status="warning"
              placeholder="..."
              style={{ fontSize: 18 }}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <div>
            <SubmitButton title={"Payment"} />
          </div>
        </Form.Item>
      </Form>
      <Modal
        centered
        footer={null}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <div className="flex flex-col justify-center items-center my-16">
          <Image src={AllImages.success} alt="success" />
          <h1 className="text-3xl text-site-color my-3">SUCCESS</h1>
          <p>Thank you for your request. </p>
          <p className="text-center w-[85%] mb-4 leading-6 ">
            We are working hard to find the best service and deals for you.
            Shortly you will find a confirmation in your email.
          </p>
          <Button
            type="primary"
            key="console"
            style={{
              backgroundColor: "#fd8533",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Go Console
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentModalData;
