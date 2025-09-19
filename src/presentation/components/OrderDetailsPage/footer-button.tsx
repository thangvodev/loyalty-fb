import React, { FC } from "react";
import { TOrderStatus } from "../../constants/order-status";
import { Button } from "../common/button";
import { CancelConfirmSheet } from "./cancel-confirm-sheet";
import { TOrderMethod } from "../../constants/order-method";

export const FooterButton: FC<Props> = ({ status, method }) => {
  switch (status) {
    case "completed":
      if (method === "takeoutOrder") {
        return null;
      }

      return (
        <Button
          text={<div className="text-base font-medium text-white">Đặt lại</div>}
          className="h-[43px] flex-none rounded-[12px] bg-green6"
          style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
        />
      );

    case "confirming":
      return (
        <CancelConfirmSheet>
          {({ open }) => (
            <Button
              text={
                <div className="text-base font-medium text-red6">Hủy đơn</div>
              }
              className="h-[48px] flex-none rounded-[12px] bg-red1"
              onClick={open}
            />
          )}
        </CancelConfirmSheet>
      );

    case "pendingDelivery":
      if (method === "takeoutOrder") {
        return (
          <CancelConfirmSheet>
            {({ open }) => (
              <Button
                text={
                  <div className="text-base font-medium text-red6">Hủy đơn</div>
                }
                className="h-[48px] flex-none rounded-[12px] bg-red1"
                onClick={open}
              />
            )}
          </CancelConfirmSheet>
        );
      }
      return null;

    case "canceled":
      return (
        <Button
          text={<div className="text-base font-medium text-white">Đặt lại</div>}
          className="h-[43px] flex-none rounded-[12px] bg-green6"
          style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
        />
      );

    default:
      return null;
  }
};

type Props = {
  status?: TOrderStatus;
  method?: TOrderMethod;
};
