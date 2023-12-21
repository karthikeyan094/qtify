import React from "react";
import Button from "../Button/Button";
import SearchBox from "../SearchBox/SearchBox";
import style from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={style.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBox placeholder={"Search a album of your choice"} />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
