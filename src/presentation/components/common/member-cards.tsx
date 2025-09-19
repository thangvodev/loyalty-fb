import React, { FC } from "react";
import CardTopGold from "../../static/images/card-top-gold.jpg";
import ChevronIcon from "../icons/ChevronIcon";
import CoinGold from "../../static/icons/coin-gold.svg";
import StarGold from "../../static/icons/star-gold.svg";
import Diamond from "../../static/icons/diamond.svg";
import BarCode from "../../static/images/bar-code.png";
import { Progress } from "antd";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { useNavigate } from "react-router-dom";

const CardNew: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      <div className="relative flex flex-col gap-[14px] bg-[#c3fcd7] px-[16px] pb-[8px] pt-[12px]">
        {/* Content */}
        <div className="z-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-medium text-green7">Anne</div>
            <div
              className="flex h-[20px] items-center gap-[4px] rounded-[24px] bg-green5 pl-[6px] pr-[4px]"
              onClick={navigateMemberCards}
            >
              <div className="text-2xs font-medium text-white">Mới</div>
              <ChevronIcon className="size-[8px] text-white" />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="text-[18px] font-semibold text-green7">500</div>
            <img src={CoinGold} alt="" className="size-[18px]" />
          </div>
        </div>
        <div className="z-10 flex flex-col gap-[4px]">
          <div className="flex justify-between">
            <div className="flex h-[18px] items-center rounded-[10px] bg-green5 px-[4px]">
              <div className="text-2xs font-medium text-yellow1">5,500</div>
            </div>
            <div
              className="flex h-[18px] items-center gap-[2px] rounded-[12px] bg-white px-[4px]"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <img src={StarGold} alt="" className="size-[14px]" />
              <div className="text-2xs font-semibold leading-none text-green6">
                10,000
              </div>
            </div>
          </div>
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#4CBA81"
            trailColor="#FFFFFF"
            className="leading-[0]"
          />
        </div>
      </div>
      <div className="z-10 flex items-center justify-between bg-white px-[16px] py-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[9px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

const CardSilver: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      <div className="relative flex flex-col gap-[14px] px-[16px] pb-[8px] pt-[12px]">
        {/* Background */}
        <img
          src={CardTopGold}
          alt=""
          className="absolute inset-0 z-0 grayscale"
        />
        {/* Content */}
        <div className="z-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-medium text-[#363636]">Anne</div>
            <div
              className="flex h-[20px] items-center gap-[4px] rounded-[24px] pl-[6px] pr-[4px]"
              onClick={navigateMemberCards}
              style={{
                background:
                  "linear-gradient(90deg, rgba(92, 92, 92, 0.4) 0%, rgba(154, 154, 154, 0.4) 63.11%, rgba(89, 89, 89, 0.4) 100%)",
              }}
            >
              <div className="text-2xs font-medium text-[#363636]">
                Hạng bạc
              </div>
              <ChevronIcon className="size-[8px] text-[#363636]" />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="text-[18px] font-semibold text-[#363636]">1000</div>
            <img src={CoinGold} alt="" className="size-[18px]" />
          </div>
        </div>
        <div className="z-10 flex flex-col gap-[4px]">
          <div className="flex justify-between">
            <div
              className="flex h-[18px] items-center rounded-[10px] px-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(92, 92, 92, 0.4) 0%, rgba(154, 154, 154, 0.4) 63.11%, rgba(89, 89, 89, 0.4) 100%)",
              }}
            >
              <div className="text-2xs font-medium text-yellow1">5,500</div>
            </div>
            <div
              className="flex h-[18px] items-center gap-[2px] rounded-[12px] bg-white px-[4px]"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <img src={StarGold} alt="" className="size-[14px]" />
              <div className="text-2xs font-semibold leading-none text-[#363636]">
                10,000
              </div>
            </div>
          </div>
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#FFFFFF"
            trailColor="#CFCFCF"
            className="leading-[0]"
          />
        </div>
      </div>
      <div className="z-10 flex items-center justify-between bg-white px-[16px] py-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[9px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

