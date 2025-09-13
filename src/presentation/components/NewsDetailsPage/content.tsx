import React from "react";
import { NewsDetails } from "./news-details";
import { Recommendations } from "./recommendations";
import NewsBanner from "../../static/images/news.jpg";

const Content = () => {
  return (
    <div className="flex w-full flex-col gap-[14px] pb-[14px]">
      <img src={NewsBanner} alt="" className="h-[240px] w-full object-cover" />
      <NewsDetails />
      <Recommendations />
    </div>
  );
};

export default Content;
