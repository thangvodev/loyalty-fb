import { Divider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronIcon from "../icons/ChevronIcon";

export const SelectRestaurant = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[6px] px-[16px]">
        <div className="px-[4px] text-xs font-medium text-gray6">
          Chọn chi nhánh
        </div>
        <div
          className="flex items-center justify-between rounded-[8px] border-[0.75px] border-gray2 px-[12px] py-[8px]"
          onClick={() => navigate("/select-restaurant")}
        >
          <div className="flex flex-col gap-[8px]">
            <div className="text-sm font-medium">
              Hadilao Hotpot Vạn Hạnh Mall
            </div>
            <div className="text-xs font-medium text-gray6">
              Địa chỉ: 123, Đường 3/2 quận 10
            </div>
          </div>
          <ChevronIcon className="font-gray5 size-[9px] rotate-90" />
        </div>
      </div>
      <Divider className="m-0" />
    </div>
  );
};
