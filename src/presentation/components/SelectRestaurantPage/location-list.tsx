import React from "react";
import LocationMarkIcon from "../icons/LocationMarkIcon";
import LocationIcon from "../icons/LocationIcon";
import ChevronIcon from "../icons/ChevronIcon";
import { Divider } from "antd";

export const LocationList = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center gap-[8px]">
        <LocationMarkIcon className="size-[20px] text-orange6" />
        <div className="text-base font-medium text-gray7">
          Chọn chi nhánh gần nhất
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-[12px]">
                <div className="flex size-[32px] items-center justify-center rounded-[6.4px] bg-orange1">
                  <LocationIcon className="text-orange6" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <div className="text-sm font-semibold">Hadilao 3/2</div>
                  <div className="text-xs font-medium text-gray6">
                    284/12/3 Lý Thường Kiệt
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="text-xs font-normal text-gray6">1.3km</div>
                <ChevronIcon className="size-[12px] text-gray6" />
              </div>
            </div>
            {index < 2 && <Divider className="m-0" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
