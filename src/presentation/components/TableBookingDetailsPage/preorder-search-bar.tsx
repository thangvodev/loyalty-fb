import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchNormalIcon from "../icons/SearchNormalIcon";

const PreorderSearchBar = () => {
  return (
    <div className="px-[16px]">
      <SearchBarNoPopup
        className="h-[46px] rounded-[24px] border-none pl-[12px] pr-[10px]"
        style={{ boxShadow: "0px 8px 24px 0px #587B651F" }}
        suffixIcon={
          <div className="flex size-[30px] items-center justify-center rounded-full bg-green6">
            <SearchNormalIcon className="size-[18px] text-white" />
          </div>
        }
        placeholder="Tìm kiếm Món ăn"
        allowClear={false}
      />
    </div>
  );
};

export { PreorderSearchBar };
