import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
import { Toolbar, Tooltip } from "@mui/material";

function Card({ data }) {
  let { image, title, follows } = data;
  return (
    <Tooltip title={follows} placement="top" arrow>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.imgwrapper}>
            <img className={styles.cardimg} src={`${image}`} />
          </div>
          <div className={styles.cardfooter}>
            <Chip
              label={`${follows} Follows`}
              size="small"
              className={styles.chip}
            />
          </div>
        </div>
        <div className={styles.title}>{title}</div>
      </div>
    </Tooltip>
  );
}

export default Card;
