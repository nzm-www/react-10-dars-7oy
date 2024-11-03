import React from "react";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";
function Futer() {
  return (
    <div className="container pr-10 pl-10 ">
      <div className="flex items-center  justify-between">
        <div className="name"></div>
        <div className="play">
          <div className="flex items-center pt-2 gap-20">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="voice"></div>
      </div>
    </div>
  );
}

export default Futer;
