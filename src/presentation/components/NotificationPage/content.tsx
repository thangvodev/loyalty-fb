import React from "react";
import { Form } from "../common/form";
import { Radio } from "../common/radio";
import { FilterTab, notificationFilter } from "./filters";
import { NotificationList } from "./notification-list";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <div className="flex h-full flex-col gap-[20px] px-[16px] pt-[14px]">
      <Form form={form}>
        <Form.Item name="status" noStyle>
          <Radio.ButtonGroup
            items={[
              notificationFilter["all"],
              notificationFilter["order"],
              notificationFilter["redeemPoint"],
              notificationFilter["collectPoint"],
            ]}
            render={(item) => <FilterTab active={false} label={item?.label} />}
            activeRender={(item) => (
              <FilterTab active={true} label={item?.label} />
            )}
            className="flex gap-[8px] overflow-auto hide-scrollbar"
            direction="row"
            itemFlex={false}
          />
        </Form.Item>
      </Form>
      <NotificationList />
    </div>
  );
};

export default Content;
