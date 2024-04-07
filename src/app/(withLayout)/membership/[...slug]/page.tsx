import Membership from "@/components/Membership/Membership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description: "Your Capture Membership page",
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Membership pack={params.slug} />
    </>
  );
}
