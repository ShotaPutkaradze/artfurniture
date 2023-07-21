import styles from "./Styles_layouts.module.css";
import Footer from "./Footer";
import Socials from "../components/Socials";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Header = () => {
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
          <a href="/#">ArtFurniture</a>
        </div>

        <nav className={styles.main_nav}>
          <NavLink
            className={styles.main_nav_link}
            to={"/"}
            onClick={showNavBar}
          >
            მთავარი
          </NavLink>

          <NavLink
            className={styles.main_nav_link}
            to={"galery"}
            onClick={showNavBar}
          >
            გალერეა
          </NavLink>

          <NavLink
            className={styles.main_nav_link}
            to={"contact"}
            onClick={showNavBar}
          >
            კონტაქტი
          </NavLink>
        </nav>

        <div className={styles.header_socials}>
          <Socials />
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
