/* eslint-disable @next/next/no-img-element */
"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";

const SingleCard = ({ data }: { data: any }) => {
  return (
    <div className="max-w-xs mx-auto">
      <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
        <Image
          src={data.bg}
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
          alt="Louvre"
        />
        {/* User name and Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-start p-4 text-white bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <div className=" bg-opacity-70 flex items-center gap-2 px-5 py-1 rounded-full w-full">
            {/* Top Data  */}
            <div className="absolute top-0 left-0 p-3">
              <h1 className="text-xl font-semibold">#{data.id}</h1>
            </div>
            <div className="absolute top-0 right-0 p-3">
              <h1>
                <MdFavoriteBorder className="h-6 w-6 lg:h-8 lg:w-8 " />
              </h1>
            </div>
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
          {/* Botoom Data  */}
          <div className="absolute bottom-0 left-0 p-3 flex justify-center items-center gap-2">
            <h1>
              <Image
                src={AllImages.contest.joined.comVote}
                className="h-8 w-fit"
                alt="vote"
              />
            </h1>
            <p className="text-lg font-semibold">420</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
