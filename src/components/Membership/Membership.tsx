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
import "./membership.css";
import SubmitButton from "../Shared/Button";
import { useState } from "react";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import type { Dayjs } from "dayjs";

const Membership = ({ pack }: { pack: string }) => {
  const [form] = Form.useForm();

  const [modalOpen, setModalOpen] = useState(false);

  type FieldType = {
    method?: string;
    name?: string;
    cardNumber?: string;
    date?: Dayjs | undefined;
    ccv?: string;
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    message.success("Submit success!");
    setModalOpen(true);
    const formattedValues = {
      ...values,
      expireDate: values.date?.format("YYYY-MM-DD"),
    };
    console.log(formattedValues);
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
    setModalOpen(false);
  };

  return (
    <div className="text-white bg-black p-3 rounded-md my-36 lg:mx-20 lg:px-20">
      {/* <h1 className="text-center">{pack} Membership</h1>  */}
      <h1 className="text-center text-3xl mt-5 mb-8">Payment Method</h1>
      <Form
        requiredMark={"optional"}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="method"
          className="text-center"
          rules={[{ required: true, message: "Please select payment option!" }]}
        >
          <Radio.Group className="accent-orange-400">
            <Radio value="bank" style={{ color: "white" }}>
              Bank
            </Radio>
            <Radio value="paypal" className="custom-label radio-color">
              PayPal
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="name"
          label={
            <label style={{ color: "white", fontSize: 18 }}>
              Name on card:
            </label>
          }
          rules={[
            { required: true, message: "Please input your name on card!" },
          ]}
        >
          <Input placeholder="Enter Your Name on Card" />
        </Form.Item>

        <Form.Item
          name="cardNumber"
          label={
            <label style={{ color: "white", fontSize: 18 }}>Card number:</label>
          }
          rules={[{ required: true, message: "Please input your card number" }]}
        >
          <Input placeholder="123-456-789-" />
        </Form.Item>

        <div className="lg:flex gap-4 w-full justify-between items-center">
          <Form.Item
            name="date"
            label={
              <label style={{ color: "white", fontSize: 18 }}>
                Expiry date:
              </label>
            }
            rules={[{ required: true, message: "Please input Expiry Date" }]}
            className="lg:w-2/10 w-full"
          >
            <DatePicker placeholder="MM / YY" className="w-full" />
          </Form.Item>

          <Form.Item
            name="ccv"
            label={<label style={{ color: "white", fontSize: 18 }}>CCV</label>}
            rules={[{ required: true, message: "Please input CCV!" }]}
            className="lg:w-8/10 w-full"
          >
            <Input.Password placeholder="..." className="w-full" />
          </Form.Item>
        </div>

        <Form.Item>
          <div>
            <SubmitButton title="payment" />
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

export default Membership;
