import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <form class={styles.form} action="#">
      <div>
        <label className={styles.label} for="full-name">
          სახელი და გვარი
        </label>
        <input
          className={styles.input}
          type="text"
          placeholder="სახელი გვარი"
          required
        />
      </div>

      <div>
        <label className={styles.label} for="email">
          მობილური
        </label>
        <input
          className={styles.input}
          type="mobile"
          placeholder="XXX XX XX XX"
          required
        />
      </div>

      <button class={styles.button}>გაგზავნა</button>
    </form>
  );
}

export default ContactForm;
