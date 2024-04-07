import Profile from "@/components/Profile/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your Capture User Profile page",
};

const ProfilePage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default ProfilePage;
