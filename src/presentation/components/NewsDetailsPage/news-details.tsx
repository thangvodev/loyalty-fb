import React from "react";
import ClockIcon from "../icons/ClockIcon";
import NewsImage from "../../static/images/news.jpg";

export const NewsDetails = () => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex flex-col gap-[8px] border-b-2 border-gray1 px-[16px] pb-[12px]">
        <div className="text-xl font-semibold">Hadilao có gì mới?!!</div>
        <div className="flex items-center gap-[8px]">
          <ClockIcon className="size-[18px] text-gray7" />
          <div className="text-sm font-normal text-gray8">22/07/2024</div>
        </div>
      </div>
      <div className="flex flex-col gap-[14px] px-[16px]">
        <div className="text-sm font-normal">
          Thịt tôm săn chắc, sốt đậm đà, cắn một miếng thôi là vị cay tê tê,
          thơm bùi vị tỏi —— lan tỏa khắp khoang miệng!Đến cả ngón tay cũng phải
          mút sạch mới thỏa cơn thèm!Niềm vui này, chỉ có những tín đồ “nghiện
          tôm” mới hiểu!Ghé ngay Haidilao, thưởng thức món ngon “đỉnh chóp” mùa
          hè này!Món mới chỉ áp dụng tại: Haidilao Phạm Ngọc Thạch, Haidilao
          Trần Duy Hưng, Haidilao Nguyễn Chí Thanh, Haidilao Vincom Đồng Khởi,
          Haidilao Vạn Hạnh Mall
        </div>
        <img src={NewsImage} alt="" />
      </div>
    </div>
  );
};
