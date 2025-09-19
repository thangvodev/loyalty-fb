import React from "react";
import { Points } from "./points";
import { Services } from "./services";
import { Promotion } from "./promotion";
import { Voucher } from "./voucher";
import { News } from "./news";
import { MemberCard } from "../common/member-cards";

const Content = () => {
  return (
    <div className="relative z-[10] flex w-full flex-col gap-[20px] pb-[20px]">
      <div
        className="fixed inset-x-0 -z-[10] h-[80px]"
        style={{
          borderBottomLeftRadius: "200% 50px",
          borderBottomRightRadius: "200% 50px",
          background:
            "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
        }}
      />
      <div className="px-[16px]">
        <MemberCard type="gold" />
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
