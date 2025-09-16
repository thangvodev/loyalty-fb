import React, { FC } from "react";
import HotpotIcon from "../../static/icons/hotpot.svg";
import SteakIcon from "../../static/icons/steak.svg";
import CabbageIcon from "../../static/icons/cabbage.svg";
import FruitSaladIcon from "../../static/icons/fruit-salad.svg";
import CoffeeIcon from "../../static/icons/coffee.svg";
import clsx from "clsx";

const Filter: FC<{
  currentSelect?: number;
  onChange?: (index: number) => void;
  showFloat?: boolean;
}> = ({ currentSelect, onChange, showFloat }) => {
  return (
    <div
      className={clsx("flex justify-between px-[12px]", {
        invisible: showFloat,
      })}
    >
      {FilterMapping.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-[8px]"
          onClick={() => onChange?.(index)}
        >
          <div
            className="flex size-[44px] items-center justify-center rounded-full bg-white"
            style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
          >
            {item.icon}
          </div>
          <div
            className={clsx(
              "border-b-2 border-transparent pb-[7px] text-[11px] font-medium text-gray7",
              {
                "!border-green5": currentSelect === index,
              },
            )}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

const FilterFloat: FC<{
  currentSelect?: number;
  onChange?: (index: number) => void;
}> = ({ currentSelect, onChange }) => {
  return (
    <div className="flex">
      {FilterMapping.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "flex flex-1 flex-col items-center gap-[2px] border-b-2 border-transparent pb-[7px]",
            {
              "!border-green5": currentSelect === index,
            },
          )}
          onClick={() => onChange?.(index)}
        >
          <div
            className="flex size-[32px] items-center justify-center rounded-full bg-white"
            style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
          >
            {item.icon}
          </div>
          <div className="text-[11px] font-medium text-gray7">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export { Filter, FilterFloat };

const FilterMapping = [
  {
    name: "Lẩu",
    icon: <img src={HotpotIcon} alt="" />,
  },
  {
    name: "Nướng",
    icon: <img src={SteakIcon} alt="" />,
  },
  {
    name: "Rau",
    icon: <img src={CabbageIcon} alt="" />,
  },
  {
    name: "Món ăn kèm",
    icon: <img src={FruitSaladIcon} alt="" />,
  },
  {
    name: "Nước uống",
    icon: <img src={CoffeeIcon} alt="" />,
  },
];
