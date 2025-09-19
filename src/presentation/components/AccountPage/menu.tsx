import React from "react";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import ChevronIcon from "../icons/ChevronIcon";
import ShareIcon from "../icons/ShareIcon";
import UserMenuFilledIcon from "../icons/UserMenuFilledIcon";
import OrderMenuFilledIcon from "../icons/OrderMenuFilledIcon";
import { SharePopup } from "./share-popup";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[14px] p-[16px]">
      <div
        className="flex items-center justify-between"
        onClick={() => navigate("/profile")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[40px] items-center justify-center rounded-full bg-green6">
            <UserMenuFilledIcon className="text-white" />
          </div>
          <div className="text-sm font-medium">Thông tin tài khoản</div>
        </div>
        <ChevronIcon className="size-[16px]" />
      </div>
      <Divider className="m-0" />
      <div
        className="flex items-center justify-between"
        onClick={() => navigate("/order-history")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[40px] items-center justify-center rounded-full bg-orange5">
            <OrderMenuFilledIcon className="text-white" />
          </div>
          <div className="text-sm font-medium">Đơn hàng</div>
        </div>
        <ChevronIcon className="size-[16px]" />
      </div>
      <Divider className="m-0" />
      <SharePopup>
        {({ open }) => (
          <div className="flex items-center justify-between" onClick={open}>
            <div className="flex items-center gap-[12px]">
              <div className="flex size-[40px] items-center justify-center rounded-full bg-purple5">
                <ShareIcon className="text-white" />
              </div>
              <div className="text-sm font-medium">Chia sẻ ứng dụng</div>
            </div>
            <ChevronIcon className="size-[16px]" />
          </div>
        )}
      </SharePopup>
    </div>
  );
};

export { Menu };
