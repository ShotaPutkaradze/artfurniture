import { Outlet } from "react-router-dom";
import styles from "./Header.module.css";
import MainNav from "../components/MainNav";

const Header = () => {
  return (
    <div>
      <header className={styles.container}>
        <div className={styles.slogan}>
          <a href="/#">ArtFurniture</a>
        </div>
        <MainNav />
        <div className={styles.header_contact}>
          <a href="tel:+995555555555">+995 555 55 55 55</a>
        </div>
        <div className={styles.header_language}></div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
