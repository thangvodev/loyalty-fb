import React, { FC } from "react";
import ProductImage from "../../static/images/food.png";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import clsx from "clsx";
import AddCircleIcon from "../icons/AddCircleIcon";
import { Divider } from "antd";
import { RemoveItemPopup } from "./remove-item-popup";

const OrderingList = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px]">
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          <RemoveItemPopup
            item={{ title: "Lẩu dầu cay Mayla" }}
            onAccept={() => {}}
          >
            {({ open }) => <OrderingListItem onRemove={open} />}
          </RemoveItemPopup>
          {index < 1 ? <Divider className="m-0" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const OrderingListItem: FC<{ onRemove?: () => void }> = ({ onRemove }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-[12px]">
        <div className="relative size-[48px] overflow-hidden rounded-[5.6px]">
          <img src={ProductImage} alt="" className="size-full object-cover" />
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
        <div className="flex items-center gap-[12px]">
          <Button.Icon
            icon={
              <MinusCircleIcon className={clsx("size-[24px] text-gray4", {})} />
            }
            onClick={onRemove}
          />

          <div className="text-lg font-semibold">1</div>
          <Button.Icon
            icon={<AddCircleIcon className="size-[24px] text-green6" />}
          />
        </div>
      </div>
    </div>
  );
};

export { OrderingList };
