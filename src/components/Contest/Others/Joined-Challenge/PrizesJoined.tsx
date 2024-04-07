"use client";

import { AllImages } from "@/assets/AllImage";
import PrizeAwards from "@/components/Shared/PrizeAwards";
import { Badge } from "antd";
import Image from "next/image";

const PrizesJoined = () => {
  return (
    <div className="lg:w-[80%] px-3 mx-auto flex flex-col justify-center items-center mt-28">
      <h1 className="text-4xl font-semibold">
        TOP <span className="text-site-color">PHOTOGRAPHER</span> AWARD
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-20">
        <div className="lg:w-[50%] mx-auto text-center flex flex-col justify-center items-center">
          <Image
            src={AllImages.contest.prizes.l1}
            className="h-28 w-fit"
            alt="top photographer"
          />
          <p className="text-2xl font-semibold  my-3">
            Your Capture Awards Bundle
          </p>
          <p className=" text-center">
            Congratulations on winning the Your Capture Award! Your exceptional
            photography skills have earned you well-deserved recognition. Keep
            up the great work.
          </p>
        </div>
        <div>
          <PrizeAwards trade={20} votes={15} keys={40} />
        </div>
      </div>

      <h1 className="text-4xl font-semibold mt-28">
        TOP <span className="text-site-color">PHOTO</span> AWARD
      </h1>
      <div className="flex flex-col-reverse lg:flex-row text-center justify-center items-center lg:gap-10 lg:my-32 my-16">
        <div>
          <PrizeAwards trade={20} votes={15} keys={40} />
        </div>
        <div className="lg:w-[50%] mx-auto flex flex-col justify-center items-center">
          <Image
            src={AllImages.contest.prizePhoto.prizePhoto}
            className="h-28 w-fit"
            alt="top photographer"
          />
          <p className="text-2xl font-semibold  my-3">Your Capture Bundle</p>
          <p className=" text-center">
            Congratulations on winning the Your Capture Award! Your exceptional
            photography skills have earned you well-deserved recognition. Keep
            up the great work.
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-semibold mt-28">
        <span className="text-site-color">YC </span> PICK
        <span className="text-site-color"> AWARD</span>
      </h1>
      <div className="flex flex-col-reverse lg:flex-row text-center justify-center items-center lg:gap-10 lg:my-28 my-14">
        <div className="lg:w-[50%] mx-auto flex flex-col justify-center items-center">
          <Image
            src={AllImages.contest.prizes.l2}
            className="h-28 w-fit"
            alt="top photographer"
          />
          <p className="text-2xl font-semibold  my-3">Your Capture Award</p>
          <p className=" text-center">
            Congratulations on winning the Your Capture Award! Your exceptional
            photography skills have earned you well-deserved recognition. Keep
            up the great work.
          </p>
        </div>
        <div>
          <PrizeAwards trade={20} votes={15} keys={40} />
        </div>
      </div>
    </div>
  );
};

export default PrizesJoined;
