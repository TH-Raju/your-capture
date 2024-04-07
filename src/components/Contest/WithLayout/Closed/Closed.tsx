"use client";
import { openPageDB } from "@/demoDB/OpenPageDB";
import SingleClosedCard from "./SingleClosedCard";

const Closed = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {openPageDB.map((open) => (
          <SingleClosedCard key={open.id} data={open} />
        ))}
      </div>
    </div>
  );
};

export default Closed;
