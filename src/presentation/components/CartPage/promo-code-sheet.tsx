import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { Divider, Input } from "antd";
import clsx from "clsx";
import { CloseOutlined } from "@ant-design/icons";
import PromotionImage from "../../static/images/promotion.jpg";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import ClockFilledIcon from "../icons/ClockFilledIcon";

const PromoCodeSheet: FC<Props> = ({ children }) => {
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
                <div className="text-left">Mã giảm giá</div>
                <div
                  className="absolute right-[16px] top-0 size-[24px]"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="size-full text-gray6" />
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
            className="overflow-auto px-[16px] pb-[90px]"
          >
            <div className="flex flex-col gap-[16px] pt-[16px]">
              <Form.Item name="code" noStyle>
                <Input
                  placeholder="Nhập mã giảm giá ở đây"
                  suffix={
                    <div className="text-sm font-semibold text-green6">
                      Thêm
                    </div>
                  }
                  className="h-[49px] rounded-[8px] px-[16px] text-xs"
                />
              </Form.Item>
              <div className="flex flex-col gap-[12px]">
                {/* Item */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <React.Fragment key={index}>
                    <div key={index} className="flex items-center gap-[12px]">
                      <img
                        src={PromotionImage}
                        alt=""
                        className="size-[56px] rounded-[4px] object-cover"
                      />
                      <Divider
                        dashed
                        type="vertical"
                        className="m-0 h-[57px]"
                      />
                      <div className="flex flex-col gap-[8px]">
                        <div className="flex items-start justify-between gap-[8px]">
                          <div className="text-base font-medium">
                            Ưu đãi thành viên 15% cho hoá đơn 500.0000
                          </div>
                          <CheckMarkIcon className="size-[29px] text-green6" />
                        </div>
                        <div className="flex items-center justify-between gap-[8px]">
                          <div className="text-xs font-medium text-gray7">
                            Xem chi tiết
                          </div>
                          <div className="flex items-center gap-[4px]">
                            <ClockFilledIcon className="text-orange5 size-[12px]" />
                            <div className="text-[11px] font-normal text-red5">
                              Hết hạn sau 2 ngày
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Divider className="m-0" />
                  </React.Fragment>
                ))}
              </div>
            </div>
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

export { PromoCodeSheet };

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
