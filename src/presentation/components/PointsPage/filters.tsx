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

const pointHistoryFilter = {
  all: {
    label: "Tất cả",
    value: "all",
  },
  collected: {
    label: "Tích điểm",
    value: "collected",
  },
  redeemed: {
    label: "Đổi điểm",
    value: "redeemed",
  },
};

export { pointHistoryFilter, FilterTab };
