import React from "react";
import LeftLayout from "../components/LeftLayout";
import Rightlayout from "../components/Rightlayout";
import Futer from "../components/Futer";

function MainLayouts({ children }) {
  return (
    <div>
      <div className="left-bar w-[20vw] fixed h-[100vw] text-white bg-black">
        <LeftLayout />
      </div>
      <div className="w-[60vw] mx-auto">{children}</div>
      <div className="right-bar right-0 top-0 w-[20vw] fixed h-[100vw] text-white bg-black">
        <Rightlayout />
      </div>
      <div className="music-player h-[60px] bg-[#181818] fixed bottom-0 z-10 w-full">
        <Futer />
      </div>
    </div>
  );
}

export default MainLayouts;
