import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { HomePageContent } from "../components/HomePage";
import { Footer } from "../components/common/footer";
import Logo from "../static/images/logo.svg";

const HomePage: FC = () => {
  return (
    <Page
      className="page-content relative flex flex-1 flex-col"
      style={{
        background:
          "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
      }}
    >
      <Header
        title={
          (
            <div className="justify-left flex w-[calc(100%-80px)]">
              <div className="flex h-[28px] w-[180px] items-center gap-[12px] pl-[8px]">
                <img src={Logo} alt="" />
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none pl-4"
        showBackIcon={false}
        textColor="white"
        style={{
          background:
            "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
        }}
      />
      <div className="relative flex-1 overflow-auto bg-surface1">
        <div
          className="fixed inset-x-0 h-[80px]"
          style={{
            borderBottomLeftRadius: "200% 50px",
            borderBottomRightRadius: "200% 50px",
            background:
              "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
          }}
        />
        <HomePageContent />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
