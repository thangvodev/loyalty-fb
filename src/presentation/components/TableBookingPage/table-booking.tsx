import React from "react";
import { Form } from "../common/form";
import { Select } from "../common/select";
import dayjs from "dayjs";
import CalendarIcon from "../icons/CalendarIcon";
import { DatePicker } from "../common/date-picker";
import ChevronIcon from "../icons/ChevronIcon";

export const TableBooking = () => {
  const [form] = Form.useForm();

  const initialValues = {
    amount: 1,
    time: dayjs(),
  };

  return (
    <div className="flex flex-col gap-[5px] px-[16px]">
      <div className="text-lg font-semibold">Đặt bàn</div>
      <Form
        form={form}
        className="flex flex-col gap-[5px]"
        initialValues={initialValues}
      >
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
            suffix={<CalendarIcon className="size-[18px] text-gray5" />}
            placeholder="Chọn ngày giờ"
            formatPickedValueDisplay={(value) => {
              return value.isSame(dayjs(), "day")
                ? value.format("[Hôm nay, ]H:mm")
                : value.format("DD [th] M[, ]H:mm");
            }}
          />
        </Form.Item>
        <Form.Item
          shouldUpdate={(prev, next) => prev.time !== next.time}
          noStyle
        >
          {({ getFieldValue, setFieldValue }) => {
            return (
              <div className="mt-[12px] flex gap-[8px]">
                {Array.from({ length: 6 }).map((_, i) => {
                  const newTime = getFieldValue("time").add(i + 1, "h");
                  return (
                    <div
                      key={i}
                      className="flex h-[22px] items-center justify-center rounded-[24px] bg-orange1 px-[6px]"
                      onClick={() => setFieldValue("time", newTime)}
                    >
                      <span className="text-xs font-medium text-orange8">
                        {newTime?.format("HH:mm")}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          }}
        </Form.Item>
      </Form>
    </div>
  );
};
