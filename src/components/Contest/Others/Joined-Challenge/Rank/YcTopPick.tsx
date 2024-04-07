"use client";
import { AllImages } from "@/assets/AllImage";
import { openPageDB } from "@/demoDB/OpenPageDB";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";

const YcTopPick = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-[70%] mx-auto">
      {openPageDB.map((data) => (
        <div className="max-w-xs mx-auto" key={data.id}>
          <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={data.bg}
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
              alt="Louvre"
            />
            <div className="absolute top-0 left-0 p-3">
              <h1 className="text-xl font-semibold h-6 w-6 bg-gray-600 rounded-full flex items-center justify-center">
                <StarFilled className="h-4 w-4 text-site-color" />
              </h1>
            </div>
            {/* User name and Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-start p-4 text-white bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
              <div className=" bg-opacity-70 flex items-center gap-2 px-5 py-1 rounded-full w-full">
                {/* Top Data  */}
                {/* <div className="absolute top-0 left-0 p-3">
                  <h1 className="text-xl font-semibold">
                    <StarFilled className="h-8 w-fit text-site-color" />
                  </h1>
                </div> */}
              </div>
              <div className="flex flex-col top-1/2 items-center justify-center gap-2  px-2 h-full">
                <Image
                  src={data.user}
                  className="h-20 w-fit rounded-full"
                  alt="user"
                />
                <div className="text-center">
                  <h1 className="font-semibold">{data.userName}</h1>
                  <p className="font-thin">Switzerland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YcTopPick;
