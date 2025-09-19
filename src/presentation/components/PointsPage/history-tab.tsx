import React, { FC } from "react";
import { Form } from "../common/form";
import { Radio } from "../common/radio";
import { FilterTab, pointHistoryFilter } from "./filters";
import { Divider } from "antd";
import MissionIcon from "../../static/icons/mission.svg";
import CoinIcon from "../../static/icons/coin-gold.svg";

const HistoryTab = () => {
  const [form] = Form.useForm();

  return (
    <div className="flex h-full flex-col gap-[16px]">
      <Form form={form}>
        <Form.Item name="status" noStyle>
          <Radio.ButtonGroup
            items={[
              pointHistoryFilter["all"],
              pointHistoryFilter["collected"],
              pointHistoryFilter["redeemed"],
            ]}
            render={(item) => <FilterTab active={false} label={item?.label} />}
            activeRender={(item) => (
              <FilterTab active={true} label={item?.label} />
            )}
            className="flex gap-[8px] overflow-auto hide-scrollbar"
            direction="row"
            itemFlex={false}
          />
        </Form.Item>
      </Form>
      <Divider className="m-0" />
      <div className="flex h-full flex-col gap-[20px] overflow-auto pb-[16px] pt-[4px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <React.Fragment key={index}>
            <HistoryItem
              icon={MissionIcon}
              missionLabel="Đăng ký tài khoản"
              missionId="#12324"
              type="redeemed"
              point={-24}
              timestamp="09:20, 27/07"
            />
            {index < 3 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const HistoryItem: FC<THistoryItem> = ({
  icon,
  missionLabel,
  missionId,
  point,
  timestamp,
  type,
}) => {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="size-[40px] shrink-0 overflow-hidden rounded-[40px]">
        <img src={icon} className="size-full" />
      </div>
      <div className="flex w-full flex-col">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-sm font-semibold">{types[type].label}</div>
          </div>
          <div
            className="flex items-center gap-[4px] rounded-[24px] px-[6px] py-[4px]"
            style={{ backgroundColor: types[type].pointBg }}
          >
            <div className="text-xs font-semibold text-[#694D17]">{point}</div>
            <img src={CoinIcon} alt="" className="size-[18px]" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs font-medium text-gray7">
              Hoàn thành nhiệm vụ
            </div>
            <div className="text-xs font-semibold">
              <span className="text-orange6">{missionLabel}</span>
              <span>{missionId}</span>
            </div>
          </div>
          <div className="text-[11px] font-medium text-gray6">{timestamp}</div>
        </div>
      </div>
    </div>
  );
};

export { HistoryTab };

type THistoryItem = {
  icon?: string;
  missionLabel?: string;
  missionId?: string;
  point?: number;
  type: "collected" | "redeemed";
  timestamp?: string;
};

const types = {
  collected: {
    label: "Tích điểm thành công",
    pointBg: "#FAF2EA",
  },
  redeemed: {
    label: "Đổi điểm thành công",
    pointBg: "#F2F2F2",
  },
};
