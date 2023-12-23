import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ type, data }) {
  let [toggelView, setToggleView] = useState(false);
  console.log(data);
  const handleToggle = () => {
    setToggleView((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionHead}>
        <div className={styles.sectionTitle}>{type}</div>
        <button className={styles.btn} onClick={handleToggle}>
          {!toggelView ? "Show all" : "Collapse"}
        </button>
      </div>
      <div className={styles.cardContainer}>
        {toggelView ? (
          <>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <Card data={item} />
                </div>
              );
            })}{" "}
          </>
        ) : (
          <Carousel
            data={data}
            renderComponent={(data) => <Card data={data} type={type} />}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
