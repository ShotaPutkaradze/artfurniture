import { Outlet } from "react-router-dom";
import styles from "./Styles.module.css";
import MainNav from "../components/MainNav";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <header className={styles.header_container}>
        <div className={styles.slogan}>
          <a href="/#">ArtFurniture</a>
        </div>

        <div className={styles.contact}>
          <a href="tel:+995555555555">+995 555 55 55 55</a>
          <div className={styles.header_language}></div>
        </div>
      </header>

      <MainNav />

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Header;
