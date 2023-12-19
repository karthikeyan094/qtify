import React from "react";
import Button from "../Button/Button";
import SearchBox from "../SearchBox/SearchBox";
import style from "./Navbar.module.css";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <div className={style.navbar}>
      <a href="/">
        <Logo />
      </a>
      <SearchBox placeholder={"Search a album of your choice"} />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
