import React from "react";
import NewsImage from "../../static/images/news.jpg";
import { useNavigate } from "react-router-dom";

export const News = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[14px] px-[16px]">
      <div
        className="text-xl font-semibold leading-none"
        onClick={() => navigate("/news")}
      >
        Tin tức nổi bật
      </div>
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-[8px]"
            onClick={() => navigate("/news/1")}
          >
            <img
              src={NewsImage}
              alt=""
              className="h-[160px] w-full rounded-[12px] object-cover"
            />
            <div className="text-base font-semibold">
              Ghé ngay Haidilao, thưởng thức món ngon “đỉnh chóp” mùa hè này!
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
