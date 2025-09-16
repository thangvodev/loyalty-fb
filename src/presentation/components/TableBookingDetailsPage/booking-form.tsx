import { FormInstance, Input } from "antd";
import React, { FC } from "react";
import { Form } from "../common/form";
import { Select } from "../common/select";
import { DatePicker } from "../common/date-picker";
import ChevronIcon from "../icons/ChevronIcon";
import dayjs from "dayjs";

export const BookingForm: FC<Props> = ({ form, initialValues }) => {
  return (
    <Form
      form={form}
      initialValues={initialValues}
      className="flex flex-col gap-[12px] bg-white px-[16px] pb-[14px] pt-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="text-lg font-semibold">Thông tin đặt bàn</div>
      <Form.Item
        name="amount"
        label="Số người"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Select
          placeholder="Nhập số người"
          className="customSelect h-[40px] rounded-[8px]"
          suffixIcon={
            <ChevronIcon className="size-[10px] rotate-90 text-black" />
          }
          options={[
            { value: 1, label: "1 người" },
            { value: 2, label: "2 người" },
            { value: 4, label: "4 người" },
            { value: 8, label: "8 người" },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="time"
        label="Thời gian đặt bàn"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <DatePicker
          title="Chọn ngày giờ"
          action={{
            close: true,
            text: "Xác nhận",
          }}
          inputClass="!text-xs !border-gray2 !m-0 !h-[40px]"
          suffix={<ChevronIcon className="size-[10px] rotate-90" />}
          placeholder="Chọn ngày giờ"
          formatPickedValueDisplay={(value) => {
            return value.isSame(dayjs(), "day")
              ? value.format("[Hôm nay, ]H:mm")
              : value.format("DD [th] M[, ]H:mm");
          }}
        />
      </Form.Item>
      <Form.Item
        name="name"
        label="Tên"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
        required
      >
        <Input
          placeholder="Nhập tên người nhận hàng"
          className="h-[40px] rounded-[8px] text-xs"
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Số điện thoại"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
        required
      >
        <Input
          placeholder="Nhập số điện thoại. Ví dụ: 03949824"
          className="h-[40px] rounded-[8px] text-xs"
        />
      </Form.Item>
      <Form.Item
        name="name"
        label="Email"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Input
          placeholder="Nhập email"
          className="h-[40px] rounded-[8px] text-xs"
        />
      </Form.Item>
      <Form.Item
        name="notes"
        label="Ghi chú"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Input.TextArea
          placeholder="Nhập ghi chú"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
    </Form>
  );
};

type Props = {
  form: FormInstance;
  initialValues: any;
};
