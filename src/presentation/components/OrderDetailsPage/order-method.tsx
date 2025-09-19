import React, { FC } from "react";
import { orderMethod, TOrderMethod } from "../../constants/order-method";

export const OrderMethod: FC<Props> = ({ method = "tableOrder", data }) => {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="text-[15px] font-medium">Hình thức</div>
      <div className="flex items-center gap-[8px]">
        <img src={orderMethod[method].icon} alt="" className="size-[32px]" />
        <div className="text-sm font-medium text-neutral6">
          <span className="text-neutral8">{orderMethod[method].label}</span>
          <span>
            {data?.location
              ? `${data?.option} - ${data?.location}`
              : data?.option}
          </span>
        </div>
      </div>
    </div>
  );
};

type Props = {
  method?: TOrderMethod;
  data?: {
    option: string;
    location?: string | null;
  };
};
