import styles from "./ContactForm.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_om3831d",
        "template_cb1j949",
        form.current,
        "lIc9iSuOIjJphi1Rh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form class={styles.form} ref={form} onSubmit={sendEmail} action="#">
      <div>
        <label className={styles.label} for="full-name">
          სახელი და გვარი
        </label>
        <input
          name="full-name"
          id="full-name"
          className={styles.input}
          type="text"
          placeholder="სახელი გვარი"
          autocomplete="off"
          required
        />
      </div>
      <div>
        <label className={styles.label} for="mobile">
          მობილური
        </label>
        <input
          name="mobile"
          id="mobile"
          className={styles.input}
          type="mobile"
          placeholder="555 12 34 56"
          autocomplete="mobile"
          required
        />
      </div>
      <input type="submit" class={styles.button} value="გაგზავნა" />
    </form>
  );
}

export default ContactForm;
