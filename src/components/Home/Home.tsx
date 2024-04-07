"use client";

import About from "./About";
import Banner from "./BannerTop";
import Discover from "./Discover";
import Features from "./Features";
import Memories from "./Memories";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Memories />
      <Discover />
      <Features />
    </>
  );
};

export default Home;
