"use client";

import { AllImages } from "@/assets/AllImage";
import { openPageDB } from "@/demoDB/OpenPageDB";
import { Button, Modal, Result } from "antd";
import Image from "next/image";
import { useState } from "react";
import { MdHowToVote } from "react-icons/md";
import "./modal.css";
import Link from "next/link";

interface ImageData {
  id: number;
  bg: string;
}
interface VoteModalProps {
  setVoteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VoteModal: React.FC<VoteModalProps> = ({ setVoteModalOpen }) => {
  const [clickedImages, setClickedImages] = useState<number[]>([]);
  const [modal2Open, setModal2Open] = useState(false);

  const handleImageClick = (id: number) => {
    setClickedImages((prevClickedImages) => {
      const index = prevClickedImages.indexOf(id);
      if (index === -1) {
        return [...prevClickedImages, id];
      } else {
        return prevClickedImages.filter((imageId) => imageId !== id);
      }
    });
  };

  const outputData = () => {
    console.log(clickedImages);
    setModal2Open(true);

    //  If want to clear selected data
    // setClickedImages([]);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-items-center mx-auto mt-5 h-[60vh]   relative overflow-y-scroll">
        {openPageDB.map((data) => (
          <div className="max-w-xs mx-auto" key={data.id}>
            <div className="relative bg-cover bg-no-repeat">
              <Image
                src={data.bg}
                className="max-h-40 w-fit transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
                alt="Louvre"
                onClick={() => handleImageClick(data.id)} // Handle click on image
              />

              {/* User name and Image */}
              {clickedImages.includes(data.id) && ( // Show vote badge if image is clicked
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white bg-opacity-50">
                  <div className="flex items-center justify-center gap-2 px-2">
                    <Image
                      src={AllImages.contest.voteBadge}
                      className="h-28 w-fit rounded-full"
                      alt="vote badge"
                      onClick={() => handleImageClick(data.id)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="my-5 text-center">
        {clickedImages.length > 0 ? (
          <Button
            style={{
              backgroundColor: "#fd8533",
              color: "black",
              border: "none",
            }}
            className="px-10 font-bold rounded-md"
            onClick={() => outputData()} // Log clicked image IDs on submit
          >
            Submit
          </Button>
        ) : (
          <Button
            style={{
              backgroundColor: "#fd8533",
              color: "black",
              border: "none",
            }}
            className="px-10 font-bold rounded-md"
            disabled
          >
            Submit
          </Button>
        )}
      </div>
      <Modal
        centered
        open={modal2Open}
        footer={null}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        className="transparent-modal"
        width={950}
      >
        <div className="text-white flex flex-col justify-center items-center">
          <MdHowToVote className="h-32 w-fit " />
          <h1 className="text-3xl font-semibold">Thanks for voting</h1>
          <p>your voice was heard</p>
          <div className="flex gap-10 my-4">
            <button
              onClick={() => setModal2Open(false)}
              className="border px-3 py-1 hover:bg-site-color hover:text-black font-bold duration-200"
            >
              Continue voting
            </button>
            <Link
              href="/contest"
              onClick={(e) => {
                setModal2Open(false);
                setVoteModalOpen(false);
                setClickedImages([]);
              }}
            >
              <button className="border px-6 py-1 hover:bg-site-color hover:text-black font-bold duration-200">
                Done
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VoteModal;
