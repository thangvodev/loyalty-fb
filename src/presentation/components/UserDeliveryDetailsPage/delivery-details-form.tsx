import React, { FC } from "react";
import { Form } from "../common/form";
import { FormInstance, Input } from "antd";
import { Select } from "../common/select";
import ChevronIcon from "../icons/ChevronIcon";

export const DeliveryDetailsForm: FC<Props> = ({ form }) => {
  return (
    <Form
      form={form}
      className="flex flex-col gap-[8px]"
      initialValues={{ street: "Đường 3/2 quận 10" }}
    >
      <Form.Item
        name="name"
        label="Tên"
        required
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Input
          placeholder="Nhập tên người nhận hàng"
          className="h-[40px] rounded-[8px] border-gray2 text-xs"
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Số điện thoại"
        required
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Input
          placeholder="Nhập số điện thoại. Ví dụ: 03949824"
          className="h-[40px] rounded-[8px] border-gray2 text-xs"
        />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Input
          placeholder="Nhập email"
          className="h-[40px] rounded-[8px] border-gray2 text-xs"
        />
      </Form.Item>
      <Form.Item
        name="city"
        label="Tỉnh/Thành phố"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Select
          className="customSelect h-[40px] text-xs"
          placeholder="Chọn tỉnh/thành phố"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="ward"
        label="Phường/Xã"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Select
          className="customSelect h-[40px] text-xs"
          placeholder="Chọn phường/xã"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="street"
        label="Đường"
        labelCol={{ className: "!pb-0" }}
        style={{ marginBottom: 0 }}
      >
        <Input
          placeholder="Nhập đường"
          className="h-[40px] rounded-[8px] border-gray2 text-xs"
        />
      </Form.Item>
    </Form>
  );
};

type Props = {
  form: FormInstance;
};
