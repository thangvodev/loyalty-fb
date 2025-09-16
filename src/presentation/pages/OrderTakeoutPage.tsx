import React, { useMemo, useState } from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { OrderPageContent } from "../components/OrderPage";
import { useScrollPosition } from "../hooks/useScrollPosition";
import SearchNormalIcon from "../components/icons/SearchNormalIcon";
import { OrderTakeoutPageContent } from "../components/OrderTakeoutPage";

const OrderTakeoutPage = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const { scrollY } = useScrollPosition(".order-page-scroll-container");

  const showFloat = useMemo(() => {
    return scrollY > 50;
  }, [scrollY]);

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-green6">
      <Header
        title={
          (
            <>
              <div className="flex w-[calc(100%-100px)] items-center justify-between">
                <div className="text-base text-white">Mã #12</div>
                {showFloat ? (
                  <div onClick={() => setShowSearch((prev) => !prev)}>
                    <SearchNormalIcon className="size-[24px] text-white" />
                  </div>
                ) : null}
              </div>
            </>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-green6"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <ArrowLeftIcon className="size-full object-cover text-white" />
          </div>
        }
      />
      <div className="order-page-scroll-container flex-1 overflow-auto bg-surface1">
        <OrderTakeoutPageContent
          showFloat={showFloat}
          showSearch={showSearch}
        />
      </div>
    </Page>
  );
};

export default OrderTakeoutPage;
