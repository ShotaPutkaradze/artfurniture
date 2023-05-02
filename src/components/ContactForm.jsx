import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <form class={styles.form} action="#">
      <p className={styles.form_header}>მოგვწერეთ და ჩვენ მალე დაგიკავშირდებით</p>
      <div>
        <label for="full-name">სახელი და გვარი</label>
        <input type="text" placeholder="სახელი გვარი" required />
      </div>

      <div>
        <label for="email">მობილური</label>
        <input type="mobile" placeholder="XXX XX XX XX" required />
      </div>

      <div>
        <label for="email">ელ, ფოსტა</label>
        <input type="email" placeholder="me@example.com" />
      </div>

      <button class={styles.button}>გაგზავნა</button>
    </form>
  );
}

export default ContactForm;
