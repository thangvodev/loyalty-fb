import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { CloseOutlined } from "@ant-design/icons";
import { Select } from "../common/select";
import { Input } from "antd";

const CancelConfirmSheet: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = (value: any) => {
    setVisible(false);
  };

  const initialValues = {
    option: undefined,
    notes: undefined,
    quantity: 1,
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative px-[16px]">
                <div className="text-center">Xác nhận huỷ đơn</div>
                <div
                  className="absolute right-[16px] top-0 flex size-[24px] items-center justify-end"
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
          height={"40vh"}
          style={{
            background: "#FFFFFF",
            borderRadius: "24px 24px 0 0",
            padding: "20px 0 0",
          }}
          afterClose={() => {
            form.resetFields();
          }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
            className="flex flex-col gap-[12px] overflow-auto px-[16px] pb-[90px] pt-[20px]"
          >
            <Form.Item
              label="Vui lòng chọn lý do huỷ đơn"
              name="reason"
              labelCol={{ className: "!pb-0" }}
              style={{ marginBottom: 0 }}
            >
              <Select
                className="h-[45px] border-stroke3"
                placeholder="Chọn lý do"
                options={[
                  { value: "1", label: "Lý do 1" },
                  { value: "2", label: "Lý do 2" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="notes"
              labelCol={{ className: "!pb-0" }}
              style={{ marginBottom: 0 }}
            >
              <Input.TextArea
                placeholder="Thêm note (nếu có)"
                autoSize={{ minRows: 4, maxRows: 8 }}
              />
            </Form.Item>
            {/* Footer */}
            <div
              className="fixed inset-x-0 bottom-0 z-20 bg-white px-[16px] pb-[20px] pt-[12px]"
              style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
            >
              <Button
                text={
                  <div className="text-base font-medium text-white">
                    Xác nhận
                  </div>
                }
                className="flex h-[43px] w-full flex-none items-center justify-center rounded-[12px] bg-green6 px-[14px]"
                style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
              />
            </div>
          </Form>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { CancelConfirmSheet };

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
