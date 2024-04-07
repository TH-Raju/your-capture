import Image from "next/image";
import { AllImages } from "@/assets/AllImage";

const Team = () => {
  return (
    <div className=" mb-24">
      <Image
        src={AllImages.TeamPhoto}
        className="lg:h-[70vh] w-full rounded-md object-cover"
        alt="capture"
      />
      {/* <div className="absolute lg:top-[15%] top-5 left-1/2 transform -translate-x-1/2 text-black lg:text-3xl  text-xl text-center font-bold">
        <h1 className="lg:w-[60%] mx-auto">Your Capture Awards Teams</h1>
      </div> */}
    </div>
  );
};

export default Team;
