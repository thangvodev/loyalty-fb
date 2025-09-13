import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import LocationIcon from "../icons/LocationIcon";
import ChevronIcon from "../icons/ChevronIcon";
import { useNavigate } from "react-router-dom";
import { DeliveryMethod, TRestaurant } from "./delivery-method";

export const DeliveryInfo = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<TRestaurant>();

  useEffect(() => {
    setRestaurant({
      name: "Hadilao 3/2",
      location: "284/12/3 Lý Thường Kiệt",
    });
  }, []);

  return (
    <div
      className="flex flex-col gap-[12px] bg-white px-[16px] py-[14px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="flex flex-col gap-[8px]">
        <div className="text-xs font-semibold text-gray7">
          Thông tin giao hàng
        </div>
        <Divider className="m-0" />
      </div>
      <div
        className="flex items-start justify-between"
        onClick={() => navigate("/user-delivery-details")}
      >
        <div className="flex items-start gap-[12px]">
          <div className="flex size-[32px] items-center justify-center rounded-[6.4px] bg-orange1 p-[6.4px]">
            <LocationIcon className="text-orange6" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[8px]">
              <div className="text-sm font-semibold">Anne</div>
              <div className="text-xs font-normal text-gray6">
                (+8432435435)
              </div>
            </div>
            <div className="text-xs font-medium text-gray7">
              284/12/3 Lý Thường Kiệt
            </div>
            <div className="text-[11px] font-normal text-gray6">
              P14, Q.10, Hồ Chí Minh
            </div>
          </div>
        </div>
        <ChevronIcon className="size-[12px] text-gray6" />
      </div>
      <Divider className="m-0" />
      <DeliveryMethod method="Tự đến lấy" restaurant={restaurant} />
    </div>
  );
};
