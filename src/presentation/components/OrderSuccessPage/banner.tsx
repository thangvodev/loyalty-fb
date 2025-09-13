import React from "react";
import BannerImg from "../../static/images/order-success.png";

export const Banner = () => {
  return (
    <div className="flex justify-center">
      <img src={BannerImg} />
    </div>
  );
};
