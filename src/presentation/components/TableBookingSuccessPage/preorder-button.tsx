import React from "react";
import { Button } from "../common/button";

export const PreorderButton = () => {
  return (
    <Button
      text={<div className="text-base font-medium text-white">Đặt món</div>}
      className="flex h-[43px] flex-none items-center justify-center rounded-[12px] bg-green6"
      style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
    />
  );
};
