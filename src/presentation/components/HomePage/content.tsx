import React from "react";
import { Points } from "./points";
import { Services } from "./services";
import { Promotion } from "./promotion";
import { Voucher } from "./voucher";
import { MemberCard } from "./member-card";
import { News } from "./news";

const Content = () => {
  return (
    <div className="relative z-[10] flex w-full flex-col gap-[20px] pb-[20px]">
      <div className="px-[16px]">
        <MemberCard />
      </div>
      <Points />
      <Services />
      <Promotion />
      <Voucher />
      <News />
    </div>
  );
};

export default Content;
