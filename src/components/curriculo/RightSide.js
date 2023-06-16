import React from 'react'
import { banner } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="max-w-[50%] z-10"
        src={banner}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner