import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/rightNav.svg";
import styles from "./CarouselRightNavigation.module.css";
function CarouselRightNavigation() {
  let swiper = useSwiper();
  let [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default CarouselRightNavigation;
