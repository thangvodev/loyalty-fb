import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { TableBookingPageContent } from "../components/TableBookingPage";

const TableBookingPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        className="topbar no-border h-auto flex-none !bg-transparent"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[28px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
            <ArrowLeftIcon className="size-[12px] object-cover text-black" />
          </div>
        }
      />
      <div className="-mt-[50px] flex-1 overflow-auto bg-white">
        <TableBookingPageContent />
      </div>
    </Page>
  );
};

export default TableBookingPage;
