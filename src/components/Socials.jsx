import React from "react";
import styles from "./Socials.module.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function Socials() {
  return (
    <div className={styles.social_container}>
      <a
        href="https://www.facebook.com/artfurniture.ge"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className={styles.social_icons} />
      </a>

      <a
        href="https://www.instagram.com/artfurniture01/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={styles.social_icons} />
      </a>

      <a
        href="https://www.youtube.com/channel/UC7FZP7yf-rDyyiJIL6Hd-IQ"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube className={styles.social_icons} />
      </a>

      <a
        href="https://www.instagram.com/artfurniture01/"
        target="_blank"
        rel="noreferrer"
      >
        <FaTiktok className={styles.social_icons} />
      </a>
    </div>
  );
}

export default Socials;
