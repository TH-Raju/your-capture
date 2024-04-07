"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AllImages } from "@/assets/AllImage";
import { Button, Modal } from "antd";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import "aos/dist/aos.css";
import DiscoverImage from "../Shared/DiscoverImages";
import ModalData from "./ModalData";
import { discoverData } from "@/demoDB/discover";

const Discover = () => {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null);
  const [fav, setFav] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const openModal = (index: number) => {
    setModalOpenIndex(index);
  };

  const selectFav = () => {
    setFav(!fav);
  };

  const closeModal = () => {
    setModalOpenIndex(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-2 items-center justify-center justify-items-center ">
      {discoverData.map((discover, index) => (
        <React.Fragment key={discover.id}>
          <DiscoverImage
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal(index)}
            className={`transition-transform ${
              hoveredIndex === index ? "transform scale-105" : ""
            }`}
            image={
              <Image
                src={AllImages.discoverSingle}
                alt="Image Alt Text"
                className="rounded-md"
                fill
              />
            }
          >
            <div className="text-center mb-20 mx-auto ">
              <div className="flex justify-between mx-3 mt-3">
                <div
                  className={`flex items-center ${
                    hoveredIndex === index ? "block" : "hidden"
                  }`}
                >
                  <Image
                    src={AllImages.person}
                    alt="profile"
                    className="h-8 w-fit"
                  />
                  <h1 className=" text-sm ml-1">{discover.name}</h1>
                </div>
                <div
                  className={` ${hoveredIndex === index ? "block" : "hidden"}`}
                >
                  <button className="" onClick={selectFav}>
                    {fav ? (
                      <MdFavorite className="h-7 w-fit inline" />
                    ) : (
                      <MdFavoriteBorder className="h-7 w-fit inline" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </DiscoverImage>
          <Modal
            centered
            visible={modalOpenIndex === index}
            footer={null}
            onCancel={closeModal}
            width={800}
          >
            <ModalData
              discover={{
                id: discover.id,
                name: discover.name,
                user: AllImages.person.src,
                bg: AllImages.discoverSingle.src,
              }}
            />
          </Modal>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Discover;
