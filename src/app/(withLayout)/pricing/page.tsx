import Pricing from "@/components/Pricing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Your Capture Pricing page",
};

const PricingPage = () => {
  return (
    <>
      <Pricing />
    </>
  );
};

export default PricingPage;
