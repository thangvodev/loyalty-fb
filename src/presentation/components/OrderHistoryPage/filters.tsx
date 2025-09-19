import clsx from "clsx";
import React, { FC } from "react";

const FilterTab: FC<{ active: boolean; label: React.ReactNode }> = ({
  active,
  label,
}) => {
  return (
    <div
      className={clsx(
        "flex h-[26px] items-center justify-center rounded-[40px] bg-gray2 px-[12px]",
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

const orderStatusFilter = {
  all: {
    label: "Tất cả",
    value: "all",
  },
  confirming: {
    label: "Chờ xác nhận",
    value: "confirming",
  },
  completed: {
    label: "Hoàn thành",
    value: "completed",
  },
  pendingDelivery: {
    label: "Chờ giao hàng",
    value: "pendingDelivery",
  },
  canceled: {
    label: "Huỷ",
    value: "canceled",
  },
  notArrived: {
    label: "Chưa tới",
    value: "notArrived",
  },
};

export { orderStatusFilter, FilterTab };
