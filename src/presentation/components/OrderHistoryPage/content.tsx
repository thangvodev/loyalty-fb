import React, { useEffect, useState } from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { TableOrderTab } from "./table-order-tab";
import { DeliveryOrderTab } from "./delivery-order-tab";
import { TableBookingTab } from "./table-booking-tab";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("2");

  const tabParam = searchParams.get("tab");

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      className="custom-tabs h-full pt-[8px]"
      selectColor="#50C889"
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
      margin={14}
    />
  );
};

export default Content;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-sm text-black">Đặt món tại bàn</div>,
    children: <TableOrderTab />,
  },
  {
    key: "2",
    label: <div className="text-sm text-black">Giao hàng</div>,
    children: <DeliveryOrderTab />,
  },
  {
    key: "3",
    label: <div className="text-sm text-black">Đặt bàn</div>,
    children: <TableBookingTab />,
  },
];
