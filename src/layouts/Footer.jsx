import React from "react";
import styles from "./Styles_layouts.module.css";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_text}>
        <span>ArtFurniture &copy;</span> ყველა უფლება დაცულია
      </div>
      <div>
        <a className={styles.footer_text} href="tel:+995555555555">
          +995 555 55 55 55
        </a>{" "}
      </div>
    </div>
  );
}

export default Footer;
