import React, { FC } from "react";
import { Page } from "zmp-ui";
import { HomePageContent, HomePageHeader } from "../components/HomePage";
import { Footer } from "../components/common/footer";

const HomePage: FC = () => {
  return (
    <Page
      className="page-content relative flex flex-1 flex-col"
      style={{
        background:
          "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
      }}
    >
      <HomePageHeader />
      <div className="bg-surface1 -mt-[25px] flex flex-1 overflow-auto">
        <HomePageContent />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
