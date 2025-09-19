import { Divider } from "antd";
import React from "react";
import { Button } from "../common/button";
import BarCode from "../../static/images/bar-code-2.png";
import { BarCodePopup } from "./bar-code-popup";

export const RewardCode = () => {
  return (
    <>
      <Divider dashed className="m-0" />

      <div className="flex flex-col items-center gap-[12px]">
        <div className="flex items-center gap-[7px]">
          <div className="text-xs font-normal text-gray7">Mã khuyến mãi:</div>
          <div className="flex h-[21px] items-center justify-center rounded-[12px] bg-gray1 px-[8px] text-[11px] font-medium">
            QQI3443545
          </div>
          <Button
            text={
              <div className="text-[11px] font-medium text-orange6">Copy</div>
            }
            className="h-[21px] rounded-[8px] border border-orange6 px-[8px]"
          />
        </div>
        <BarCodePopup>
          {({ open }) => (
            <img
              src={BarCode}
              className="w-full object-contain"
              onClick={open}
            />
          )}
        </BarCodePopup>
        <div className="text-[11px] font-normal text-orange6">
          * Đưa mã này cho thu ngân
        </div>
      </div>
    </>
  );
};
