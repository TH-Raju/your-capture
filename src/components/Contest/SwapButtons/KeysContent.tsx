"use client";

import { AllImages } from "@/assets/AllImage";
import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import PaymentModalData from "./PaymentModalData";

const KeysContent = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center justify-items-center  gap-2">
      <div className=" bg-site-color  rounded-lg flex flex-col items-center justify-center h-52 pb-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Image
          src={AllImages.contest.modal.keyBg}
          className="h-fit w-40"
          alt="swap"
        />
        <h1 className="text-white text-xl font-semibold">
          Unlock Boosts Early
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-gray-200 text-center rounded-lg py-2 flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Single key</h1>
          <p className="text-lg font-bold my-1"> 1 Key</p>
          <button
            className="bg-site-color text-white px-3 py-1 rounded-md mt-3"
            onClick={() => setPaymentModalOpen(true)}
          >
            $1.99
          </button>
        </div>
        <div className="bg-gray-200 text-center rounded-lg py-2  flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Handful of keys</h1>
          <p className="text-lg font-bold my-1"> 4 Keys</p>
          <button
            className="bg-site-color text-white px-3 py-1 rounded-md mt-3"
            onClick={() => setPaymentModalOpen(true)}
          >
            $8.99
          </button>
        </div>
        <div className="bg-gray-200 text-center rounded-lg py-2  flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Sack of keys</h1>
          <p className="text-lg font-bold my-1"> 8 Keys</p>
          <button
            className="bg-site-color text-white px-3 py-1 rounded-md mt-3"
            onClick={() => setPaymentModalOpen(true)}
          >
            $12.99
          </button>
        </div>
        <div className="bg-gray-200 text-center rounded-lg py-2  flex flex-col justify-center items-center">
          <h1 className="text-base font-semibold">Bucket of keys</h1>
          <p className="text-lg font-bold my-1"> 30 keys</p>
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

export default KeysContent;
