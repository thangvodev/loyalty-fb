import { Divider } from "antd";
import React, { FC } from "react";
import CoinIcon from "../../static/icons/coin-gold.svg";
import { Badge } from "../common/badge";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

const NotificationList = () => {
  return (
    <div className="flex h-full flex-col gap-[20px] overflow-visible pb-[16px]">
      {Array.from({ length: 3 }).map((_, index) => (
        <React.Fragment key={index}>
          <NotificationItem
            icon={CoinIcon}
            label="Tích thành công 120 điểm"
            description={`Hoàn thành nhiệm vụ “Daily checkin", bạn được cộng 120 điểm`}
            read={false}
          />
          {index < 2 ? <Divider className="m-0" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const NotificationItem: FC<TNotificationItem> = ({
  icon,
  label,
  description,
  read,
}) => {
  return (
    <div className="flex items-start justify-between gap-[12px]">
      <div className="flex items-start gap-[12px]">
        <Badge dot={!read} color="#EC8368" dotSize={10}>
          <div className="flex size-[40px] items-center justify-center rounded-[8px] bg-orange1 p-[7px]">
            <img src={icon} className="size-full" />
          </div>
        </Badge>
        <div className="flex flex-col gap-[8px]">
          <div className="text-base font-semibold text-gray8">{label}</div>
          <div className="text-sm font-normal text-gray8">{description}</div>
        </div>
      </div>
      <ArrowLeftIcon className="rotate-180 text-gray6" />
    </div>
  );
};

export { NotificationList };

type TNotificationItem = {
  icon?: string;
  label?: string;
  description?: string;
  read?: boolean;
};
