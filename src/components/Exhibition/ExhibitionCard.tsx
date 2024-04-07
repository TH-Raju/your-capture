"use client";

import { AllImages } from "@/assets/AllImage";
import { exhibitionDB } from "@/demoDB/exhibition";
import { Button, Divider } from "antd";
import Image from "next/image";
import { useState } from "react";

const ExhibitionCard = () => {
  return (
    <div className="lg:my-36 lg:mx-32 mt-10">
      {exhibitionDB.map((exhibition) => (
        <div
          key={exhibition.id}
          className="border border-site-color rounded-md py-5 lg:px-28 flex flex-col lg:flex-row justify-center items-center mb-14"
        >
          <div className=" lg:pl-0 pl-5 mb-5 lg:mb-0  w-[50%]">
            <h1 className="text-3xl font-light">{exhibition.name}</h1>
            <p className="w-[70%] my-4">{exhibition.description}</p>
            <div className="flex gap-10">
              <div>
                <p className="text-gray-200 font-light">
                  <span className="text-4xl text-white font-semibold mr-2">
                    {exhibition.votes}M
                  </span>
                  Votes
                </p>
                <p className="text-gray-200 font-light my-3">
                  <span className="text-4xl text-white font-semibold mr-2">
                    {exhibition.photos}K
                  </span>
                  Photos
                </p>
                <p className="text-gray-200 font-light">
                  <span className="text-4xl text-white font-semibold mr-2">
                    {exhibition.countries}
                  </span>
                  Countries
                </p>
              </div>
              <Divider
                type="vertical"
                style={{
                  borderColor: "#fd8533",
                  height: "12vh",
                  marginTop: "15px",
                }}
                className="hidden lg:block"
              />
              <div className="text-center">
                <p className="text-3xl">{exhibition.member}</p>
                <p className="text-gray-200 font-light">
                  Member <br />
                  Exhibited
                </p>
              </div>
            </div>
            <Button
              className="border-none text-white border-orange-400 mt-7"
              style={{
                color: "#fd8533",
                backgroundColor: "transparent",
                border: "1px solid #fff",
              }}
            >
              INVITATION
            </Button>
          </div>
          <div>
            <Image
              src={exhibition.image}
              alt="image1"
              className=" h-full w-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExhibitionCard;
