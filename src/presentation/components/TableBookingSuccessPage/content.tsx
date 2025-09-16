import React from "react";
import { Banner } from "./banner";
import { BookingDetails } from "./booking-details";
import { PreorderButton } from "./preorder-button";

const Content = () => {
  return (
    <div className="flex flex-col gap-[20px] p-[16px]">
      <Banner />
      <BookingDetails />
      <PreorderButton />
    </div>
  );
};

export default Content;
