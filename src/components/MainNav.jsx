import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={styles.main_nav}>
      <Link className={styles.main_nav_link} to={"/"}>
        მთავარი
      </Link>
      <Link className={styles.main_nav_link} to={"projects"}>
        პროექტები
      </Link>
      <Link className={styles.main_nav_link} to={"services"}>
        მომსახურეობა
      </Link>
      <Link className={styles.main_nav_link} to={"contact"}>
        კონტაქტი
      </Link>
    </nav>
  );
}

export default MainNav;
