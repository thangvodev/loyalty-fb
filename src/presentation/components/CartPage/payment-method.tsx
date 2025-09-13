import { Divider } from "antd";
import React from "react";
import { Radio } from "../common/radio";
import { Form } from "../common/form";

export const PaymentMethod = () => {
  const [form] = Form.useForm();

  return (
    <div
      className="flex flex-col gap-[12px] bg-white px-[16px] py-[14px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="flex flex-col gap-[8px]">
        <div className="text-xs font-semibold text-gray7">
          Phương thức thanh toán
        </div>
        <Divider className="m-0" />
      </div>
      <Form form={form}>
        <Form.Item name="payment-method" noStyle>
          <Radio.Group
            items={paymentMethods}
            render={(item) => (
              <div className="text-sm font-medium">{item?.label}</div>
            )}
            className="flex flex-col gap-[12px]"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

const paymentMethods = [
  {
    label: "Thanh toán online",
    value: 1,
  },
  {
    label: "Thanh toán COD - Tiền mặt",
    value: 2,
  },
];
