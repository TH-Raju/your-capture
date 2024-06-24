"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { MdArrowForward } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import Link from "next/link";
import Membership from "../Membership/Membership";

const Pricing = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 my-10">
        <h2 className="text-center text-4xl my-10">Pricing Plans</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2 justify-center items-center md:gap-8 w-full">
          <div className="bg-site-color flex flex-col justify-center items-center mx-3   rounded-2xl    shadow-sm ring-1  sm:order-last sm:px-8 ">
            <div className=" mt-6">
              <h1 className="text-white font-normal text-2xl px-2 lg:px-0">
                YOUR <br />
                CAPTURE AWARDS
              </h1>
              <h1 className="text-black px-2 lg:px-0">
                Choose a plan and get onboard in minutes
              </h1>
              <ArrowRightOutlined className="mt-6 h-5 px-2 lg:px-0" />
            </div>
            <div className="bottom-0 mt-7">
              <Image
                src={AllImages.price.pricingGirl}
                alt="images"
                className=""
              />
            </div>
          </div>

          {/* Pro card  */}

          <div className="rounded-2xl bg-white   p-6 shadow-sm ring-1  sm:order-last sm:px-8 h-full flex flex-col items-center justify-between">
            <div className="text-center top-[10%] flex justify-center items-center gap-2">
              <Image
                src={AllImages.price.premium}
                alt="Pro"
                className="h-8 w-fit"
              />
              <h2 className="text-4xl font-medium  text-gray-900">PRO</h2>
            </div>
            <p className="text-site-color text-xl ">What You’ll Get</p>
            <ul className="leading-10 mt-3">
              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />
                <span className="text-gray-700 leading-5 lg:leading-10">
                  {" "}
                  Create a Team
                </span>
              </li>

              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />

                <span className="text-gray-700">Normal Host</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />

                <span className="text-gray-700">Host Exhibition</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />
                <span className="text-gray-700"> Monthly bundle</span>
              </li>

              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />

                <span className="text-gray-700">4x Exhibition entry </span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />
                <span className="text-gray-700">
                  {" "}
                  Enter Photographer of the year
                </span>
              </li>
            </ul>

            <div className="border-t border-dashed border-site-color w-full">
              <div className="flex flex-col items-center ">
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl ">
                    {" "}
                    $29,95
                  </strong>
                </p>
                <p className="text-black text-center">(Per Month)</p>

                <Link href="/membership/premium">
                  <Button
                    className="border-none text-white border-orange-400  mx-3 my-8 "
                    style={{
                      color: "black",
                      backgroundColor: "#fd8533",
                      border: "1px solid #fd8533",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {" "}
                      <span>Chooses</span>
                      <MdArrowForward className="h-5 w-5" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* premium card  */}

          <div className="rounded-2xl bg-white   p-6 shadow-sm ring-1  sm:order-last sm:px-8 h-full flex flex-col items-center justify-between">
            <div className="text-center top-[10%] flex justify-center items-center gap-2">
              <Image
                src={AllImages.price.pro}
                alt="premium"
                className="h-8 w-fit"
              />
              <h2 className="text-4xl font-medium  text-gray-900">PREMIUM</h2>
            </div>
            <p className="text-site-color text-xl ">What You’ll Get</p>
            <ul className="leading-10 mt-3">
              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />
                <span className="text-gray-700 leading-5 lg:leading-10">
                  {" "}
                  Create a Team
                </span>
              </li>

              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />

                <span className="text-gray-700">Normal Host</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />
                <span className="text-gray-700"> Monthly bundle</span>
              </li>

              <li className="flex items-center gap-3">
                <GoCheckCircleFill className="text-green-500 h-4 w-fit" />

                <span className="text-gray-700">2x Exhibition entry </span>
              </li>
              <li className="flex items-center gap-3">
                <MdCancel className="text-red-500 h-4 w-fit" />
                <span className="text-gray-700">
                  {" "}
                  Enter Photographer of the year
                </span>
              </li>
            </ul>
            <div className="border-t border-dashed border-site-color w-full">
              <div className="flex flex-col items-center ">
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl ">
                    {" "}
                    $19,95
                  </strong>
                </p>
                <p className="text-black text-center">(Per Month)</p>

                <Link href="/membership/pro">
                  <Button
                    className="border-none text-white border-orange-400  mx-3 my-8 "
                    style={{
                      color: "black",
                      backgroundColor: "#fd8533",
                      border: "1px solid #fd8533",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {" "}
                      <span>Chooses</span>
                      <MdArrowForward className="h-5 w-5" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
