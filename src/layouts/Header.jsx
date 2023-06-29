import Socials from "../components/Socials";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import styles from "./Styles_layouts.module.css";

const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle(styles.nav_open);
  };

  return (
    <header
      ref={navRef}
      className={`${styles.header_container} ${styles.sticky}  `}
    >
      <div className={styles.slogan}>
        <a href="/#">ArtFurniture</a>
      </div>

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

      <div className={styles.header_socials}>
        <Socials />
      </div>

      <button className={styles.btn_mobile_nav} onClick={showNavBar}>
        <FaBars name="menu-outline" className={styles.icon_mobile_nav} />
        <FaTimes name="close-outline" className={styles.icon_mobile_nav} />
      </button>

      {/* <button className={styles.mob_nav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.icon_mob}
          name="open"
        >
          <path d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.icon_mob}
          name="close"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button> */}
    </header>
  );
};

export default Header;
