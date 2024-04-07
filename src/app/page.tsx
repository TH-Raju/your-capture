"use client";
import Login from "@/components/Auth/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Home from "@/components/Home/Home";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function Main() {
  // const route = useRouter();
  // const user = true;
  // useEffect(() => {
  //   if (user) {
  //     route.push("/home");
  //   } else {
  //     route.push("/login");
  //   }

  //   return () => {};
  // }, [route, user]);

  return (
    <div className="container mx-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
