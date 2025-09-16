import React from "react";
import { OrderFloatButton } from "./order-float-button";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { OrderingList } from "./ordering-list";
import { OrderedList } from "./ordered-list";
import { CheckoutFloatButton } from "./checkout-float-button";

const Content = () => {
  return (
    <div className="relative">
      <Tabs
        defaultActiveKey="1"
        items={items}
        className="custom-tabs pt-[8px]"
        selectColor="#50C889"
      />
    </div>
  );
};

export default Content;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-sm text-black">Món đang chọn</div>,
    children: (
      <>
        <OrderingList />
        <OrderFloatButton />
      </>
    ),
  },
  {
    key: "2",
    label: <div className="text-sm text-black">Món đã gọi</div>,
    children: (
      <>
        <OrderedList />
        <CheckoutFloatButton />
      </>
    ),
  },
];
