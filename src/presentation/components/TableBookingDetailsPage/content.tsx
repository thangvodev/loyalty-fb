import React from "react";
import { RestaurantDetails } from "./restaurant-details";
import { BookingForm } from "./booking-form";
import { Form } from "../common/form";
import dayjs from "dayjs";
import { BookFloatButton } from "./booking-float-button";
import { PaymentMethod } from "./payment-method";
import { PreorderDetails } from "./preorder-details";

const Content = () => {
  const [form] = Form.useForm();

  const initialValues = {
    amount: 1,
    time: dayjs(),
    "payment-method": null,
  };

  return (
    <div className="relative flex w-full flex-col gap-[12px] pb-[100px]">
      <RestaurantDetails />
      <BookingForm form={form} initialValues={initialValues} />
      <PreorderDetails />
      <PaymentMethod form={form} initialValues={initialValues} />
      <BookFloatButton />
    </div>
  );
};

export default Content;
