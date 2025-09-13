import React from "react";
import { OrderFloatButton } from "./order-float-button";
import { DeliveryInfo } from "./delivery-info";
import { OrderSummary } from "./order-summary";
import { PaymentMethod } from "./payment-method";

const Content = () => {
  return (
    <div className="relative flex w-full flex-col gap-[12px] pb-[100px]">
      <DeliveryInfo />
      <OrderSummary />
      <PaymentMethod />
      <OrderFloatButton />
    </div>
  );
};

export default Content;
