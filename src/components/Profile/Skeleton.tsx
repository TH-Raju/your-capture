"use client";

const Skeleton = () => {
  return (
    <div className="">
      <div className="w-full max-w-md p-9  rounded-lg shadow-lg">
        <div
          className="bg-[#181818] h-48 p-8 text-center rounded-lg b hover:border-site-color transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          id="dropzone"
        >
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center space-y-2"
          ></label>
          <input type="file" id="fileInput" className="hidden" multiple />
        </div>
        <div className="mt-6 text-center" id="fileList"></div>
      </div>
    </div>
  );
};

export default Skeleton;
