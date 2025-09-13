import React from "react";
import VoucherImg from "../../static/images/voucher.jpg";
import CoinImg from "../../static/icons/coin-gold.svg";
import { Button } from "../common/button";

export const Voucher = () => {
  return (
    <div className="bg-orange2 flex flex-col gap-[14px] py-[16px]">
      <div className="flex justify-between px-[16px]">
        <div className="flex flex-col gap-[5px]">
          <div className="text-orange8 text-lg font-semibold leading-none">
            Voucher dành riêng cho bạn
          </div>
          <div className="text-sm font-normal">
            Giảm đến 30% các thương hiệu
          </div>
        </div>
        <div className="font-text-sm font-semibold text-gray6">Tất cả</div>
      </div>
      <div className="flex snap-x scroll-px-[16px] gap-[12px] overflow-auto px-[16px] hide-scrollbar">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex w-[164px] shrink-0 snap-start flex-col gap-[8.2px] overflow-hidden rounded-[12.3px] bg-white"
            style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
          >
            <img
              src={VoucherImg}
              alt=""
              className="h-[104.96px] w-full rounded-[7px] object-cover"
            />
            <div className="flex flex-col gap-[8.2px] px-[8.2px] pb-[12.3px]">
              <div className="flex flex-col gap-[4.1px]">
                <div className="text-base font-semibold">Giảm 50k sập sàn</div>
                <div className="text-xs font-normal text-gray6">
                  Cho hoá đơn trên 500k
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex h-[27px] items-center gap-[4px] rounded-[24px] bg-orange1 px-[6px]">
                  <div className="text-orange7 text-base font-semibold">
                    150
                  </div>
                  <img src={CoinImg} alt="" className="size-[16px]" />
                </div>
                <Button
                  text={
                    <div className="text-[12.3px] font-medium text-white">
                      Đổi quà
                    </div>
                  }
                  className="flex h-[27px] flex-none items-center justify-center rounded-[41px] bg-green6 px-[8px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
