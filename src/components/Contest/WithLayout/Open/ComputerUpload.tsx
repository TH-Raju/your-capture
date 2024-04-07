"use client";
import { Button, Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import ModalLayout from "../../ContestOpenModal/modal";
import ContestModalData from "../../ModalData";
import { useRouter } from "next/navigation";

const ComputerUpload = ({ setModal1Open }: { setModal1Open: any }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = () => {
    router.push("/contest");
  };
  return (
    <div className="my-10 text-center ">
      <h1 className="uppercase font-bold text-xl">
        UPLOAD PHOTOS TO <span className="text-site-color">LIGHT</span>{" "}
        CHALLENGE
      </h1>
      <p className="bg-site-color font-semibold p-1 rounded-md my-3">
        Select maximum 4 Photos to Upload
      </p>

      <div className="">
        <div className="w-full max-w-md p-9  rounded-lg shadow-lg">
          <div
            className=" p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-site-color transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            id="dropzone"
          >
            <label
              htmlFor="fileInput"
              className="cursor-pointer flex flex-col items-center space-y-2"
            >
              <span className="text-gray-600 py-5">
                Drop image or Click to upload files
              </span>
            </label>
            <input type="file" id="fileInput" className="hidden" multiple />
          </div>
          <div className="mt-6 text-center" id="fileList"></div>
        </div>
      </div>
      <p className="bg-black text-white font-semibold p-1 rounded-md my-3">
        I’m the sole owner of the photos I’m Uploading
      </p>
      <div className="flex justify-around">
        <Button
          onClick={() => setModal1Open(false)}
          className="px-4 py-1 uppercase  text-black rounded-md mt-5 bg-white"
          style={{ color: "black", border: "1px solid #fd8533" }}
        >
          Back
        </Button>
        {/* <Link href="/contest"> */}
        <Button
          className="px-4 py-1 uppercase  text-black rounded-md mt-5 bg-white"
          style={{ color: "black", border: "1px solid #fd8533" }}
          onClick={() => setShowModal(true)}
        >
          Submit
        </Button>
        {/* </Link> */}
        <Modal
          centered
          open={showModal}
          footer={null}
          width={700}
          onOk={onSubmit}
          onCancel={onSubmit}
        >
          <ContestModalData />
        </Modal>
      </div>
    </div>
  );
};

export default ComputerUpload;
