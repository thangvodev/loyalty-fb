import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import CloseFilledIcon from "../icons/CloseFilledIcon";
import FoodBanner from "../../static/images/food.png";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import AddCircleIcon from "../icons/AddCircleIcon";
import { Divider, Input } from "antd";
import { Radio } from "../common/radio";
import clsx from "clsx";

const PreorderItemSheet: FC<Props> = ({ children }) => {
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
              <div className="relative h-[195px]">
                <img src={FoodBanner} alt="" className="w-full object-cover" />
                <div
                  className="absolute right-[14px] top-[14px] size-[23.66px]"
                  onClick={() => setVisible(false)}
                >
                  <CloseFilledIcon className="size-full text-white" />
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
            borderRadius: "24px 24px 0 0",
          }}
          afterClose={() => {
            form.resetFields();
          }}
        >
          <Form form={form} onFinish={onFinish} initialValues={initialValues}>
            <div className="relative z-10 h-[521px] rounded-t-[20px] bg-white pt-[24px]">
              {/* Content */}
              <div className="flex flex-col gap-[12px] px-[16px] pb-[122px]">
                <div className="text-xl font-semibold">{foodInfo.name}</div>
                <div className="text-xl font-semibold">
                  {formatCurrency(foodInfo.price)}
                </div>
                <Form.Item
                  name="option"
                  label="Độ cay"
                  labelCol={{ className: "!pb-0" }}
                  style={{ marginBottom: 0 }}
                >
                  <Radio.Group
                    allowUncheck
                    items={foodInfo.options}
                    render={(option) => (
                      <div className="flex w-full justify-between pl-[4px]">
                        <div className="text-base font-normal">
                          {option?.label}
                        </div>
                        <div className="text-sm font-medium text-gray6">
                          +{formatCurrency(option?.price)}
                        </div>
                      </div>
                    )}
                    divider={
                      <Divider className="mx-0 my-[12px] border-[0.5] border-gray1" />
                    }
                    className="w-full"
                  />
                </Form.Item>
                <Form.Item
                  name="notes"
                  label="Ghi chú"
                  labelCol={{ className: "!pb-0" }}
                  style={{ marginBottom: 0 }}
                >
                  <Input.TextArea
                    placeholder="Ghi chú"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Footer */}
            <div
              className="fixed inset-x-0 bottom-0 z-20 flex flex-col gap-[15px] bg-white px-[16px] pb-[20px] pt-[12px]"
              style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-medium text-gray8">
                  Tổng tiền
                </div>
                <Form.Item
                  noStyle
                  shouldUpdate={(prev, next) => prev.quantity !== next.quantity}
                >
                  {({ getFieldValue }) => {
                    const quantity = getFieldValue("quantity");
                    return (
                      <div className="flex items-center gap-[12px]">
                        <Button.Icon
                          icon={
                            <MinusCircleIcon
                              className={clsx("size-[26.66px] text-green6", {
                                "!text-gray4": quantity === 1,
                              })}
                            />
                          }
                          onClick={() =>
                            form.setFieldValue(
                              "quantity",
                              Math.max(quantity - 1, 1),
                            )
                          }
                        />
                        <div className="text-xl font-medium">{quantity}</div>
                        <Button.Icon
                          icon={
                            <AddCircleIcon className="size-[26.66px] text-green6" />
                          }
                          onClick={() =>
                            form.setFieldValue("quantity", quantity + 1)
                          }
                        />
                      </div>
                    );
                  }}
                </Form.Item>
                <Form.Item
                  noStyle
                  shouldUpdate={(prev, next) =>
                    prev.quantity !== next.quantity ||
                    prev.option !== next.option
                  }
                >
                  {({ getFieldValue }) => {
                    const quantity = getFieldValue("quantity");
                    const option = getFieldValue("option");
                    let currentPrice = foodInfo.price;

                    const checkedOption = foodInfo.options.find(
                      (o) => o.value === option,
                    );

                    if (checkedOption) {
                      currentPrice += checkedOption.price;
                    }

                    if (quantity) {
                      currentPrice *= quantity;
                    }
                    return (
                      <div className="text-xl font-semibold">
                        {formatCurrency(currentPrice)}
                      </div>
                    );
                  }}
                </Form.Item>
              </div>
              <Button
                text={
                  <div className="text-base font-medium text-white">
                    Thêm món
                  </div>
                }
                className="flex h-[43px] flex-none items-center justify-center rounded-[12px] bg-green6 px-[14px]"
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

export { PreorderItemSheet };

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
