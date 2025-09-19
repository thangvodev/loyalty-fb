import { TabsProps } from "antd";
import React from "react";
import { Tabs } from "../common/tabs";
import { SearchBar } from "./search-bar";
import { RewardsList } from "./rewards-list";

const Content = () => {
  return (
    <div className="flex h-full flex-col gap-[14px] pt-[14px]">
      <SearchBar />
      <div className="min-h-0">
        <Tabs
          defaultActiveKey="1"
          items={items}
          className="custom-tabs h-full"
          selectColor="#50C889"
        />
      </div>
    </div>
  );
};

export default Content;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-sm text-black">Ưu đãi</div>,
    children: <RewardsList status="redeemable" />,
  },
  {
    key: "2",
    label: <div className="text-sm text-black">Đã đổi</div>,
    children: <RewardsList status="redeemed" />,
  },
  {
    key: "3",
    label: <div className="text-sm text-black">Đã dùng</div>,
    children: <RewardsList status="used" />,
  },
];
