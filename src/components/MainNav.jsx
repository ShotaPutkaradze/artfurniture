import React from "react";

import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={styles.main_nav}>
      <li className={styles.main_nav_link}>
        <a href="#home_section">მთავარი</a>
      </li>

      <li className={styles.main_nav_link}>
        <a href="#services_section">მომსახურეობა</a>
      </li>
      <li className={styles.main_nav_link}>
        <a href="#projects_section">პროექტები</a>
      </li>
      <li className={styles.main_nav_link}>
        <a href="#contact_section">კონტაქტი</a>
      </li>
    </nav>
  );
}

export default MainNav;
