import React from "react";
import { Header as HeaderZMP } from "zmp-ui";
import Logo from "../../static/images/logo.svg";
import { HeaderCard } from "./header-card";

const Header = () => {
  return (
    <div className="relative z-10">
      <HeaderZMP
        title={
          (
            <div className="pb-[120px] pr-[90px]">
              <div className="flex h-[28px] w-[180px] items-center gap-[12px] pl-[8px]">
                <img src={Logo} alt="" />
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !pb-0 pl-4"
        showBackIcon={false}
        textColor="white"
        style={{
          borderBottomLeftRadius: "100% 50px",
          borderBottomRightRadius: "100% 50px",
          background:
            "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
        }}
      />
      <HeaderCard />
    </div>
  );
};

export default Header;
