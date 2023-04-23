import React from "react";
import styles from "./Categories.module.css";
import iconBedroom from "../img/product category/icon-bedroom.svg";
import iconBookcase from "../img/product category/icon-bookcase.svg";
import iconKitchen from "../img/product category/icon-kitchen.svg";
import iconMediacabinet from "../img/product category/icon-mediacabinet.svg";
import iconNightstand from "../img/product category/icon-nightstand.svg";
import iconOffice from "../img/product category/icon-office.svg";
import iconShocabinet from "../img/product category/icon-shocabinet.svg";
import iconWardrobe from "../img/product category/icon-wardrobe.svg";

function Categories() {
  return (
    <div className={styles.icons}>
      <div className={styles.icon_box}>
        <img src={iconKitchen} className={styles.icon} alt="" />
        <h1>სამზარეულო</h1>
      </div>
      <div className={styles.icon_box}>
        <img src={iconBedroom} className={styles.icon} alt="" />
        <h1>საწოლი</h1>
      </div>
      <div className={styles.icon_box}>
        <img src={iconWardrobe} className={styles.icon} alt="" />
        <h1>ტანსაცმლის კარადა</h1>
      </div>
      <div className={styles.icon_box}>
        <img src={iconShocabinet} className={styles.icon} alt="" />
        <h1>შემოსასვლელის ავეჯი</h1>
      </div>
      <div className={styles.icon_box}>
        <img src={iconBookcase} className={styles.icon} alt="" />
        <h1>წიგნის კარადა</h1>
      </div>
      <div className={styles.icon_box}>
        <img src={iconMediacabinet} className={styles.icon} alt="" />
        <h1>ტელევიზორის კარადა</h1>
      </div>
      <div className={styles.icon_box}>
        <img src={iconNightstand} className={styles.icon} alt="" />
        <h1>ტუმბო</h1>
      </div>
      <div className={styles.icon_box}>
        <img src={iconOffice} className={styles.icon} alt="" />
        <h1>საოფისე ავეჯი</h1>
      </div>
    </div>
  );
}

export default Categories;
