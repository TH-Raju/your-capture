"use client";
import { AllImages } from "@/assets/AllImage";
import { openPageDB } from "@/demoDB/OpenPageDB";
import { StarFilled } from "@ant-design/icons";
import Image from "next/image";
{
  /* <StarFilled className="h-4 w-4 text-site-color" />; */
}
const TopPhotographer = () => {
  return (
    <div className="w-[80%] mx-auto my-20">
      <div>
        <div className="flex justify-between items-center justify-items-center bg-gray-500 h-7 my-10">
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <StarFilled className="text-lg text-site-color text-center" />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
          <div>
            <Image src={AllImages.person} className="h-16 w-16" alt="user" />
          </div>
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <Image
                src={AllImages.contest.joined.vote}
                className="h-7 w-7"
                alt="user"
              />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center justify-items-center ">
          {openPageDB.slice(0, 3).map((data) => (
            <div className="max-w-xs" key={data.id}>
              <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={data.bg}
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
                  alt="Louvre"
                />

                <div className="absolute bottom-0 left-0 p-3 flex justify-center items-center gap-2">
                  <h1>
                    <Image
                      src={AllImages.contest.joined.comVote}
                      className="h-8 w-fit"
                      alt="vote"
                    />
                  </h1>
                  <p className="text-lg font-semibold">420</p>
                </div>
                {/* User name and Image */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd Time  */}

      <div>
        <div className="flex justify-between items-center justify-items-center bg-gray-500 h-7 my-10">
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <StarFilled className="text-lg text-site-color text-center" />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
          <div>
            <Image src={AllImages.person} className="h-16 w-16" alt="user" />
          </div>
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <Image
                src={AllImages.contest.joined.vote}
                className="h-7 w-7"
                alt="user"
              />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center justify-items-center ">
          {openPageDB.slice(3, 6).map((data) => (
            <div className="max-w-xs" key={data.id}>
              <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={data.bg}
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
                  alt="Louvre"
                />

                <div className="absolute bottom-0 left-0 p-3 flex justify-center items-center gap-2">
                  <h1>
                    <Image
                      src={AllImages.contest.joined.comVote}
                      className="h-8 w-fit"
                      alt="vote"
                    />
                  </h1>
                  <p className="text-lg font-semibold">420</p>
                </div>
                {/* User name and Image */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3nd Time  */}

      <div>
        <div className="flex justify-between items-center justify-items-center bg-gray-500 h-7 my-10">
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <StarFilled className="text-lg text-site-color text-center" />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
          <div>
            <Image src={AllImages.person} className="h-16 w-16" alt="user" />
          </div>
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <Image
                src={AllImages.contest.joined.vote}
                className="h-7 w-7"
                alt="user"
              />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center justify-items-center ">
          {openPageDB.slice(6, 9).map((data) => (
            <div className="max-w-xs" key={data.id}>
              <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={data.bg}
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
                  alt="Louvre"
                />

                <div className="absolute bottom-0 left-0 p-3 flex justify-center items-center gap-2">
                  <h1>
                    <Image
                      src={AllImages.contest.joined.comVote}
                      className="h-8 w-fit"
                      alt="vote"
                    />
                  </h1>
                  <p className="text-lg font-semibold">420</p>
                </div>
                {/* User name and Image */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4th Time  */}

      <div>
        <div className="flex justify-between items-center justify-items-center bg-gray-500 h-7 my-10">
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <StarFilled className="text-lg text-site-color text-center" />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
          <div>
            <Image src={AllImages.person} className="h-16 w-16" alt="user" />
          </div>
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <Image
                src={AllImages.contest.joined.vote}
                className="h-7 w-7"
                alt="user"
              />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center justify-items-center ">
          {openPageDB.slice(9, 12).map((data) => (
            <div className="max-w-xs" key={data.id}>
              <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={data.bg}
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
                  alt="Louvre"
                />

                <div className="absolute bottom-0 left-0 p-3 flex justify-center items-center gap-2">
                  <h1>
                    <Image
                      src={AllImages.contest.joined.comVote}
                      className="h-8 w-fit"
                      alt="vote"
                    />
                  </h1>
                  <p className="text-lg font-semibold">420</p>
                </div>
                {/* User name and Image */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5th Time  */}

      <div>
        <div className="flex justify-between items-center justify-items-center bg-gray-500 h-7 my-10">
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <StarFilled className="text-lg text-site-color text-center" />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
          <div>
            <Image src={AllImages.person} className="h-16 w-16" alt="user" />
          </div>
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <Image
                src={AllImages.contest.joined.vote}
                className="h-7 w-7"
                alt="user"
              />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center justify-items-center ">
          {openPageDB.slice(5, 8).map((data) => (
            <div className="max-w-xs" key={data.id}>
              <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={data.bg}
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
                  alt="Louvre"
                />

                <div className="absolute bottom-0 left-0 p-3 flex justify-center items-center gap-2">
                  <h1>
                    <Image
                      src={AllImages.contest.joined.comVote}
                      className="h-8 w-fit"
                      alt="vote"
                    />
                  </h1>
                  <p className="text-lg font-semibold">420</p>
                </div>
                {/* User name and Image */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6th Time  */}

      <div>
        <div className="flex justify-between items-center justify-items-center bg-gray-500 h-7 my-10">
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <StarFilled className="text-lg text-site-color text-center" />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
          <div>
            <Image src={AllImages.person} className="h-16 w-16" alt="user" />
          </div>
          <div className="h-16 w-16 bg-gray-600 flex flex-col justify-center items-center rounded-full -mx-3">
            <h1 className="flex flex-col justify-center items-center">
              <Image
                src={AllImages.contest.joined.vote}
                className="h-7 w-7"
                alt="user"
              />
              <span className="text-xl text-site-color text-center font-semibold">
                838
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center justify-items-center ">
          {openPageDB.slice(4, 7).map((data) => (
            <div className="max-w-xs" key={data.id}>
              <div className=" relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={data.bg}
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 opacity-45"
                  alt="Louvre"
                />

                <div className="absolute bottom-0 left-0 p-3 flex justify-center items-center gap-2">
                  <h1>
                    <Image
                      src={AllImages.contest.joined.comVote}
                      className="h-8 w-fit"
                      alt="vote"
                    />
                  </h1>
                  <p className="text-lg font-semibold">420</p>
                </div>
                {/* User name and Image */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPhotographer;
