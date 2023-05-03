import HeaderSocials from "../components/HeaderSocials";
import MainNav from "../components/MainNav";
import styles from "./Styles_layouts.module.css";

const Header = () => {
  return (
    <header className={`${styles.header_container} ${styles.sticky}`}>
      <div className={styles.slogan}>
        <a href="/#">ArtFurniture</a>
      </div>
      <MainNav />
      <HeaderSocials />
    </header>
  );
};

export default Header;
