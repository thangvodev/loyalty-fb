import React, { useEffect, useState } from "react";
import { RedeemFloatButton } from "./redeem-float-button";
import { RewardDetails } from "./reward-details";
import { Banner } from "./banner";
import { SuccessPopup } from "./success-popup";

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState<boolean>(true);
  const [isCollected, setisCollected] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex w-full flex-col pb-[75px]">
      <Banner />
      <RewardDetails isCollected={isCollected} />
      <RedeemFloatButton
        loading={loading}
        isRedeemed={isRedeemed}
        isCollected={isCollected}
      />
      <SuccessPopup open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Content;
