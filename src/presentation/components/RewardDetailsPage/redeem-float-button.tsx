import React, { FC } from "react";
import { Button } from "../common/button";
import CoinIcon from "../../static/icons/coin-gold.svg";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const RedeemFloatButton: FC<Props> = ({
  isRedeemed,
  loading,
  isCollected,
}) => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[20] bg-white px-[16px] pb-[20px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
    >
      {!isRedeemed ? (
        <Button
          text={
            <div className="flex items-center gap-[8px]">
              <div className="text-base font-medium text-white">Đổi với</div>
              <div className="flex items-center gap-[4px]">
                <div className="text-base font-semibold text-yellow5">150</div>
                <img src={CoinIcon} alt="" className="size-[16px]" />
              </div>
            </div>
          }
          className="flex h-[43px] w-full items-center justify-center rounded-[12px] bg-green6 px-[14px]"
          style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
        />
      ) : !isCollected ? (
        <Button
          text={
            <div className="text-base font-medium text-white">Thu thập</div>
          }
          className="flex h-[43px] w-full items-center justify-center rounded-[12px] bg-green6 px-[14px]"
          style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
          loading={loading}
          loadingRender={
            <Button
              text={
                <div className="flex items-center gap-[12px]">
                  <div className="text-base font-medium text-white">
                    Đang thu thập
                  </div>
                  <Spin
                    indicator={<LoadingOutlined spin className="text-white" />}
                  />
                </div>
              }
              className="flex h-[43px] w-full items-center justify-center rounded-[12px] bg-green6 px-[14px]"
              style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
            />
          }
        />
      ) : (
        <Button
          text={
            <div className="text-base font-medium text-white">Dùng ngay</div>
          }
          className="flex h-[43px] w-full items-center justify-center rounded-[12px] bg-green6 px-[14px]"
          style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
        />
      )}
    </div>
  );
};

type Props = {
  loading?: boolean;
  isRedeemed?: boolean;
  isCollected?: boolean;
};
