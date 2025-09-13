import React, { FC, useMemo, useState } from "react";
import { ItemList } from "./item-list";
import { CartFloatButton } from "./cart-float-button";
import { Filter, FilterFloat } from "./filter";
import { SearchBar } from "./search-bar";
import clsx from "clsx";

const Content: FC<{ showFloat: boolean; showSearch: boolean }> = ({
  showFloat,
  showSearch,
}) => {
  const [currentSelect, setCurrentSelect] = useState<number>(0);

  return (
    <div className="relative z-10 flex w-full flex-col gap-[14px]">
      <div
        className="fixed inset-x-0 h-[30px] bg-green6"
        style={{
          borderBottomLeftRadius: "200% 50px",
          borderBottomRightRadius: "200% 50px",
        }}
      />
      <SearchBar />
      <Filter
        currentSelect={currentSelect}
        onChange={(index) => setCurrentSelect(index)}
        showFloat={showFloat}
      />
      <div
        className={clsx(
          "fixed inset-x-0 z-10 flex flex-col gap-[5px] bg-white pt-[8px]",
          { hidden: !showFloat },
        )}
        style={{ boxShadow: "0px 8px 24px 0px #BBD4C740" }}
      >
        <div className={clsx("pt-[4px]", { hidden: !showSearch })}>
          <SearchBar />
        </div>
        <FilterFloat
          currentSelect={currentSelect}
          onChange={(index) => setCurrentSelect(index)}
        />
      </div>
      <div className="pb-[100px]">
        <ItemList />
      </div>
      <CartFloatButton />
    </div>
  );
};

export default Content;
