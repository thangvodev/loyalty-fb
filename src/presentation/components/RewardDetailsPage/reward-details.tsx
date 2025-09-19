import { Divider } from "antd";
import React, { FC } from "react";
import HadilaoLogo from "../../static/images/hadilao-logo.png";
import ClockIcon from "../icons/ClockIcon";
import { RewardCode } from "./reward-code";

export const RewardDetails: FC<Props> = ({ isCollected }) => {
  return (
    <div className="relative z-[10] -mt-[30px] flex flex-col gap-[12px] px-[16px] pb-[25px]">
      {/* Title */}
      <div
        className="flex flex-col gap-[14px] overflow-hidden rounded-[8px] bg-white py-[8px]"
        style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
      >
        <div className="flex flex-col items-center px-[12px]">
          <div className="text-[22px] font-semibold">Giảm 100k sập sàn</div>
          <div className="text-sm font-medium text-gray6">
            Cho hoá đơn trên 500k
          </div>
        </div>
        {isCollected ? <RewardCode /> : null}
        <div className="relative">
          <div className="absolute left-0 top-0 size-[11.6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F8F8]" />
          <div className="absolute right-0 top-0 size-[11.6px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#F8F8F8]" />
          <Divider dashed className="m-0" />
        </div>
        <div className="flex items-center justify-between px-[12px]">
          <div className="flex items-center gap-[8px]">
            <img src={HadilaoLogo} alt="" className="size-[28px]" />
            <div className="text-xs font-medium">Hadilao</div>
          </div>
          <div className="flex items-center gap-[4px]">
            <ClockIcon className="size-[18px] text-red6" />
            <div className="text-xs font-normal text-red6">
              Hạn sử dụng: 22/07/2024
            </div>
          </div>
        </div>
      </div>
      {/* Policies */}
      <div
        className="flex flex-col gap-[4px] rounded-[12px] bg-white p-[12px]"
        style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      >
        <div className="text-lg font-semibold">Điều khoản</div>
        <ul className="list-disc pl-[25px]">
          <li>Áp dụng cho hóa đơn từ 500.000đ trở lên.</li>
          <li>Chỉ áp dụng tại Haidilao khi thanh toán bằng thẻ Techcombank.</li>
          <li>Giảm ngay 100.000đ vào tổng hóa đơn.</li>
          <li>Không áp dụng đồng thời với ưu đãi khác.</li>
          <li>
            Mỗi khách hàng sử dụng 1 lần duy nhất trong thời gian khuyến mãi.
          </li>
        </ul>
      </div>
      {/* Tutorial */}
      <div
        className="flex flex-col gap-[4px] rounded-[12px] bg-white p-[12px]"
        style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      >
        <div className="text-lg font-semibold">Cách dùng</div>
        <ul className="list-disc pl-[25px]">
          <li>
            Chọn voucher: Mở ứng dụng và nhấn “Thu thập” voucher Haidilao giảm
            100.000đ.
          </li>
          <li>
            Đến nhà hàng Haidilao: Áp dụng tại tất cả chi nhánh Haidilao trên
            toàn quốc.
          </li>
          <li>
            Gọi món như bình thường: Đảm bảo tổng hóa đơn của bạn từ 500.000đ
            trở lên.
          </li>
          <li>
            Thanh toán bằng thẻ Techcombank: Chỉ áp dụng cho thanh toán qua thẻ
            Techcombank (bao gồm cả thẻ ghi nợ và tín dụng).
          </li>
        </ul>
      </div>
    </div>
  );
};

type Props = {
  isCollected?: boolean;
};
