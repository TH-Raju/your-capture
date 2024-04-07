"use client";

import { AllImages } from "@/assets/AllImage";
import { Divider } from "antd";
import Image from "next/image";

const Capture = () => {
  return (
    <div className=" my-20 flex flex-col justify-center items-center mt-20">
      <div className="text-center flex gap-3 items-center  mb-7 ">
        <div className="  ">
          <Divider
            style={{
              borderBlockColor: "#fd8533",
              marginLeft: -2,
            }}
          />
          <Divider
            style={{
              borderBlockColor: "white",
              marginLeft: 8,
              marginRight: 75,
              marginTop: -20,
            }}
          />
        </div>
        <h1 className="text-xl lg:text-2xl text-site-color mx-5">
          MY LATEST CAPTURE
        </h1>
        <div className="">
          <Divider
            style={{
              borderBlockColor: "#fd8533",
              marginLeft: -2,
            }}
          />
          <Divider
            style={{
              borderBlockColor: "white",
              marginLeft: 8,
              marginRight: 75,
              marginTop: -20,
            }}
          />
        </div>
      </div>
      <p className="lg:w-[30%] mx-auto text-center">
        Innovative captures. Reflecting current trends, pushing boundaries,
        showcasing creativity, and evoking emotion.
      </p>
      {/* Image  */}
      <div className="my-20">
        <div className="flex flex-col lg:flex-row gap-4 ">
          <Image
            src={AllImages.about.n1}
            alt="n1"
            className="max-h-full object-contain rounded-lg"
          />
          <div>
            <div>
              <Image
                src={AllImages.about.n2}
                alt="n2"
                className="max-h-full object-contain rounded-lg mb-3"
              />
            </div>
            <div>
              <Image
                src={AllImages.about.n3}
                alt="n3"
                className="max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4  mt-3">
          <div>
            <div>
              <Image
                src={AllImages.about.n4}
                alt="n4"
                className="max-h-full object-contain rounded-lg mb-3"
              />
            </div>
            <div>
              <Image
                src={AllImages.about.n5}
                alt="n5"
                className="max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
          <Image
            src={AllImages.about.n6}
            alt="n6"
            className="max-h-full object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-3">
          <Image
            src={AllImages.about.n7}
            alt="n7"
            className="max-h-full object-contain rounded-lg"
          />
          <div>
            <div>
              <Image
                src={AllImages.about.n8}
                alt="n8"
                className="max-h-full object-contain rounded-lg mb-3"
              />
            </div>
            <div>
              <Image
                src={AllImages.about.n9}
                alt="n9"
                className="max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4  mt-3">
          <div>
            <div>
              <Image
                src={AllImages.about.n10}
                alt="n10"
                className="max-h-full object-contain rounded-lg mb-3"
              />
            </div>
            <div>
              <Image
                src={AllImages.about.n11}
                alt="n11"
                className="max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
          <Image
            src={AllImages.about.n12}
            alt="n12"
            className="max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Capture;
