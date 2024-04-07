import Verification from "@/components/Auth/Verification";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "verify",
  description: "User verify page",
};

const VerificationPage = () => {
  return (
    <>
      <Verification />
    </>
  );
};

export default VerificationPage;
