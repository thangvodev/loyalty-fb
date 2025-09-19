import React from "react";
import CoinIcon from "../../static/icons/coin-gold.svg";
import PresentIcon from "../../static/icons/present.svg";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

export const Points = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center px-[16px]">
      <div
        className="flex flex-1 items-center justify-center gap-[12px] rounded-[8px] bg-white py-[13px]"
        style={{ boxShadow: "-3px 0px 12px 0px #29574314" }}
        onClick={() => navigate("/points")}
      >
        <img src={CoinIcon} className="size-[24px]" />
        <div className="flex flex-col gap-[2px]">
          <div className="text-sm font-semibold">Tích điểm</div>
          <div className="text-[11px] font-medium text-gray6">
            Bạn có 5,500 điểm
          </div>
        </div>
      </div>
      <Divider
        dashed
        type="vertical"
        className="absolute left-1/2 top-1/2 m-0 h-[32px] -translate-x-1/2 -translate-y-1/2 border-r border-stroke2"
      />
      <div
        className="flex flex-1 items-center justify-center gap-[12px] rounded-[8px] bg-white py-[13px]"
        style={{ boxShadow: "3px 0px 12px 0px #29574314" }}
        onClick={() => navigate("/points-redeem")}
      >
        <img src={PresentIcon} className="size-[24px]" />
        <div className="flex flex-col gap-[2px]">
          <div className="text-sm font-semibold">Đổi quà</div>
          <div className="text-[11px] font-medium text-gray6">
            Ưu đãi, quà tặng,...
          </div>
        </div>
      </div>
    </div>
  );
};
