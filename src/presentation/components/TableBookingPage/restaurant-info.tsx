import React from "react";
import ClockIcon from "../icons/ClockIcon";
import LocationIcon from "../icons/LocationIcon";
import LocationOutlineIcon from "../icons/LocationOutlineIcon";
import PhoneOutlineIcon from "../icons/PhoneOutlineIcon";

export const RestaurantInfo = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px]">
      <div className="text-lg font-semibold">Thông tin nhà hàng</div>
      <div className="text-xs font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[4px]">
          <ClockIcon className="size-[18px] text-green6" />
          <div className="text-xs font-normal text-gray6">
            Mở cửa: <span className="text-gray8">Từ 9:00 - 2:00</span>
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <LocationOutlineIcon className="size-[18px] text-green6" />
          <div className="text-xs font-normal text-gray6">
            Địa chỉ: 123, Đường 3/2 quận 10
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <PhoneOutlineIcon className="size-[16px] text-green6" />
          <div className="text-xs font-normal text-gray6">10234330483</div>
        </div>
      </div>
    </div>
  );
};
