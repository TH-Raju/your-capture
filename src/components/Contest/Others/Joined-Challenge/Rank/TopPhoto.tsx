"use client";
import { openPageDB } from "@/demoDB/OpenPageDB";
import SingleCard from "./TopPhotoSingle";

const TopPhoto = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 lg:w-[70%] mx-auto">
      {openPageDB.map((open) => (
        <SingleCard key={open.id} data={open} />
      ))}
    </div>
  );
};

export default TopPhoto;
