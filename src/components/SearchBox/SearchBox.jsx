import React from "react";
import style from "./SearchBox.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

function SearchBox({ placeholder }) {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className={style.wrapper} onSubmit={onFormSubmit}>
        <input className={style.search} type="text" placeholder={placeholder} />
        <button className={style.searchbtn} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
