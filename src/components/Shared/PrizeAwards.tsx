"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";

interface CurveCardProps {
  trade: number;
  votes: number;
  keys: number;
}

const PrizeAwards: React.FC<CurveCardProps> = ({
  trade = 0,
  votes = 0,
  keys = 0,
}) => {
  return (
    <div>
      <div className="flex relative">
        <div className="bg-white text-black mt-10 flex flex-col justify-center items-center h-44 w-28 lg:h-64 lg:w-48 border border-gray-600 transform -rotate-12 -mr-4 lg:-mr-8 rounded-md">
          <Image
            src={AllImages.badge1}
            className="h-16 lg:h-20 w-fit"
            alt="trade"
          />
          <p className="text-xl lg:text-4xl font-extrabold">x{trade}</p>
          <p className="text-sm lg:text-3xl font-semibold text-gray-500">
            Trade
          </p>
        </div>
        <div className="bg-white text-black  flex flex-col justify-center items-center h-44 w-28  lg:h-60 z-10 lg:w-52 border border-gray-600 mt-8 lg:mt-6 rounded-md ">
          <Image
            src={AllImages.badge2}
            className="h-16 lg:h-20 w-fit lg:mt-10"
            alt="trade"
          />
          <p className="text-xl lg:text-4xl font-extrabold">x{votes}</p>
          <p className="text-sm lg:text-3xl font-semibold text-gray-500">
            Charge
          </p>
        </div>
        <div className="bg-white text-black mt-10 flex flex-col justify-center items-center h-44 w-28 lg:h-64 lg:w-48 border border-gray-600 transform rotate-12 -ml-4 lg:-ml-8 rounded-md">
          <Image
            src={AllImages.badge3}
            className="h-16 lg:h-20 w-fit"
            alt="trade"
          />
          <p className="text-xl lg:text-4xl font-extrabold">x{keys}</p>
          <p className="text-sm lg:text-3xl font-semibold text-gray-500">
            Keys
          </p>
        </div>

        <div className="absolute z-40 bottom-0 -mb-14 lg:-mb-20">
          <Image src={AllImages.curve} className="w-full h-fit" alt="curve" />
        </div>
      </div>
    </div>
  );
};

export default PrizeAwards;
