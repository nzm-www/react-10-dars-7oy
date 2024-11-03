import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { FaSquarePlus } from "react-icons/fa6";

function LeftLayout() {
  return (
    <div className="container pl-9 pr-5 pt-16">
      <div className="flex gap-5 items-start pb-5">
        <div className="text-4xl text-white flex  flex-col gap-3">
          <MdHomeFilled />
          <IoSearch />
          <VscLibrary />
        </div>
        <div className="text-white flex  flex-col gap-5">
          <p className="text-xl font-semibold">Search</p>
          <p className="text-xl font-semibold">Home</p>
          <p className="text-xl font-semibold">Your Library</p>
        </div>
      </div>
      <div className="flex text-xl gap-5 items-center ">
        <p className="text-4xl">
          <FaSquarePlus />
        </p>
        Create Playlist
      </div>
      <div className="flex mt-6 gap-6 ml-[34px] items-center">
        <label
          className="relative text-[#FF91AF] flex cursor-pointer items-center justify-center "
          for="heart"
        >
          <input
            className="peer appearance-none"
            id="heart"
            name="heart"
            type="checkbox"
          />
          <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#FF91AF]"></span>
          <svg
            className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:1000] [stroke-dashoffset:1000] peer-checked:[stroke-dashoffset:0]"
            viewBox="0 0 68 87"
            fill="transparent"
            height="87"
            width="68"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.048 74.752c-.74 0-3.428.03-3.674-.175-3.975-3.298-10.07-11.632-12.946-15.92C7.694 53.09 5.626 48.133 3.38 42.035 1.937 38.12 1.116 35.298.93 31.012c-.132-3.034-.706-7.866 0-10.847C2.705 12.67 8.24 7.044 15.801 7.044c1.7 0 3.087-.295 4.55.875 4.579 3.663 5.515 8.992 7.172 14.171.142.443 3.268 6.531 2.1 7.698-.362.363-1.161-10.623-1.05-12.071.26-3.37 1.654-5.522 3.15-8.398 3.226-6.205 7.617-7.873 14.52-7.873 2.861 0 5.343-.274 8.049 1.224 16.654 9.22 14.572 23.568 5.773 37.966-1.793 2.934-3.269 6.477-5.598 9.097-1.73 1.947-4.085 3.36-5.774 5.424-2.096 2.562-3.286 5.29-5.598 7.698-4.797 4.997-9.56 10.065-14.522 14.872-1.64 1.588-10.194 6.916-10.672 7.873-.609 1.217 2.76-.195 4.024-.7"
              stroke-width="4px"
              pathLength="1000"
              stroke="#FF91AF"
            ></path>
          </svg>
        </label>
        <p className="text-xl font-semibold">Liked Songs</p>
      </div>
      <hr className="mt-[24px] bg-gray-600" />
    </div>
  );
}

export default LeftLayout;
