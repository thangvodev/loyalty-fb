import React from "react";
import { DeliveryDetailsForm } from "./delivery-details-form";
import { UpdateFloatButton } from "./update-float-button";
import { Form } from "../common/form";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <div className="relative bg-white px-[16px] py-[14px]">
      <DeliveryDetailsForm form={form} />
      <UpdateFloatButton />
    </div>
  );
};

export default Content;
