import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { PreorderList } from "./preorder-list";
import { CloseOutlined } from "@ant-design/icons";
import { PreorderFilter } from "./preorder-filter";
import { PreorderSearchBar } from "./preorder-search-bar";

const PreorderSheet: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [currentSelect, setCurrentSelect] = useState<number>(0);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative px-[16px] pb-[12px]">
                <div className="text-left text-xl font-semibold">Thêm món</div>
                <div
                  className="absolute right-[14px] top-0 flex size-[23.66px] items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="text-gray6" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{
            background: "#FFFFFF",
            padding: "24px 0 ",
            borderRadius: "24px 24px 0 0",
          }}
          afterClose={() => {
            form.resetFields();
          }}
        >
          <div className="flex flex-col gap-[14px] overflow-auto pb-[75px]">
            <PreorderSearchBar />
            <PreorderFilter
              currentSelect={currentSelect}
              onChange={setCurrentSelect}
            />
            <PreorderList />
            {/* Footer */}
            <div
              className="fixed inset-x-0 bottom-0 z-20 bg-white px-[16px] pb-[20px] pt-[12px]"
              style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
            >
              <Button
                text={
                  <div className="text-base font-medium text-white">
                    Thêm món đặt trước
                  </div>
                }
                className="flex h-[43px] w-full items-center justify-center rounded-[12px] bg-green6 px-[14px]"
                style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
              />
            </div>
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { PreorderSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const spicyOptions = [
  {
    label: "Cay ít",
    price: 10000,
    value: 1,
  },
  {
    label: "Cay vừa",
    price: 10000,
    value: 2,
  },
  {
    label: "Cay tê",
    price: 10000,
    value: 3,
  },
];

const foodInfo = {
  name: "Lẩu dầu cay Mayla",
  price: 50000,
  options: spicyOptions,
};
