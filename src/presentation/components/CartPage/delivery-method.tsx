import React, { FC } from "react";
import DeliveryFilledIcon from "../icons/DeliveryFilledIcon";
import ChevronIcon from "../icons/ChevronIcon";
import FoodDrinkFilledIcon from "../icons/FoodDrinkFilledIcon";
import { useNavigate } from "react-router-dom";

export const DeliveryMethod: FC<Props> = ({ method, restaurant }) => {
  switch (method) {
    case "Giao hàng":
      return <MethodDelivery />;
    case "Tự đến lấy":
      return <MethodSelfTake restaurant={restaurant} />;

    default:
      return;
  }
};

const MethodDelivery = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[12px]">
        <div className="flex size-[32px] items-center justify-center rounded-[6.4px] bg-green1 p-[6.4px]">
          <DeliveryFilledIcon className="text-green7" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-sm font-semibold">Giao hàng</div>
          <div className="text-xs font-medium text-gray7">
            Giao trong 14 - 20p
          </div>
        </div>
      </div>
      <ChevronIcon className="size-[12px] text-gray6" />
    </div>
  );
};

const MethodSelfTake: FC<{
  restaurant?: TRestaurant;
}> = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-between"
      onClick={() => navigate("/select-restaurant")}
    >
      <div className="flex items-center gap-[12px]">
        <div className="flex size-[32px] items-center justify-center rounded-[6.4px] bg-blue1 p-[6.4px]">
          <FoodDrinkFilledIcon className="text-blue6" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-sm font-semibold">Tự đến lấy</div>
          {!restaurant ? (
            <div className="text-xs font-medium text-red5">
              Vui lòng chọn cửa hàng tới lấy
            </div>
          ) : (
            <div className="flex flex-col gap-[4px]">
              <div className="text-xs font-medium text-gray7">
                {restaurant.name}
              </div>
              <div className="text-[11px] font-normal text-gray6">
                {restaurant.location}
              </div>
            </div>
          )}
        </div>
      </div>
      <ChevronIcon className="size-[12px] text-gray6" />
    </div>
  );
};

type Props = {
  method?: TDeliveryMethods;
  restaurant?: TRestaurant;
};

type TDeliveryMethods = "Giao hàng" | "Tự đến lấy";
export type TRestaurant = {
  name: string;
  location: string;
};
