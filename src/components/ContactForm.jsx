import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.form_containet}>
      <p className={styles.form_header}>მოგვწერეთ და ჩვენ დაგიკავშირდებით</p>
      <form class={styles.form} action="#">
        <div>
          <label for="full-name">სახელი და გვარი</label>
          <input type="text" placeholder="სახელი გვარი" required />
        </div>

        <div>
          <label for="email">ელ, ფოსტა</label>
          <input type="email" placeholder="me@example.com" required />
        </div>

        <button class={styles.button}>გაგზავნა</button>
      </form>
    </div>
  );
}

export default ContactForm;
