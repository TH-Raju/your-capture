import Discover from "@/components/Discover/Discover";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover",
  description: "Your Capture discover page. Discover Images and Features",
};

const DiscoverPage = () => {
  return (
    <>
      <Discover />
    </>
  );
};

export default DiscoverPage;
