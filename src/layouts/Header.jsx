import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div>
        <h1>davit@artfurniture.ge</h1>
      </div>
      <div>
        <ul>
          <li>მთავარი</li>
          <li>ჩვენს შესახებ</li>
          <li>მომსახურეობა</li>
          <li>პროექტები</li>
          <li>კონტაქტი</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
