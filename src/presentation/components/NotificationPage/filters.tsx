import clsx from "clsx";
import React, { FC } from "react";

const FilterTab: FC<{ active: boolean; label: React.ReactNode }> = ({
  active,
  label,
}) => {
  return (
    <div
      className={clsx(
        "flex h-[33px] items-center justify-center rounded-[40px] bg-gray2 px-[12px]",
        {
          "!bg-green6": active,
        },
      )}
    >
      <span
        className={clsx("whitespace-nowrap text-sm font-medium text-gray8", {
          "!text-white": active,
        })}
      >
        {label}
      </span>
    </div>
  );
};

const notificationFilter = {
  all: {
    label: "Tất cả",
    value: "all",
  },
  order: {
    label: "Đơn hàng",
    value: "collected",
  },
  redeemPoint: {
    label: "Đổi quà",
    value: "redeemed",
  },
  collectPoint: {
    label: "Tích điểm",
    value: "collectPoint",
  },
};

export { notificationFilter, FilterTab };
