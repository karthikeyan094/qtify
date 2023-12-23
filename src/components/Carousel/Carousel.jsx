import React, { useEffect } from "react";
import { Navigation } from "swiper";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
const Control = ({ data }) => {
  let swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
};
function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
        initialSlide={10}
      >
        <Control data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele, id) => (
          <div key={id}>
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
export default Carousel;
