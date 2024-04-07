"use client";

import { AllImages } from "@/assets/AllImage";
import SubmitButton from "@/components/Shared/Button";
import { UserOutlined } from "@ant-design/icons";
import { GiLevelThreeAdvanced } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import "./index.css";
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Typography,
  Divider,
  Radio,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { CiImageOn } from "react-icons/ci";
import { RiTeamFill } from "react-icons/ri";
import TextArea from "antd/es/input/TextArea";

type FieldType = {
  teamStatus: string;
  teamName: string;
  teamLevel?: string;
  NoLanguage?: string;
  country?: string;
  description?: string;
};

const CreateTeam = () => {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    // console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="  flex flex-col justify-center items-center">
      {/* <div className="text-center  ">
        <h1 className="-mb-5 text-2xl text-site-color">
          Create and lead <span className="text-white">your own team</span>
        </h1>
        <div className="">
          <Divider
            style={{
              borderBlockColor: "#fd8533",
              marginLeft: -10,
            }}
          />
          <Divider
            style={{
              borderBlockColor: "white",
              marginLeft: 14,
              marginTop: -20,
            }}
          />
        </div>
      </div> */}
      <Image
        src={AllImages.contest.createTeam.teamBg}
        className="lg:h-[60vh] w-fit mx-auto"
        alt="create-team"
      />
      <div className="lg:w-[45%] mx-auto text-center">
        <p className="text-site-color w-[55%] mx-auto text-xl my-5">
          As a team leader you will be responsible to lead your team to victory!
        </p>
        <p>
          You will be able to invite other members to your team, setup and pick
          matches, and assign other Team Leaders ti help you
        </p>
      </div>
      <div>
        <div className="my-10 text-center ">
          <div className="">
            <div className="w-full  p-9  rounded-lg shadow-lg">
              <div
                className="lg:px-28 lg:py-8 px-8 text-center rounded-lg  border-2 border-gray-300 hover:border-site-color transition duration-300 ease-in-out transform hover:scale-125 hover:shadow-md"
                id="dropzone"
              >
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <p className=" py-5 flex items-center justify-center gap-4">
                    <span className=" bg-white h-16 w-16 rounded-full flex justify-center items-center ">
                      <CiImageOn className="h-7 w-fit text-black " />
                    </span>
                    <span>Choose your team badge </span>
                  </p>
                </label>
                <input type="file" id="fileInput" className="hidden" multiple />
              </div>
              <div className="mt-6 text-center" id="fileList"></div>
            </div>
          </div>
        </div>
      </div>
      <Form
        className="lg:w-[50%] w-full mx-5 lg:mx-auto"
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex  gap-5">
          <Typography className="text-white text-lg">Team Status :</Typography>
          <Form.Item
            name="teamStatus"
            className="text-center"
            rules={[
              { required: true, message: "Please select payment option!" },
            ]}
          >
            <Radio.Group className="accent-orange-400">
              <Radio value="public" style={{ color: "white" }}>
                Public
              </Radio>
              <Radio
                value="private"
                className="custom-label radio-color"
                style={{ color: "white" }}
              >
                Private
              </Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <Form.Item<FieldType>
          name="teamName"
          className="mb-6"
          rules={[{ required: true, message: "Please input your team name!" }]}
        >
          <Input
            placeholder="Team Name"
            size="large"
            prefix={<RiTeamFill className="text-gray-400 mx-2" />}
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="teamLevel"
          className="mb-6"
          rules={[{ required: true, message: "Please input your Level!" }]}
        >
          <Input
            placeholder="Team Level"
            size="large"
            prefix={<GiLevelThreeAdvanced className="text-gray-400 mx-2" />}
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="NoLanguage"
          className="mb-6"
          rules={[{ required: true, message: "Please Enter you language!" }]}
        >
          <Input
            placeholder="Language"
            size="large"
            prefix={<MdOutlineMessage className="text-gray-400 mx-2" />}
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="country"
          className="mb-6"
          rules={[
            { required: true, message: "Please Enter you Country Name!" },
          ]}
        >
          <Input
            placeholder="Country"
            size="large"
            prefix={<TbWorld className="text-gray-400 mx-2" />}
          />
        </Form.Item>

        <Form.Item<FieldType> name="description" className="mb-6">
          <TextArea placeholder="Description" size="large" rows={4} />
        </Form.Item>

        <Form.Item className="my-16">
          <SubmitButton title={"Create Team"} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTeam;
