import React from "react";
import styles from "./Styles_layouts.module.css";
import Socials from "../components/Socials";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Socials />

      <div>
        <a className={styles.footer_mob} href="tel:+995557433440">
          +995 557 43 34 40
        </a>
      </div>

      <div className={styles.footer_copyright}>
        <span> &copy; ArtFurniture </span>
      </div>
    </div>
  );
};

export default Footer;
