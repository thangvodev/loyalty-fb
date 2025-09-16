import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import { Modal } from "zmp-ui";

const RemoveItemPopup: FC<Props & { onAccept: () => void; item: any }> = ({
  children,
  onAccept,
  item,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleAccept() {
    onAccept();
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          verticalActions
          zIndex={9999}
          maskClassName="!z-[9999]"
        >
          <div className="flex flex-col gap-[12px] px-[18px] py-[24px]">
            <div className="text-center">
              <span className="text-base font-normal">
                Bạn muốn xoá món{" "}
                <span className="font-semibold">"{item.title}"</span> ra khỏi{" "}
                <span className="font-semibold">Món đang chọn</span>?
              </span>
            </div>
            <div className="flex gap-[10px]">
              <Button
                text={<div className="text-sm font-medium text-gray7">Hủy</div>}
                className="rounded-[4px] px-3 py-[7px]"
                onClick={handleCancel}
              />
              <Button
                text={<div className="text-sm font-medium text-red5">Xóa</div>}
                className="rounded-[4px] px-3 py-[7px]"
                onClick={handleAccept}
              />
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

export { RemoveItemPopup };
