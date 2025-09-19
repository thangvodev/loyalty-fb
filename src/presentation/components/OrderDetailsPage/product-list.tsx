import React from "react";
import FoodImg from "../../static/images/food.png";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";

export const ProductList = () => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-gray2 bg-[#FCFCFC] px-[20px] py-[16px]">
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center justify-between gap-[20px]">
            <div className="flex items-center gap-[12px]">
              <div className="relative size-[48px] overflow-hidden rounded-[5.6px]">
                <div className="absolute right-0 top-0 flex size-[19.5px] items-center justify-center rounded-[3px] bg-orange1">
                  <span className="text-xs font-bold text-orange7">x1</span>
                </div>
                <img src={FoodImg} alt="" className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-sm font-medium">Lẩu dầu cay Mayla</div>
                <div className="text-xs font-normal text-gray6">Cay ít</div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray8">
              {formatCurrency(150000)}
            </div>
          </div>
          {index < 1 ? <Divider className="m-0" /> : null}
        </React.Fragment>
      ))}
      <Divider dashed className="m-0" />
      {/* Price */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <div className="text-[15px] font-normal">Tổng tiền</div>
          <div className="text-base font-medium text-gray8">
            {formatCurrency(320000)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm font-normal text-gray7">Giảm giá</div>
          <div className="text-sm font-normal text-gray7">
            {formatCurrency(-70000)}
          </div>
        </div>
      </div>
      <Divider dashed className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-[15px] font-normal">Tổng thanh toán</div>
        <div className="text-base font-semibold">{formatCurrency(250000)}</div>
      </div>
    </div>
  );
};
