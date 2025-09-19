import React, { FC } from "react";
import RewardImg from "../../static/images/voucher.jpg";
import CoinGold from "../../static/icons/coin-gold.svg";
import { Button } from "../common/button";
import ClockIcon from "../icons/ClockIcon";
import { useNavigate } from "react-router-dom";

const RewardsList: FC<{ status: "redeemable" | "redeemed" | "used" }> = ({
  status,
}) => {
  return (
    <div className="h-full overflow-auto py-[14px]">
      <div className="grid grid-cols-2 gap-[14px] px-[16px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <RewardsListItem
            key={index}
            label="Giảm 50k sập sàn"
            description="Cho hoá đơn trên 500k"
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

const RewardsListItem: FC<TReward> = ({ label, description, status }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-[8.2px] overflow-hidden rounded-[12.3px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
      onClick={() => navigate("/rewards/1")}
    >
      <img
        src={RewardImg}
        alt=""
        className="h-[104.96px] w-full rounded-[7px] object-cover"
      />
      <div className="flex flex-col gap-[8.2px] px-[8.2px] pb-[12.3px]">
        <div className="flex flex-col gap-[4.1px]">
          <div className="text-base font-semibold">{label}</div>
          <div className="text-xs font-normal text-gray6">{description}</div>
        </div>
        {cardFooter[status]}
      </div>
    </div>
  );
};

export { RewardsList };

const cardFooter = {
  redeemable: (
    <div className="flex items-center justify-between">
      <div className="flex h-[27px] items-center gap-[4px] rounded-[24px] bg-orange1 px-[6px]">
        <div className="text-base font-semibold text-orange7">150</div>
        <img src={CoinGold} alt="" className="size-[16px]" />
      </div>
      <Button
        text={<div className="text-xs font-medium text-white">Đổi quà</div>}
        className="h-[27px] flex-none rounded-[41px] bg-green6 px-[8px]"
      />
    </div>
  ),
  redeemed: (
    <div className="flex items-center gap-[4px]">
      <ClockIcon className="size-[18px] text-red6" />
      <div className="text-xs font-medium text-red6">HSD: 22/07/2024</div>
    </div>
  ),
  used: (
    <div className="w-fit rounded-[4px] bg-gray1 p-[4px] text-xs font-medium text-gray8">
      Đã dùng
    </div>
  ),
};

type TReward = {
  label?: string;
  description?: string;
  status: "redeemable" | "redeemed" | "used";
};
