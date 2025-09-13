import React from "react";
import { Form } from "../common/form";
import { useForm } from "antd/es/form/Form";
import { Radio } from "../common/radio";
import NewsImage from "../../static/images/news.jpg";
import ClockIcon from "../icons/ClockIcon";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const [form] = useForm();

  return (
    <div className="flex w-full flex-col gap-[14px] px-[16px] py-[14px]">
      <Form form={form}>
        <Form.Item name="filter" noStyle>
          <Radio.ButtonGroup
            items={items}
            activeRender={(item) => (
              <div className="flex h-[35px] items-center justify-center rounded-[40px] bg-green6 px-[12px] text-base font-medium text-white">
                {item?.label}
              </div>
            )}
            render={(item) => (
              <div className="flex h-[35px] items-center justify-center rounded-[40px] bg-gray2 px-[12px] text-sm font-medium text-gray8">
                {item?.label}
              </div>
            )}
            className="flex gap-[8px]"
            direction="row"
            itemFlex={false}
          />
        </Form.Item>
      </Form>
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-[8px]"
            onClick={() => navigate("/news/1")}
          >
            <img
              src={NewsImage}
              alt=""
              className="h-[160px] w-full rounded-[12px] object-cover"
            />
            <div className="text-base font-medium">
              Ghé ngay Haidilao, thưởng thức món ngon “đỉnh chóp” mùa hè này!
            </div>
            <div className="flex items-center gap-[4px]">
              <ClockIcon className="size-[18px] text-gray7" />
              <div className="text-sm font-medium text-gray7">22/07/2024</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

const items = [
  {
    label: "Tin tức",
    value: "all",
    alallalal: 1,
  },
  {
    label: "Khuyến mãi",
    value: "sale",
    alallalal: 2,
  },
];
