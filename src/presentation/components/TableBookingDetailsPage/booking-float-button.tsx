import React from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

export const BookFloatButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[20] bg-white px-[16px] pb-[20px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
    >
      <Button
        text={<div className="text-base font-medium text-white">Đặt ngay</div>}
        className="flex h-[43px] w-full items-center justify-center rounded-[12px] bg-green6 px-[14px]"
        style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
        onClick={() => navigate("/table-booking-success")}
      />
    </div>
  );
};
