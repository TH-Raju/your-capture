"use client";

import { AllImages } from "@/assets/AllImage";
import Image from "next/image";
import Link from "next/link";

const NotificationContent = () => {
  return (
    <div className="flex flex-col gap-5 -mr-32">
      <Link href="/" className="hover:text-black">
        <div className="flex gap-3 items-center border-b border-b-black border-spacing-9 w-[70%]">
          <div className="w-8">
            <Image
              src={AllImages.notification}
              alt="notification"
              width={32}
              height={32}
            />
          </div>
          <div className="w-full">
            <p className="text-base font-normal">
              You have received $500 from Nova Parker
            </p>
            <p className="text-sm font-light">Fri, 12:30pm</p>
          </div>
        </div>
      </Link>
      <Link href="/" className="hover:text-black">
        <div className="flex gap-3 items-center border-b border-b-black border-spacing-9 w-[70%]">
          <div className="w-8">
            <Image
              src={AllImages.notification}
              alt="notification"
              width={32}
              height={32}
            />
          </div>
          <div className="w-full">
            <p className="text-base font-normal">
              New Appointment has created With Violet Ward at 11:20am,
              20/10/2024
            </p>
            <p className="text-sm font-light">Fri, 12:30pm</p>
          </div>
        </div>
      </Link>
      <Link href="/" className="hover:text-black">
        <div className="flex gap-3 items-center border-b border-b-black border-spacing-9 w-[70%]">
          <div className="w-8">
            <Image
              src={AllImages.notification}
              alt="notification"
              width={32}
              height={32}
            />
          </div>
          <div className="w-full">
            <p className="text-base font-normal">
              New Appointment has created With Violet Ward at 11:20am,
              20/10/2024
            </p>
            <p className="text-sm font-light">Fri, 12:30pm</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotificationContent;
