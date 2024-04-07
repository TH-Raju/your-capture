import Home from "@/components/Home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Your Capture Home page",
};

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
