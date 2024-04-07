import Login from "@/components/Auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "User Login page",
};

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
