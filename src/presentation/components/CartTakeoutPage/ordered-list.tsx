import { Divider } from "antd";
import React from "react";
import { formatCurrency } from "../../utils/helpers";
import EditIcon from "../icons/EditIcon";

const OrderedList = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] pb-[12px]">
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          <OrderedListItem />
          {index < 1 ? <Divider className="m-0" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const OrderedListItem = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex items-center justify-between">
        <div className="text-base font-medium">1 x Lẩu dầu cay Mayla</div>
        <div className="text-sm font-medium text-neutral6">
          {formatCurrency(50000)}
        </div>
      </div>
      <div className="text-sm font-medium text-gray8">Phô mai, xà lách</div>
      <div className="flex items-center gap-[4px]">
        <EditIcon className="size-[18px] shrink-0 text-gray6" />
        <div className="line-clamp-1 break-all text-xs font-normal text-gray7">
          Ghi chú: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt utlabore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export { OrderedList };
