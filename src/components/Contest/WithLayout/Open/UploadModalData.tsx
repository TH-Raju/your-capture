"use client";

import { AllImages } from "@/assets/AllImage";
import { Divider, Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import ComputerUpload from "./ComputerUpload";

const UploadModalData = () => {
  const [modal1Open, setModal1Open] = useState(false);
  return (
    <div className="my-10 text-center ">
      <h1 className="uppercase font-bold text-xl">
        UPLOAD PHOTOS TO <span className="text-site-color">LIGHT</span>{" "}
        CHALLENGE
      </h1>
      <Divider style={{ borderColor: "black" }} />
      <div>
        <div className="flex gap-5">
          <div className="w-full max-w-md  rounded-lg shadow-lg">
            <button onClick={() => setModal1Open(true)}>
              <div
                className=" text-center rounded-lg   transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                id="dropzone"
              >
                <Image
                  src={AllImages.contest.computerUpload}
                  alt="computer upload"
                  className="h-full"
                />
              </div>
            </button>
          </div>

          <div className="w-full max-w-md  rounded-lg shadow-lg">
            <div
              className=" text-center rounded-lg   transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <Image
                src={AllImages.contest.photoUpload}
                alt="computer upload"
                className="h-full"
              />
            </div>
            <div className="mt-6 text-center" id="fileList"></div>
          </div>
          <div className="w-full max-w-md  rounded-lg shadow-lg">
            <div
              className=" text-center rounded-lg   transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col items-center "
              >
                <Image
                  src={AllImages.contest.profileUpload}
                  alt="computer upload"
                  className="h-full"
                />
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>
            <div className="mt-6 text-center" id="fileList"></div>
          </div>
        </div>
      </div>

      <Divider style={{ borderColor: "black" }} />
      <Modal
        centered
        open={modal1Open}
        footer={null}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <ComputerUpload setModal1Open={setModal1Open} />
      </Modal>
    </div>
  );
};

export default UploadModalData;
