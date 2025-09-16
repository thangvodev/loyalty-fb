import React from "react";
import { Button } from "../common/button";
import ShoppingBagFilledIcon from "../icons/ShoppingBagFilledIcon";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

export const CartFloatButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-x-0 bottom-0 bg-white px-[16px] pb-[20px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
    >
      <Button
        text={
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <ShoppingBagFilledIcon className="text-white" />
              <div className="text-sm font-medium text-white">SL: 2</div>
            </div>
            <div className="text-xl font-medium text-white">
              {formatCurrency(120000)}
            </div>
          </div>
        }
        className="flex h-[48px] w-full items-center justify-center rounded-[12px] bg-green6 px-[14px]"
        style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
        onClick={() => navigate("/cart-takeout")}
      />
    </div>
  );
};
