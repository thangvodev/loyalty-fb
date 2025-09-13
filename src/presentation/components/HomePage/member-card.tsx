import React from "react";
import CardTopBg from "../../static/images/card-top-bg.jpg";
import ChevronIcon from "../icons/ChevronIcon";
import CoinGold from "../../static/icons/coin-gold.svg";
import Diamond from "../../static/icons/diamond.svg";
import BarCode from "../../static/images/bar-code.png";
import { Progress } from "antd";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { useNavigate } from "react-router-dom";

export const MemberCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      <div className="relative flex flex-col gap-[14px] px-[16px] pb-[8px] pt-[12px]">
        {/* Background */}
        <img src={CardTopBg} alt="" className="absolute inset-0 z-0" />
        {/* Content */}
        <div className="z-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-medium text-[#694D17]">Anne</div>
            <div
              className="flex h-[20px] items-center rounded-[24px] pl-[6px] pr-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(201, 161, 0, 0.4) 0%, rgba(255, 213, 87, 0.4) 49.04%, rgba(182, 146, 4, 0.4) 100%)",
              }}
            >
              <div className="text-2xs font-medium text-[#694D17]">
                Hạng vàng
              </div>
              <ChevronIcon className="size-[8px] text-[#694D17]" />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="text-[18px] font-semibold text-[#694D17]">5000</div>
            <img src={CoinGold} alt="" className="size-[18px]" />
          </div>
        </div>
        <div className="z-10 flex flex-col gap-[4px]">
          <div className="flex justify-between">
            <div
              className="flex h-[18px] items-center rounded-[10px] px-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(237, 196, 28, 0.4) 0%, rgba(173, 132, 11, 0.4) 49.04%, rgba(225, 183, 18, 0.4) 100%)",
              }}
            >
              <div className="text-2xs font-medium text-yellow1">5000</div>
            </div>
            <div
              className="flex h-[18px] items-center gap-[2px] rounded-[12px] bg-white px-[4px]"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <img src={Diamond} alt="" className="size-[14px]" />
              <div className="text-2xs font-semibold leading-none text-[#694D17]">
                10,000
              </div>
            </div>
          </div>
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#FBFBEA"
            trailColor="#A3A50D"
            className="leading-[0]"
          />
        </div>
      </div>
      <div className="z-10 flex items-center justify-between bg-white px-[16px] py-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div
          className="flex items-center gap-[4px]"
          onClick={() => navigate("/qr")}
        >
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[9px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};
