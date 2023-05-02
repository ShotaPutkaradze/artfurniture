import React from "react";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.icons}>
      <div className={styles.icon_box}>
        <h1>შემოსასვლელი</h1>
      </div>
      <div className={styles.icon_box}>
        <h1>მისაღები</h1>
      </div>
      <div className={styles.icon_box}>
        <h1>სამზარეულო</h1>
      </div>
      <div className={styles.icon_box}>
        <h1>საძინებელი</h1>
      </div>

      <div className={styles.icon_box}>
        <h1>საოფისესე ავეჯი</h1>
      </div>
    </div>
  );
}

export default Categories;
