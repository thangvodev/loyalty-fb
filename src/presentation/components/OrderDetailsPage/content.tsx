import React from "react";
import { OrderStatus } from "./order-status";
import { OrderMethod } from "./order-method";
import { Divider } from "antd";
import { CustomerInformation } from "./customer-info";
import { PaymentInformation } from "./payment-info";
import { ProductList } from "./product-list";
import { BonusRender } from "./bonus";
import { FooterButton } from "./footer-button";
import { TOrderStatus } from "../../constants/order-status";
import { TOrderMethod } from "../../constants/order-method";

const status: TOrderStatus = "confirming";
const method: TOrderMethod = "deliveryOrder";
const methodData = {
  option: "Lấy ngay",
  location: "Hadilao 3/2",
};
const canceledData = {
  reason: "Hết nhu cầu",
  notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
};

const Content = () => {
  return (
    <div className="flex flex-col gap-[14px] p-[12px]">
      <div className="flex flex-col gap-[12px]">
        <OrderStatus status={status} data={canceledData} />
        <Divider dashed className="m-0" />
        <OrderMethod method={method} data={methodData} />
      </div>
      <div className="flex flex-col gap-[12px]">
        <CustomerInformation />
        <PaymentInformation />
      </div>
      <ProductList />
      <BonusRender status={status} method={method} />
      <FooterButton status={status} method={method} />
    </div>
  );
};

export default Content;
