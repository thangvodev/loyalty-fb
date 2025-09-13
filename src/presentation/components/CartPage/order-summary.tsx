import { Divider } from "antd";
import React from "react";
import ProductImage from "../../static/images/food.png";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import AddCircleIcon from "../icons/AddCircleIcon";
import SaleIcon from "../../static/icons/sale-ticket.svg";
import clsx from "clsx";
import ChevronIcon from "../icons/ChevronIcon";
import { PromoCodeSheet } from "./promo-code-sheet";

export const OrderSummary = () => {
  return (
    <div
      className="flex flex-col gap-[12px] bg-white px-[16px] pb-[14px] pt-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      {/* Title */}
      <div className="flex flex-col gap-[8px]">
        <div className="text-xs font-semibold text-gray7">
          Tóm tắt giao hàng
        </div>
        <Divider className="m-0" />
      </div>
      {/* Item list */}
      <div className="flex flex-col gap-[12px]">
        {/* Item */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="relative size-[48px] overflow-hidden rounded-[5.6px]">
              <img
                src={ProductImage}
                alt=""
                className="size-full object-cover"
              />
              <div className="absolute right-0 top-0 flex size-[19.5px] items-center justify-center rounded-[3px] bg-orange1">
                <span className="text-xs font-bold text-orange7">x1</span>
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="text-sm font-medium">Lẩu dầu cay Mayla</div>
              <div className="text-xs font-normal text-gray6">Cay ít</div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px] text-center">
            <div className="text-base font-semibold text-gray9">
              {formatCurrency(150000)}
            </div>
            <div className="flex items-center gap-[12px]">
              <Button.Icon
                icon={
                  <MinusCircleIcon
                    className={clsx("size-[24px] text-gray4", {})}
                  />
                }
              />
              <div className="text-lg font-semibold">1</div>
              <Button.Icon
                icon={<AddCircleIcon className="size-[24px] text-green6" />}
              />
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        {/* Item */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="relative size-[48px] overflow-hidden rounded-[5.6px]">
              <img
                src={ProductImage}
                alt=""
                className="size-full object-cover"
              />
              <div className="absolute right-0 top-0 flex size-[19.5px] items-center justify-center rounded-[3px] bg-orange1">
                <span className="text-xs font-bold text-orange7">x1</span>
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="text-sm font-medium">Lẩu thái</div>
              <div className="text-xs font-normal text-gray6">Cay ít</div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px] text-center">
            <div className="text-base font-semibold text-gray9">
              {formatCurrency(170000)}
            </div>
            <div className="flex items-center gap-[12px]">
              <Button.Icon
                icon={
                  <MinusCircleIcon
                    className={clsx("size-[24px] text-gray4", {})}
                  />
                }
              />
              <div className="text-lg font-semibold">1</div>
              <Button.Icon
                icon={<AddCircleIcon className="size-[24px] text-green6" />}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Recommendations */}
      <div className="flex flex-col gap-[8px]">
        <div className="text-xs font-semibold text-gray7">
          Thường được đặt cùng với
        </div>
        <div className="flex snap-x gap-[12px] overflow-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 snap-start items-center gap-[12px] rounded-[10px] border border-gray1 bg-white p-[6px]"
              style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
            >
              <img
                src={ProductImage}
                alt=""
                className="size-[40px] rounded-[7px] object-cover"
              />
              <div className="flex w-[149px] flex-col gap-[4px]">
                <div className="text-sm font-medium">Lẩu dầu cay Mayla</div>
                <div className="text-xs font-medium text-gray6">
                  {formatCurrency(50000)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider className="m-0" />
      {/* Apply discount */}
      <PromoCodeSheet>
        {({ open }) => (
          <div className="flex items-center justify-between" onClick={open}>
            <div className="flex items-center gap-[8px]">
              <img src={SaleIcon} alt="" />
              <div className="text-[15px] font-normal text-gray8">
                Áp dụng giảm giá
              </div>
            </div>
            <ChevronIcon className="size-[12px] text-gray6" />
          </div>
        )}
      </PromoCodeSheet>
      <Divider dashed className="m-0" />
      {/* Total */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-normal">Tổng tiền</div>
            <div className="text-[15px] font-medium">
              {formatCurrency(320000)}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-normal text-gray6">Giảm giá</div>
            <div className="text-sm font-normal text-gray6">
              {formatCurrency(-70000)}
            </div>
          </div>
        </div>
        <Divider dashed className="m-0" />
        <div className="flex items-center justify-between">
          <div className="text-[15px] font-normal">Tổng thanh toán</div>
          <div className="text-base font-semibold">
            {formatCurrency(250000)}
          </div>
        </div>
      </div>
    </div>
  );
};
