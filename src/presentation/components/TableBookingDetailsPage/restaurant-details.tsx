import React from "react";
import LocationIcon from "../icons/LocationIcon";

export const RestaurantDetails = () => {
  return (
    <div
      className="flex flex-col gap-[8px] bg-white px-[16px] pb-[14px] pt-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="text-base font-semibold">
        Hadilao Hotpot Vạn Hạnh Mall
      </div>
      <div className="flex items-center gap-[4px]">
        <LocationIcon className="size-[16px] text-orange6" />
        <div className="text-sm font-medium">
          Địa chỉ: 123, Đường 3/2 quận 10
        </div>
      </div>
    </div>
  );
};
