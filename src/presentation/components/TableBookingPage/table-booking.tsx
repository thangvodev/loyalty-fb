import React, { useMemo, useState } from "react";
import { Form } from "../common/form";
import { Select } from "../common/select";
import { Picker } from "zmp-ui";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import CalendarIcon from "../icons/CalendarIcon";

export const TableBooking = () => {
  const [form] = Form.useForm();

  const initialValues = {
    amount: 1,
    time: reformatDayjsToPickerInput(dayjs()),
  };

  const virtualDays = useMemo(
    () =>
      Array.from({ length: 100 }).map((_, index) => {
        const currentDate = dayjs().add(index, "day");
        return {
          displayName: `${weekdays[currentDate.day()]}, ${currentDate.format("DD [th]M")}`,
          value: currentDate.format("DD/MM/YYYY"),
        };
      }),
    [],
  );

  const virtualHours = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => i.toString().padStart(2, "0")).map(
        (hour, index) => ({
          displayName: hour,
          value: index,
        }),
      ),
    [],
  );

  const virtualMinutes = useMemo(
    () =>
      Array.from({ length: 61 }, (_, i) => i.toString().padStart(2, "0")).map(
        (hour, index) => ({
          displayName: hour,
          value: index,
        }),
      ),
    [],
  );

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
          getValueFromEvent={(e) => {
            const result = reformatPickerOutputToPickerInput(e);
            const currentTime = form.getFieldValue("time");
            return { ...currentTime, ...result };
          }}
        >
          <Picker
            title="Chọn ngày giờ"
            action={{
              close: true,
              text: "Xác nhận",
            }}
            inputClass="!text-xs !border-gray2 !m-0 !h-[40px]"
            suffix={
              <CalendarIcon className="mr-[12px] size-[18px] text-gray5" />
            }
            placeholder="Chọn ngày giờ"
            formatPickedValueDisplay={(value) => {
              return reformatPickerInputToDayjs(
                reformatPickerOutputToPickerInput(value),
              ).format("DD [th] M[, ]H:mm");
            }}
            data={[
              {
                name: "date",
                options: virtualDays,
              },
              {
                name: "hour",
                options: virtualHours,
              },
              {
                name: "minute",
                options: virtualMinutes,
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          shouldUpdate={(prev, next) =>
            prev.time.hour !== next.time.hour ||
            prev.time.minute !== next.time.minute
          }
          noStyle
        >
          {({ getFieldValue, setFieldValue }) => {
            return (
              <div className="mt-[12px] flex gap-[8px]">
                {Array.from({ length: 6 }).map((_, i) => {
                  const newTime = reformatPickerInputToDayjs(
                    getFieldValue("time"),
                  ).add(i + 1, "h");
                  return (
                    <div
                      key={i}
                      className="flex h-[22px] items-center justify-center rounded-[24px] bg-orange1 px-[6px]"
                      onClick={() =>
                        setFieldValue(
                          "time",
                          reformatDayjsToPickerInput(newTime),
                        )
                      }
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

const weekdays = ["CN", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"];

const reformatDayjsToPickerInput = (time: Dayjs) => {
  return {
    date: time.format("DD/MM/YYYY"),
    hour: time.get("hour"),
    minute: time.get("minute"),
  };
};

const reformatPickerInputToDayjs = (formattedTime): Dayjs => {
  const { date: dateValue, hour, minute } = formattedTime;
  let result = dayjs(dateValue, "DD/MM/YYYY");

  if (hour !== undefined) result = result.set("hour", hour);
  if (minute !== undefined) result = result.set("minute", minute);

  return result;
};

const reformatPickerOutputToPickerInput = (formattedTime) => {
  const result = Object.keys(formattedTime).reduce((acc, key) => {
    acc[key] = formattedTime[key].value;
    return acc;
  }, {});
  return result;
};
