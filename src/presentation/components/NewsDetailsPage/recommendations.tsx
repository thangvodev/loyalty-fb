import React from "react";
import NewsImage from "../../static/images/news.jpg";

export const Recommendations = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px]">
      <div className="text-xl font-semibold">Có thể bạn quan tâm</div>
      <div className="grid grid-cols-2 gap-[12px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-[8px]">
            <img
              src={NewsImage}
              alt=""
              className="h-[160px] w-full rounded-[12px] object-cover"
            />
            <div className="line-clamp-2 text-sm font-semibold">
              Ghé ngay Haidilao, thưởng thức món ngon “đỉnh chóp” mùa hè này!
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
