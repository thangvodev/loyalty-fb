import React, { FC } from "react";
import { Radio } from "../common/radio";
import { FilterTab, orderStatusFilter } from "./filters";
import { Form } from "../common/form";
import { orderStatus, TOrderStatus } from "../../constants/order-status";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import CalendarIcon from "../icons/CalendarIcon";
import UserOutlineIcon from "../icons/UserOutlineIcon";
import PhoneOutlineIcon from "../icons/PhoneOutlineIcon";

const TableBookingTab = () => {
  const [form] = Form.useForm();

  return (
    <div className="flex h-full flex-col gap-[14px]">
      <Form form={form}>
        <Form.Item name="status" noStyle>
          <Radio.ButtonGroup
            items={[
              orderStatusFilter["all"],
              orderStatusFilter["notArrived"],
              orderStatusFilter["completed"],
              orderStatusFilter["canceled"],
            ]}
            render={(item) => <FilterTab active={false} label={item?.label} />}
            activeRender={(item) => (
              <FilterTab active={true} label={item?.label} />
            )}
            className="flex gap-[8px] overflow-auto px-[16px] hide-scrollbar"
            direction="row"
            itemFlex={false}
          />
        </Form.Item>
      </Form>
      <div className="flex h-full flex-col gap-[14px] overflow-auto px-[16px] pb-[16px]">
        <TableBookingItem status="notArrived" />
        <TableBookingItem status="completed" />
        <TableBookingItem status="canceled" />
      </div>
    </div>
  );
};

const TableBookingItem: FC<{ status: TOrderStatus }> = ({ status }) => {
  return (
    <div
      className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[8px]">
          <div className="text-base font-semibold">Anne P.</div>
          <div className="flex items-center gap-[8px]">
            <CalendarIcon className="size-[20px] text-gray7" />
            <div className="text-sm font-medium">
              Lịch hẹn: 9:00, 20/07/2025
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <UserOutlineIcon className="size-[20px] text-gray7" />
            <div className="text-sm font-medium">2 người</div>
          </div>
          <div className="flex items-center gap-[8px]">
            <PhoneOutlineIcon className="size-[20px] text-gray7" />
            <div className="text-sm font-medium">0934858435</div>
          </div>
        </div>
        {orderStatus[status].render({ active: true })}
      </div>
      <Divider className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-gray6">Món đặt trước</div>
        <div className="text-sm font-medium">
          1x Lẩu cay Mayla, 1 x Lẩu thái
        </div>
      </div>
      <Divider dashed className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-normal text-gray6">
          Đặt lúc 12:00, 05/07/2024
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="text-xs font-medium text-gray6">Tổng tiền</div>
          <div className="text-base font-semibold">
            {formatCurrency(320000)}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TableBookingTab };
