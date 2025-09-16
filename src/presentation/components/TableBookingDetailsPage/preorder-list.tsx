import React from "react";
import FoodImage from "../../static/images/food.png";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import AddCircleFilledIcon from "../icons/AddCircleFilledIcon";
import { PreorderItemSheet } from "./preorder-item-sheet";

export const PreorderList = () => {
  return (
    <div className="flex flex-col gap-[14px] px-[16px]">
      <div className="text-xl font-semibold">Lẩu</div>
      <div className="grid grid-cols-2 gap-[12px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <PreorderItemSheet key={index}>
            {({ open }) => (
              <div
                className="flex flex-col gap-[8px] overflow-hidden rounded-[12px] bg-white pb-[12px]"
                style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
                onClick={open}
              >
                <div className="relative h-[120px] overflow-hidden rounded-[14px]">
                  <div className="absolute right-[8px] top-[8px] flex size-[32px] items-center justify-center rounded-full border-[0.8px] border-gray2 bg-white">
                    <span className="text-base font-semibold text-gray8">
                      1
                    </span>
                  </div>
                  <img
                    src={FoodImage}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[4px] px-[10px]">
                  <div className="text-sm font-semibold">Lẩu dầu cay Mayla</div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-[4px]">
                      <div className="text-xs font-medium text-gray6">
                        Size S
                      </div>
                      <div className="text-sm font-semibold text-orange7">
                        {formatCurrency(50000)}
                      </div>
                    </div>
                    <Button.Icon
                      icon={
                        <AddCircleFilledIcon className="rounded-full bg-green6 text-white" />
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </PreorderItemSheet>
        ))}
      </div>
    </div>
  );
};
