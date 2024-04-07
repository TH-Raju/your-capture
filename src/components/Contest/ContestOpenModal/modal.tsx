"use client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import ContestModalData from "../ModalData";

const ModalLayout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   setModalOpen(true);
  // }, [order]);

  return (
    <>
      <Modal
        centered
        open={modalOpen}
        footer={null}
        width={700}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <ContestModalData />
      </Modal>
    </>
  );
};

export default ModalLayout;
