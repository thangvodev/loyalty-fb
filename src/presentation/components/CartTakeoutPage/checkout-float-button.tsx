import React from "react";
import SaleTicket from "../../static/icons/sale-ticket.svg";
import ChevronIcon from "../icons/ChevronIcon";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import ZaloLogo from "../../static/images/zalo-logo.png";

export const CheckoutFloatButton = () => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 flex flex-col gap-[12px] bg-white px-[18px] pb-[20px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <img src={SaleTicket} />
          <div className="text-[15px] font-normal text-gray8">
            Áp dụng giảm giá
          </div>
        </div>
        <ChevronIcon className="size-[12px] text-gray6" />
      </div>
      <Divider dashed className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray8">Tổng tiền</div>
        <div className="text-xl font-semibold">{formatCurrency(320000)}</div>
      </div>
      <div className="flex items-center gap-[12px]">
        <img src={ZaloLogo} alt="" className="size-[24px] object-cover" />
        <div className="text-base font-medium text-gray9">Zalopay</div>
      </div>
      <Button
        text={
          <div className="text-base font-medium text-white">Thanh toán</div>
        }
        style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
        className="flex h-[43px] flex-none items-center justify-center rounded-[12px] bg-green6 px-[14px]"
      />
    </div>
  );
};
