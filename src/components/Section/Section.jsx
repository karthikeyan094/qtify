import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ type, data }) {
  let [toggelView, setToggleView] = useState(true);
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
          <>null</>
        )}
      </div>
    </div>
  );
}

export default Section;
