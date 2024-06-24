import React from "react";

const Faq = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mt-10 mb-5">FAQ</h1>
      <p className="mb-10">Frequently Asked Questions by Users</p>

      <div className="space-y-4 w-[80%] mx-auto">
        <details
          className="group border-s-4 border-site-color p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium">
              How do I participate in a photo contest?
            </h2>
            <span className="shrink-0 rounded-full text-black bg-white p-1.5 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed">
            To participate in a photo contest, first register on our website and
            create a profile. Then, visit the contest page, read the rules, and
            submit your photos according to the guidelines provided.
          </p>
        </details>

        <details className="group border-s-4 border-site-color p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium">
              What are the photo submission requirements?
            </h2>
            <span className="shrink-0 rounded-full text-black bg-white p-1.5 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed">
            Each contest may have specific requirements, but generally, photos
            must be high-resolution, in JPEG or PNG format, and must not contain
            any watermarks or signatures. Check each contest's rules for
            detailed requirements.
          </p>
        </details>

        <details className="group border-s-4 border-site-color p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium">
              How are the winners selected?
            </h2>
            <span className="shrink-0 rounded-full text-black bg-white p-1.5 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed">
            Winners are selected based on a combination of public votes and
            judging by a panel of experts. Each contest will outline the
            specific judging criteria and process.
          </p>
        </details>

        <details className="group border-s-4 border-site-color p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium">
              Can I edit my photo submission after uploading?
            </h2>
            <span className="shrink-0 rounded-full text-black bg-white p-1.5 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed">
            No, once a photo has been submitted, it cannot be edited. Please
            make sure to review your submission carefully before finalizing it.
          </p>
        </details>

        <details className="group border-s-4 border-site-color p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium">
              What are the prizes for winning a contest?
            </h2>
            <span className="shrink-0 rounded-full text-black bg-white p-1.5 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed">
            Prizes vary depending on the contest. They may include cash awards,
            photography equipment, and features in prominent publications. Each
            contest page will detail the specific prizes.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
