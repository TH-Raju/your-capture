import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "User Sign up page",
};

const SignupPage = () => {
  return (
    <>
      <Signup />
    </>
  );
};

export default SignupPage;
