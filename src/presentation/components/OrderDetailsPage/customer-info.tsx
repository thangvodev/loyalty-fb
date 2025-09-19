import React from "react";
import LocationIcon from "../icons/LocationIcon";

export const CustomerInformation = () => {
  return (
    <div className="flex flex-col gap-[8px] rounded-[12px] border border-gray2 bg-white p-[12px]">
      <div className="text-lg font-semibold">Thông tin khách hàng</div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-[8px]">
          <LocationIcon className="size-[17px] text-red6" />
          <div className="flex items-center gap-[4px]">
            <div className="text-base font-medium text-gray9">Thu Hồng</div>
            <div className="text-sm font-normal text-gray6">(039408545)</div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray6">
          123 Lý Thường Kiệt, quận 10, TP.Hồ Chí Minh
        </div>
      </div>
    </div>
  );
};
