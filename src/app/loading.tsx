import { FaCamera } from "react-icons/fa";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="w-28 h-28 border-8 border-dashed rounded-full animate-spin border-site-color"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaCamera className="text-site-color h-7 w-fit animate-ping" />
        </div>
      </div>
    </div>
  );
}
