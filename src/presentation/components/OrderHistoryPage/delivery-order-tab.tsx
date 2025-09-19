import React, { FC } from "react";
import { Radio } from "../common/radio";
import { FilterTab, orderStatusFilter } from "./filters";
import { Form } from "../common/form";
import { orderStatus, TOrderStatus } from "../../constants/order-status";
import ProductImage from "../../static/images/food.png";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import ZaloLogo from "../../static/images/zalo-logo.png";
import { useNavigate } from "react-router-dom";

const DeliveryOrderTab = () => {
  const [form] = Form.useForm();

  return (
    <div className="flex h-full flex-col gap-[14px]">
      <Form form={form}>
        <Form.Item name="status" noStyle>
          <Radio.ButtonGroup
            items={[
              orderStatusFilter["all"],
              orderStatusFilter["confirming"],
              orderStatusFilter["completed"],
              orderStatusFilter["canceled"],
            ]}
            render={(item) => <FilterTab active={false} label={item?.label} />}
            activeRender={(item) => (
              <FilterTab active={true} label={item?.label} />
            )}
            className="flex gap-[8px] overflow-auto px-[16px] hide-scrollbar"
            direction="row"
            itemFlex={false}
          />
        </Form.Item>
      </Form>
      <div className="flex h-full flex-col gap-[14px] overflow-auto px-[16px] pb-[16px]">
        <DeliveryOrderItem status="confirming" />
        <DeliveryOrderItem status="completed" paid={true} />
        <DeliveryOrderItem status="canceled" />
        <DeliveryOrderItem status="pendingDelivery" />
      </div>
    </div>
  );
};

const DeliveryOrderItem: FC<{ status: TOrderStatus; paid?: boolean }> = ({
  status,
  paid,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
      onClick={() => navigate("/order/1")}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray7">Đơn #123243</div>
        {orderStatus[status].render({ active: true })}
      </div>
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="relative size-[48px] overflow-hidden rounded-[5.6px]">
                  <img
                    src={ProductImage}
                    alt=""
                    className="size-full object-cover"
                  />
                  <div className="absolute right-0 top-0 flex size-[19.5px] items-center justify-center rounded-[3px] bg-orange1">
                    <span className="text-xs font-bold text-orange7">x1</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="text-sm font-medium">Lẩu dầu cay Mayla</div>
                  <div className="text-xs font-normal text-gray6">Cay ít</div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-[4px] text-center">
                <div className="text-base font-semibold text-gray9">
                  {formatCurrency(150000)}
                </div>
              </div>
            </div>
            {index < 1 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        ))}
      </div>
      <Divider dashed className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-gray6">
          Đặt lúc 12:00, 05/07/2024
        </div>

        {paid ? (
          <div className="flex flex-col items-end gap-[2px]">
            <div className="flex items-center gap-[8px]">
              <img
                src={ZaloLogo}
                alt=""
                className="size-[18px] rounded-[3.6px] border-[0.75px] border-gray1"
              />
              <div className="text-xs font-semibold text-green6">
                Đã thanh toán:
              </div>
            </div>
            <div className="flex gap-[8px] text-sm font-semibold">
              <div className="text-gray7">Tổng:</div>
              <div className="text-orange7">{formatCurrency(20000000)}</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal text-gray6">Tổng tiền</div>
            <div className="text-sm font-semibold text-orange7">
              {formatCurrency(320000)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { DeliveryOrderTab };
