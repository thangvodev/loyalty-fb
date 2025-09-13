import React from "react";
import { ViewDetailsButton } from "./view-details-button";
import { Banner } from "./banner";
import { Order } from "./order";

const Content = () => {
  return (
    <div className="flex flex-col gap-[20px] p-[16px]">
      <Banner />
      <Order />
      <ViewDetailsButton />
    </div>
  );
};

export default Content;
