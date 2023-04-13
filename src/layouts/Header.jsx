import { NavLink, Outlet } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header_container}>
        <div className={styles.header_slogan}>
          <a href="/#">CUSTOM FURNITURE</a>
        </div>
        <nav className={styles.main_nav}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
        </nav>
        <div className={styles.header_contact}>
          <a href="mailto:davit@artfurniture.ge">davit@artfurniture.ge</a>
          <a href="tel:+995555555555">+995 555 55 55 55</a>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
