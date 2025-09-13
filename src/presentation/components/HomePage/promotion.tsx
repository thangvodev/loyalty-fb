import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PromoImg from "../../static/images/service.jpg";

const Promotion = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className="h-full px-[16px]"
        pagination={true}
        modules={[Pagination]}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="!flex !w-[calc(100%-0px)] items-center"
          >
            <div className="h-[160px] w-full overflow-hidden rounded-[12px]">
              <img src={PromoImg} className="size-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Promotion };
