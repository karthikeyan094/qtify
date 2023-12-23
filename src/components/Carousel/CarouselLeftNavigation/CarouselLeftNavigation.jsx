import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/leftNav.svg";
import styles from "./CarouselLeftNavigation.module.css";
import Swiper from "swiper";
function CarouselLeftNavigation() {
  let swiper = useSwiper();
  let [isBegining, setIsBegining] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftNavigation}>
      {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}

export default CarouselLeftNavigation;
