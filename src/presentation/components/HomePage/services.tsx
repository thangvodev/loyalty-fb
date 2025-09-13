import React from "react";
import BellIcon from "../../static/icons/bell-add.svg";
import DeliveryIcon from "../../static/icons/delivery.svg";
import OrderIcon from "../../static/icons/order.svg";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[14px] px-[16px]">
      <div className="text-xl font-semibold">Dịch vụ</div>
      <div className="flex gap-[20px]">
        {/* Service */}
        <div className="flex flex-1 flex-col items-center gap-[10px]">
          <div
            className="flex h-[72px] w-full items-center justify-center rounded-[13.5px] bg-[#FAF2EA]"
            style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
          >
            <img src={BellIcon} alt="" className="size-[45px]" />
          </div>
          <div className="text-sm font-semibold text-gray8">Đặt món</div>
        </div>
        {/* Service */}
        <div className="flex flex-1 flex-col items-center gap-[10px]">
          <div
            className="flex h-[72px] w-full items-center justify-center rounded-[13.5px] bg-[#FAF2EA]"
            style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
          >
            <img src={DeliveryIcon} alt="" className="size-[45px]" />
          </div>
          <div className="text-sm font-semibold text-gray8">Giao hàng</div>
        </div>
        {/* Service */}
        <div
          className="flex flex-1 flex-col items-center gap-[10px]"
          onClick={() => navigate("table-booking")}
        >
          <div
            className="flex h-[72px] w-full items-center justify-center rounded-[13.5px] bg-[#FAF2EA]"
            style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
          >
            <img src={OrderIcon} alt="" className="size-[45px]" />
          </div>
          <div className="text-sm font-semibold text-gray8">Đặt bàn</div>
        </div>
      </div>
    </div>
  );
};
