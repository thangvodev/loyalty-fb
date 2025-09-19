import { Divider } from "antd";
import React, { FC } from "react";
import MissionIcon from "../../static/icons/mission.svg";
import { CheckOutlined } from "@ant-design/icons";
import CoinIcon from "../../static/icons/coin-gold.svg";
import { Button } from "../common/button";

const MissionTab = () => {
  return (
    <div
      className="flex flex-col gap-[20px] rounded-[20px] bg-white px-[16px] pb-[20px] pt-[12px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
    >
      <div className="text-lg font-semibold">Nhiệm vụ tích điểm</div>
      {Array.from({ length: 5 }).map((_, index) => (
        <React.Fragment key={index}>
          <MissionItem
            icon={MissionIcon}
            label="Đăng ký tài khoản"
            finished={index === 0}
            point={24}
            quotaLeft={index}
          />
          {index < 4 ? <Divider dashed className="m-0" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const MissionItem: FC<TMissionItem> = ({
  finished,
  icon,
  label,
  point,
  quotaLeft,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[12px]">
        <div
          className="size-[56px] rounded-[12px] border-[4px] border-white"
          style={{ boxShadow: "0px 2px 24px 0px #CACACA40" }}
        >
          <img src={icon} className="size-full" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-sm font-semibold">{label}</div>
          {finished ? (
            <div className="flex items-center gap-[4px]">
              <CheckOutlined className="text-green6" />
              <div className="text-xs font-normal text-green6">
                Đã hoàn thành
              </div>
            </div>
          ) : null}
          {quotaLeft ? (
            <div className="text-xs font-normal text-gray6">
              Còn {quotaLeft} lượt
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-end gap-[10px]">
        <div className="flex items-center gap-[4px]">
          <div className="text-base font-semibold text-[#694D17]">{point}</div>
          <img src={CoinIcon} alt="" className="size-[18px]" />
        </div>
        {finished ? null : (
          <Button
            text={
              <div className="text-xs font-medium text-white">Thực hiện</div>
            }
            className="flex h-[27px] flex-none items-center justify-center rounded-[41px] bg-green6 px-[8px]"
          />
        )}
      </div>
    </div>
  );
};

export { MissionTab };

type TMissionItem = {
  icon?: string;
  label?: string;
  point?: number;
  finished?: boolean;
  quotaLeft?: number;
};
