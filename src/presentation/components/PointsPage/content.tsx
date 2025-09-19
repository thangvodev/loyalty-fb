import React from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { MissionTab } from "./mission-tab";
import { HistoryTab } from "./history-tab";
import { MemberCard } from "../common/member-cards";

const Content = () => {
  return (
    <div className="relative z-[10] flex w-full flex-col gap-[12px] px-[16px] pb-[20px]">
      <div
        className="fixed inset-x-0 -z-[10] h-[30px] bg-green6"
        style={{
          borderBottomLeftRadius: "200% 50px",
          borderBottomRightRadius: "200% 50px",
        }}
      />
      <MemberCard type="gold" />
      <Tabs
        defaultActiveKey="1"
        items={items}
        className="custom-tabs h-full"
        selectColor="#50C889"
        margin={12}
      />
    </div>
  );
};

export default Content;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-sm text-black">Tích điểm</div>,
    children: <MissionTab />,
  },
  {
    key: "2",
    label: <div className="text-sm text-black">Lịch sử</div>,
    children: <HistoryTab />,
  },
];
