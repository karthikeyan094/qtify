import React from "react";
import headPhone from "../../assets/headphone.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroTxt}>
        <h1 className={styles.h}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.h}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img alt="Headphone" src={headPhone} width={212} height={212} />
      </div>
    </div>
  );
}
export default Hero;
