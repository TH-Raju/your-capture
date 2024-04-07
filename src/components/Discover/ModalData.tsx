"use client";

import { AllImages } from "@/assets/AllImage";
import { Button } from "antd";
import Image from "next/image";
import { IoIosAddCircleOutline } from "react-icons/io";
interface Props {
  discover: {
    id: number;
    name: string;
    user: string;
    bg: string;
  };
}
const ModalData: React.FC<Props> = ({ discover }) => {
  console.log(discover);
  return (
    <div className="mt-5 lg:flex lg:flex-row flex-col  items-start gap-6 ">
      <div>
        <Image
          src={AllImages.modal.ModalImage}
          alt="modal-image"
          className="lg:min-h-96 lg:min-w-96 mb-5"
        />
      </div>
      <div>
        <div className="flex items-center">
          <Image
            src={AllImages.modal.ModalProfile}
            alt="modal-image"
            className="h-32 w-fit mr-3"
          />
          <div>
            <h1 className="font-bold text-site-color text-2xl mb-2">
              {discover.name}
            </h1>
            <Button
              className="border-none text-white border-orange-400 "
              style={{
                color: "black",
                backgroundColor: "#fd8533",
                border: "1px solid #fd8533",
              }}
            >
              <div className="flex items-center justify-center gap-1">
                <span>Follow</span>
                <IoIosAddCircleOutline className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex gap-2 items-center">
          <div className="border border-site-color px-2 rounded-xl flex flex-col items-center">
            <Image
              src={AllImages.modal.voteIcon}
              className="h-14 w-fit"
              alt="votes"
            />
            <h1 className=" text-black text-2xl mb-2">
              <span className="font-bold">687</span>
              <span className="text-sm">Votes</span>
            </h1>
          </div>
          <div className="border border-site-color px-2 rounded-xl  flex flex-col items-center">
            <Image
              src={AllImages.modal.views}
              className="h-14 w-fit"
              alt="views"
            />
            <h1 className=" text-black text-2xl mb-2">
              <span className="font-bold">687</span>
              <span className="text-sm">Views</span>
            </h1>
          </div>
          <div className="border border-site-color px-2 rounded-xl flex flex-col items-center">
            <Image
              src={AllImages.modal.likes}
              className="h-14 w-fit"
              alt="likes"
            />
            <h1 className=" text-black text-2xl mb-2">
              <span className="font-bold">687</span>
              <span className="text-sm">Likes</span>
            </h1>
          </div>
        </div>
        <div className="border border-site-color px-2 rounded-xl flex flex-col items-center w-[70%] my-2">
          <Image
            src={AllImages.modal.achievement}
            className="h-14 w-fit mt-2"
            alt="votes"
          />
          <h1 className=" text-black text-2xl mb-2">
            <span className="font-bold">687</span>
            <span className="text-sm">ACHIEVEMENT</span>
          </h1>
        </div>

        <h1 className="text-2xl mt-3">LABEL</h1>
        <hr />
        <div className=" mt-4">
          <div className="flex flex-wrap gap-3 mx">
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Sunlight
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Cloud
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Sky
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Water
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              World
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Natural landscape
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Mountain
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Body of water
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Terrain
            </button>
            <button className="btn border border-site-color rounded-full px-3 py-1 font-semibold">
              Coastal and oceanic landforms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalData;
