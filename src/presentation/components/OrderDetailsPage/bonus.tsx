import React, { FC } from "react";
import CoinIcon from "../../static/icons/coin-gold.svg";
import { TOrderStatus } from "../../constants/order-status";
import { TOrderMethod } from "../../constants/order-method";

const Bonus = () => {
  return (
    <div className="flex items-center justify-between rounded-[8px] border border-orange3 bg-orange1 px-[8px] py-[10px]">
      <div className="text-xs font-medium text-orange9">Điểm tích luỹ</div>
      <div className="flex items-center gap-[4px]">
        <div className="font-semibold text-[#694D17]">+ 5,500</div>
        <img src={CoinIcon} alt="" className="size-[18px]" />
      </div>
    </div>
  );
};

const BonusRender: FC<Props> = ({ method, status }) => {
  switch (method) {
    case "takeoutOrder":
      return null;

    case "tableOrder":
      return <Bonus />;

    case "deliveryOrder":
      if (status === "completed") {
        return <Bonus />;
      }
      if (status === "confirming") {
        return <Bonus />;
      }
      if (status === "pendingDelivery" || status === "canceled") {
        return null;
      }
      return null;

    default:
      return null;
  }
};

export { BonusRender };

type Props = {
  status?: TOrderStatus;
  method?: TOrderMethod;
};
