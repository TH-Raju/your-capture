/* eslint-disable @next/next/no-img-element */
"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";

const TestimonialCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-site-color py-4 px-8 mx-10">
      <div className="flex  top-1/2 items-center  gap-5  px-2 ">
        <Image src={data.user} className="h-16 w-fit rounded-full" alt="user" />
        <div className="text-start">
          <h1 className="font-semibold text-lg">{data.userName}</h1>
          <p className=" text-xs">Switzerland</p>
        </div>
      </div>
      <div>
        <hr className=" my-3" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu
          sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis
          nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
