import ContactForm from "../components/ContactForm";
import styles from "./Styles_sections.module.css";

const Contact = () => {
  return (
    <section id="contact_section" className={styles.contacts_section}>
      <div className={styles.form_header}>
        <h3>ზარის შეკვეთა</h3>
        <p>
          დაგვიტოვეთ თქვენი საკონტაქტო ტელეფონის ნომერი, ჩვენ მალე
          დაგიკავშირდებით
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
