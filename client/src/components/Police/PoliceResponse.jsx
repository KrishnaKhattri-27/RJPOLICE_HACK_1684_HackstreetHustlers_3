import React from "react";
import camera from "../../assests/camera.svg";
import upload from "../../assests/upload.svg";
import { IoCameraOutline } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const PoliceResponse = ({
  detectionResult,
  data,
  imageData,
  errorDetecting,
  startObjectDetection,
}) => {
  return (
    <div className="flex justify-around px-8 items-center h-[70%]">
      <div>
        <div className="flex flex-col items-center justify-center ">
          <Link to="/">
            {" "}
            <IoCameraOutline style={{ color: "white" }} size={140} />
          </Link>
        </div>
        <div className="text-center">
          <Button funcName={startObjectDetection} text="Camera" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div>
          <MdFileUpload style={{ color: "white" }} size={140} />
        </div>
        <div className="text-center">
          <Button text="Upload" />
        </div>
      </div>
    </div>
  );
};

export default PoliceResponse;
