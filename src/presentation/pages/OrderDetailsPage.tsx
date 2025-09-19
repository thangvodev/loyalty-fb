import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { OrderDetailsPageContent } from "../components/OrderDetailsPage";

const OrderDetailsPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-green6">
      <Header
        title={
          (
            <div className="justify-left flex w-[calc(100%-80px)]">
              <div className="text-base text-white">Đơn hàng #123244</div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-green6"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <ArrowLeftIcon className="size-full object-cover text-white" />
          </div>
        }
      />
      <div className="flex-1 overflow-auto bg-[#F8F8F8]">
        <OrderDetailsPageContent />
      </div>
    </Page>
  );
};

export default OrderDetailsPage;
