import React from "react";
import FoodImg from "../../static/images/food.png";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import CoinIcon from "../../static/icons/coin-gold.svg";

export const BookingDetails = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* Title */}
      <div className="flex flex-col gap-[8px] text-center">
        <div className="text-xl font-semibold">
          Cảm ơn bạn đã gửi thông tin đặt bàn
        </div>
        <div className="text-center text-sm font-normal text-gray7">
          Bàn của bạn sẽ được giữ trong khoảng 30p. Vui lòng đến đúng giờ.
        </div>
      </div>
      <div className="flex flex-col gap-[12px] rounded-[20px] border border-gray2 bg-[#FCFCFC] px-[20px] py-[16px]">
        {/* Title */}
        <div className="text-base font-semibold">Thông tin đặt bàn</div>
        {/* Booking details */}
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-gray7">Số người</div>
            <div className="text-sm font-medium">2</div>
          </div>
          <Divider className="m-0" />
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-gray7">Thời gian</div>
            <div className="text-sm font-medium">Hôm nay, 9:00</div>
          </div>
          <Divider className="m-0" />
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-gray7">Tên</div>
            <div className="text-sm font-medium">Anne</div>
          </div>
          <Divider className="m-0" />
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-gray7">Số điện thoại</div>
            <div className="text-sm font-medium">84343058495</div>
          </div>
          <Divider className="m-0" />
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-gray7">Email</div>
            <div className="text-sm font-medium">Anne1232@gmail.com</div>
          </div>
          <Divider className="m-0" />
        </div>
        {/* Title */}
        <div className="text-base font-semibold">Đặt món trước</div>
        {/* Item */}
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
        <Divider className="m-0" />
        {/* Item */}
        <div className="flex items-center justify-between gap-[20px]">
          <div className="flex items-center gap-[12px]">
            <div className="relative size-[48px] overflow-hidden rounded-[5.6px]">
              <div className="absolute right-0 top-0 flex size-[19.5px] items-center justify-center rounded-[3px] bg-orange1">
                <span className="text-xs font-bold text-orange7">x1</span>
              </div>
              <img src={FoodImg} alt="" className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="text-sm font-medium">Lẩu thái</div>
              <div className="text-xs font-normal text-gray6">Cay ít</div>
            </div>
          </div>
          <div className="text-sm font-medium text-gray8">
            {formatCurrency(170000)}
          </div>
        </div>
        <Divider dashed className="m-0" />
        {/* Price */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-normal">Đặt cọc trước</div>
            <div className="text-base font-medium text-gray8">
              {formatCurrency(200000)}
            </div>
          </div>
        </div>
        <Divider dashed className="m-0" />
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">Giảm giá</div>
          <div className="text-sm font-medium">Có trẻ em</div>
        </div>
      </div>
      {/* Bonus */}
      <div className="flex items-center justify-center gap-[4px] rounded-[8px] border border-orange3 bg-orange1 px-[8px] py-[10px]">
        <div className="text-xs font-medium text-orange9">
          Bạn được cộng thêm
        </div>
        <div className="flex items-center gap-[4px]">
          <div className="font-semibold text-[#694D17]">5,500</div>
          <img src={CoinIcon} alt="" className="size-[18px]" />
        </div>
      </div>
    </div>
  );
};
