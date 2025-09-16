import React from "react";
import Banner from "../../static/images/restaurant.jpg";
import { SelectRestaurant } from "./select-restaurant";
import { TableBooking } from "./table-booking";
import { RestaurantInfo } from "./restaurant-info";
import { BookFloatButton } from "./book-float-button";

const Content = () => {
  return (
    <div className="size-full">
      <img src={Banner} alt="" className="h-[240px] w-full object-cover" />
      <div className="relative z-10 flex -translate-y-[30px] flex-col gap-[16px] rounded-[20px] bg-white pt-[20px]">
        <SelectRestaurant />
        <TableBooking />
        <RestaurantInfo />
      </div>
      <BookFloatButton />
    </div>
  );
};

export default Content;
