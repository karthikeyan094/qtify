import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({ type, data, filterSource }) {
  let [toggelView, setToggleView] = useState(false);
  let [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  console.log(data);
  const handleToggle = () => {
    setToggleView((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        let { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);
  const showFilter = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilter && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionHead}>
        <div className={styles.sectionTitle}>{type}</div>

        {!filterSource && (
          <button className={styles.btn} onClick={handleToggle}>
            {!toggelView ? "Show all" : "Collapse"}
          </button>
        )}
      </div>
      {showFilter && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      <div className={styles.cardContainer}>
        {toggelView ? (
          <>
            {cardsToRender.map((item) => {
              return (
                <div key={item.id}>
                  <Card type={type} data={item} />
                </div>
              );
            })}{" "}
          </>
        ) : (
          <Carousel
            data={cardsToRender}
            renderComponent={(data) => <Card data={data} type={type} />}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
