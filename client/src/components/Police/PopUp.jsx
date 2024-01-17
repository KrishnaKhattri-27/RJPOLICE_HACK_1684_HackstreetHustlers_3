import React from "react";
import heo from "../../assests/Hello.png";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import "./Police.css";

const PopUp = ({ messages }) => {
  return (
    <div className="rounded-3xl p-7 bg-gray-700 bg-opacity-55 w-[70%] h-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
      <div className="w-[30%]">
        <img src={messages.img} alt="" className="h-full rounded-lg" />
      </div>
      <div className="w-[70%] px-10  flex flex-col justify-around">
        <p className="text-5xl text-white ">
          A suspecious object is detected ..
        </p>
        <div className="text-white flex justify-around">
          <div className="flex gap-x-1 greenbutton justify-center items-center w-20 py-1 cursor-pointer" 
        //   onClick={yesHandler}
          >
            <TiTick size={21} />
            <span className="font-bold">YES</span>
          </div>
          <div className="flex gap-x-2 redbutton greenbutton justify-center items-center w-20 py-1 cursor-pointer">
            <ImCross size={14} />
            <span className="font-bold">NO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;