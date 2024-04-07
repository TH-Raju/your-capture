import React from "react";

const UploadSite = () => {
  return (
    <div className="">
      <div className="w-full max-w-md p-9  rounded-lg shadow-lg">
        <div
          className="bg-[#181818] p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-site-color transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          id="dropzone"
        >
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span className="text-gray-600">
              Drag and drop or Browse your file
            </span>
            <span className="text-gray-500 text-sm">(or click to select)</span>
          </label>
          <input type="file" id="fileInput" className="hidden" multiple />
        </div>
        <div className="mt-6 text-center" id="fileList"></div>
      </div>
    </div>
  );
};

export default UploadSite;
