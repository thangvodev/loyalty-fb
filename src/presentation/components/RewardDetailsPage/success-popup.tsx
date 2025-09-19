import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { createPortal } from "react-dom";
import { CloseOutlined } from "@ant-design/icons";
import CoinIcon from "../../static/icons/coin-gold.svg";
import { Divider } from "antd";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

export const SuccessPopup: FC<Props> = ({ open, onClose }) => {
  return (
    <>
      {createPortal(
        <Modal
          visible={open}
          onClose={onClose}
          modalStyle={{
            zIndex: 50,
            margin: "0 12px 91px",
            padding: "14px 12px",
            width: "100%",
            height: "fit-content",
            borderRadius: "8px",
            boxShadow: "0px 4px 24px 0px #BABABA1F",
            background: "#659CE0",
          }}
          mask={false}
          className="bottom-modal"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <CheckMarkIcon className="size-[20px] text-white" />
              <div className="text-sm font-normal text-white">
                Đã lưu vào “Ưu đãi đã đổi”
              </div>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="text-sm font-semibold text-white">Xem</div>
              <ArrowLeftIcon className="size-[12px] rotate-180 text-white" />
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

type Props = {
  open?: boolean;
  onClose?: () => void;
};
