"use client";

import { AllImages } from "@/assets/AllImage";
import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import PaymentModalData from "./PaymentModalData";

const SwapContent = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center justify-items-center  gap-2">
      <div className=" bg-site-color  rounded-lg flex flex-col items-center justify-center h-52 pb-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Image
          src={AllImages.contest.modal.swapBg}
          className="h-fit p-5 w-40"
          alt="swap"
        />
        <h1 className="text-white text-xl font-semibold">
          The Science of Swapping
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-gray-200 text-center rounded-lg py-2  flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Single Swap</h1>
          <p className="text-lg font-bold my-1"> 1 Swap</p>
          <button
            className="bg-site-color text-white px-3 py-1 rounded-md mt-3"
            onClick={() => setPaymentModalOpen(true)}
          >
            $1.99
          </button>
        </div>
        <div className="bg-gray-200 text-center rounded-lg py-2  flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Swap in a box</h1>
          <p className="text-lg font-bold my-1"> 8 Swap</p>
          <button
            className="bg-site-color text-white px-3 py-1 rounded-md mt-3"
            onClick={() => setPaymentModalOpen(true)}
          >
            $4.99
          </button>
        </div>
        <div className="bg-gray-200 text-center rounded-lg py-2  flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Sack of Swap</h1>
          <p className="text-lg font-bold my-1"> 20 Swap</p>
          <button
            className="bg-site-color text-white px-3 py-1 rounded-md mt-3"
            onClick={() => setPaymentModalOpen(true)}
          >
            $9.99
          </button>
        </div>
        <div className="bg-gray-200 text-center rounded-lg py-2  flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Bucket of Swap</h1>
          <p className="text-lg font-bold my-1"> 40 Swap</p>
          <button
            className="bg-site-color text-white px-3 py-1 rounded-md mt-3"
            onClick={() => setPaymentModalOpen(true)}
          >
            $24.99
          </button>
        </div>
        <Modal
          centered
          footer={null}
          open={paymentModalOpen}
          onOk={() => setPaymentModalOpen(false)}
          onCancel={() => setPaymentModalOpen(false)}
          width={630}
        >
          <PaymentModalData />
        </Modal>
      </div>
    </div>
  );
};

export default SwapContent;
