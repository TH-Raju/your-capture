"use client";

import PhotographerMention from "./PhotographerMention";
import TopPhotoWinner from "./TopPhotoWinner";
import TopPhotographerWinner from "./TopPhotographer";
import TopPickWinner from "./TopPickWinner";

const Winners = () => {
  return (
    <div className="mb-56">
      <TopPhotographerWinner />
      <TopPhotoWinner />
      <TopPickWinner />
      <PhotographerMention />
    </div>
  );
};

export default Winners;
