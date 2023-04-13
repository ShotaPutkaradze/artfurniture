import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <a href="/#" className={styles.header_logo}>
        ArtFurniture
      </a>
      <div className={styles.main_nav}>
        <ul>
          <li>
            <a href="/#" className={styles.main_nav_link}>
              მთავარი
            </a>
          </li>
          <li>
            <a href="/#" className={styles.main_nav_link}>
              ჩვენს შესახებ
            </a>
          </li>
          <li>
            <a href="/#" className={styles.main_nav_link}>
              მომსახურეობა
            </a>
          </li>
          <li>
            <a href="/#" className={styles.main_nav_link}>
              პროექტები
            </a>
          </li>
          <li>
            <a href="/#" className={styles.main_nav_link}>
              კონტაქტი
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.mail_link}>
        <a href="mailto:davit@artfurniture.ge" className={styles.main_nav_link}>
          davit@artfurniture.ge
        </a>
      </div>
    </div>
  );
};

export default Header;
