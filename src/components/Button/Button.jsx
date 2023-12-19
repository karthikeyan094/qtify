import React from "react";
import style from "./Button.module.css";

function Button({ children }) {
  return (
    <>
      <button className={style.feedbackbtn}>{children}</button>
    </>
  );
}

export default Button;
