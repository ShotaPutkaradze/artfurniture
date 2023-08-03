import styles from "./ContactForm.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [status, setStatus] = useState("");
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
          setStatus("შეტყობინება გაიგზავნა ✅");
        },
        (error) => {
          console.log(error.text);
          setStatus("შეტყობინება ვერ გაიგზავნა, მოგვიანებით სცადეთ ⛔");
        }
      );
    e.target.reset();
  };

  return (
    <form class={styles.form} ref={form} onSubmit={sendEmail}>
      <div class="field">
        <label className={styles.label} for="full_name">
          სახელი და გვარი
        </label>
        <input
          type="text"
          name="full_name"
          id="full_name"
          className={styles.input}
          placeholder="სახელი გვარი"
          autocomplete="name"
          required
        />
      </div>
      <div class="field">
        <label className={styles.label} for="mobile">
          მობილური
        </label>
        <input
          type="mobile"
          name="mobile"
          id="mobile"
          className={styles.input}
          placeholder="XXX XX XX XX"
          autocomplete="mobile"
          required
        />
      </div>
      <input type="submit" class={styles.button} value="გაგზავნა" />
      <label className={styles.status}>{status}</label>
    </form>
  );
}

export default ContactForm;