const CardGold: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      <div className="relative flex flex-col gap-[14px] px-[16px] pb-[8px] pt-[12px]">
        {/* Background */}
        <img src={CardTopGold} alt="" className="absolute inset-0 z-0" />
        {/* Content */}
        <div className="z-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-medium text-[#694D17]">Anne</div>
            <div
              className="flex h-[20px] items-center gap-[4px] rounded-[24px] pl-[6px] pr-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(201, 161, 0, 0.4) 0%, rgba(255, 213, 87, 0.4) 49.04%, rgba(182, 146, 4, 0.4) 100%)",
              }}
              onClick={navigateMemberCards}
            >
              <div className="text-2xs font-medium text-[#694D17]">
                Hạng vàng
              </div>
              <ChevronIcon className="size-[8px] text-[#694D17]" />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="text-[18px] font-semibold text-[#694D17]">5000</div>
            <img src={CoinGold} alt="" className="size-[18px]" />
          </div>
        </div>
        <div className="z-10 flex flex-col gap-[4px]">
          <div className="flex justify-between">
            <div
              className="flex h-[18px] items-center rounded-[10px] px-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(237, 196, 28, 0.4) 0%, rgba(173, 132, 11, 0.4) 49.04%, rgba(225, 183, 18, 0.4) 100%)",
              }}
            >
              <div className="text-2xs font-medium text-yellow1">5000</div>
            </div>
            <div
              className="flex h-[18px] items-center gap-[2px] rounded-[12px] bg-white px-[4px]"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <img src={Diamond} alt="" className="size-[14px]" />
              <div className="text-2xs font-semibold leading-none text-[#694D17]">
                10,000
              </div>
            </div>
          </div>
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#FBFBEA"
            trailColor="#A3A50D"
            className="leading-[0]"
          />
        </div>
      </div>
      <div className="z-10 flex items-center justify-between bg-white px-[16px] py-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[9px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

const CardDiamond: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      <div className="relative flex flex-col gap-[14px] px-[16px] pb-[8px] pt-[12px]">
        {/* Background */}
        <img
          src={CardTopGold}
          alt=""
          className="absolute inset-0 z-0 brightness-[55%] saturate-0"
        />
        {/* Content */}
        <div className="z-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div
              className="text-[11px] font-medium text-transparent"
              style={{
                background:
                  "linear-gradient(180deg, #C9AF01 17.79%, #FFFFAA 45.67%, #C8AD00 71.15%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Anne
            </div>
            <div
              className="flex h-[20px] items-center gap-[4px] rounded-[24px] pl-[6px] pr-[4px]"
              onClick={navigateMemberCards}
              style={{
                background:
                  "linear-gradient(90deg, rgba(52, 52, 52, 0.6) 0%, rgba(148, 148, 148, 0.6) 49.04%, rgba(52, 52, 52, 0.6) 100%)",
              }}
            >
              <div className="text-2xs font-medium text-white">
                Hạng kim cương
              </div>
              <ChevronIcon className="size-[8px] text-white" />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <div
              className="text-[18px] font-semibold text-transparent"
              style={{
                background:
                  "linear-gradient(180deg, #C9AF01 17.79%, #FFFFAA 45.67%, #C8AD00 71.15%)",
                WebkitBackgroundClip: "text",
              }}
            >
              10,500
            </div>
            <img src={CoinGold} alt="" className="size-[18px]" />
          </div>
        </div>
        {/* Disabled */}
        <div className="pointer-events-none invisible z-10 flex flex-col gap-[4px]">
          <div className="flex justify-between">
            <div
              className="flex h-[18px] items-center rounded-[10px] px-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(92, 92, 92, 0.4) 0%, rgba(154, 154, 154, 0.4) 63.11%, rgba(89, 89, 89, 0.4) 100%)",
              }}
            >
              <div className="text-2xs font-medium text-yellow1">5,500</div>
            </div>
            <div
              className="flex h-[18px] items-center gap-[2px] rounded-[12px] bg-white px-[4px]"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <img src={StarGold} alt="" className="size-[14px]" />
              <div className="text-2xs font-semibold leading-none text-[#363636]">
                10,000
              </div>
            </div>
          </div>
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#FFFFFF"
            trailColor="#CFCFCF"
            className="leading-[0]"
          />
        </div>
      </div>
      <div className="z-10 flex items-center justify-between bg-white px-[16px] py-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[9px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

export const MemberCard: FC<MemberCardProps> = ({
  type,
  canNavigate = true,
}) => {
  const navigate = useNavigate();

  const navigateToQr = () => {
    navigate("/qr");
  };

  const navigateToMemberCards = () => {
    navigate("/member-cards");
  };

  switch (type) {
    case "new":
      return (
        <CardNew
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : {}}
        />
      );

    case "silver":
      return (
        <CardSilver
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : {}}
        />
      );

    case "gold":
      return (
        <CardGold
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : {}}
        />
      );

    case "diamond":
      return (
        <CardDiamond
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : {}}
        />
      );

    default:
      return <CardGold />;
  }
};

export type MemberCardProps = {
  type: "new" | "silver" | "gold" | "diamond";
  canNavigate?: boolean;
};
