import styles from "./Styles_layouts.module.css";
import Footer from "./Footer";
import logo from "../img/logo.webp";

import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Header = (props) => {
  let content = {
    GE: { home: "მთავარი", projects: "პროექტები", contacts: "კონტაქტი" },
    EN: { home: "HOME", projects: "PROJECTS", contacts: "CONTACTS" },
    RU: { home: "ГЛАВНАЯ", projects: "ПРОЕКТИ", contacts: "КОНТАКТИ" },
  };

  if (props.language === "GE") {
    content = content.GE;
  } else if (props.language === "EN") {
    content = content.EN;
  } else if (props.language === "RU") {
    content = content.RU;
  }

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle(styles.nav_open);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`${styles.header_container} ${styles.sticky}  `}
      >
        <div className={styles.slogan}>
          <a href="/#">{/* <img src={logo} alt="logo" /> */}</a>
        </div>

        <nav className={styles.main_nav}>
          <NavLink
            className={styles.main_nav_link}
            to={"/"}
            onClick={showNavBar}
          >
            {content.home}
          </NavLink>

          <NavLink
            className={styles.main_nav_link}
            to={"galery"}
            onClick={showNavBar}
          >
            {content.projects}
          </NavLink>

          <NavLink
            className={styles.main_nav_link}
            to={"contact"}
            onClick={showNavBar}
          >
            {content.contacts}
          </NavLink>
        </nav>

        <div className={styles.language_select}>
          <select
            className={styles.custom_select}
            value={props.language}
            onChange={(e) => props.handleSetLanguage(e.target.value)}
          >
            <option className={styles.custom_select_option} value="GE">
              GE
            </option>
            <option className={styles.custom_select_option} value="EN">
              EN
            </option>
            <option className={styles.custom_select_option} value="RU">
              RU
            </option>
          </select>
        </div>

        <button className={styles.btn_mobile_nav} onClick={showNavBar}>
          <FaBars name="menu-outline" className={styles.icon_mobile_nav} />
          <FaTimes name="close-outline" className={styles.icon_mobile_nav} />
        </button>
      </header>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Header;
