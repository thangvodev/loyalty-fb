import React from "react";
import { UpdateFloatButton } from "./update-float-button";
import { SearchBar } from "./search-bar";
import { LocationList } from "./location-list";

const Content = () => {
  return (
    <div className="relative flex flex-col gap-[20px] bg-white px-[16px] pb-[14px] pt-[12px]">
      <SearchBar />
      <LocationList />
      <UpdateFloatButton />
    </div>
  );
};

export default Content;
