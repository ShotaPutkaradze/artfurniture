import MainNav from "../components/MainNav";
import styles from "./Styles_layouts.module.css";

const Header = () => {
  return (
    <header className={`${styles.header_container} ${styles.sticky}`}>
      <div className={styles.slogan}>
        <a href="/#">ArtFurniture</a>
      </div>
      <MainNav />
      <div className={styles.contact}>
        <a href="tel:+995555555555">+995 555 55 55 55</a>
        <div className={styles.header_language}></div>
      </div>
    </header>
  );
};

export default Header;
