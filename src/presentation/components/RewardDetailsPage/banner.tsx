import React from "react";
import RewardImg from "../../static/images/voucher.jpg";

export const Banner = () => {
  return (
    <div className="relative z-0">
      <div
        className="absolute inset-0 bottom-0"
        style={{
          background:
            "linear-gradient(0deg,rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.5) 100%)",
        }}
      />
      <div className="absolute inset-x-0 -bottom-[40px] h-[60px] bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[10px]" />
      <img src={RewardImg} alt="" className="h-[240px] w-full object-cover" />
    </div>
  );
};
