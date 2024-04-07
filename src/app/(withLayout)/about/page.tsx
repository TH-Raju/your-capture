import AboutUs from "@/components/About/AboutUs";
import Capture from "@/components/About/Capture";
import CompanySection from "@/components/About/CompanySec";
import CrazeStudio from "@/components/About/CrazeStudio";
import Testimonials from "@/components/About/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Your Capture About page",
};
const AboutPage = () => {
  return (
    <>
      <CompanySection />
      <AboutUs />
      <Testimonials />
      {/* <CrazeStudio />
      <Capture /> */}
    </>
  );
};

export default AboutPage;
