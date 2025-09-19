import React, { FC } from "react";
import { orderStatus, TOrderStatus } from "../../constants/order-status";
import ClockIcon from "../icons/ClockIcon";
import NoteIcon from "../icons/NoteIcon";

export const OrderStatus: FC<Props> = ({ status = "confirming", data }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-[12px]">
        <div className="text-base font-semibold">
          {orderStatus[status].label}
        </div>
        <div className="flex items-center gap-[4px]">
          <ClockIcon className="size-[18px] text-neutral6" />
          <div className="text-sm font-medium text-neutral6">
            Đã đặt hàng: 06:00, 12/05/2025
          </div>
        </div>
        {status === "canceled" && (
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[8px]">
              <div className="text-sm font-medium text-neutral8">
                Lí do hủy:
              </div>
              <div className="flex h-[22px] items-center justify-center rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
                {data?.reason}
              </div>
            </div>
            <div className="flex gap-[4px]">
              <NoteIcon className="size-[20px] shrink-0 text-gray6" />
              <div className="text-xs font-normal text-gray7">
                <span className="text-gray8">Ghi chú: </span>
                {data?.notes}
              </div>
            </div>
          </div>
        )}
      </div>
      {orderStatus[status].icon}
    </div>
  );
};

type Props = {
  status?: TOrderStatus;
  data?: {
    reason: string;
    notes: string;
  };
};
