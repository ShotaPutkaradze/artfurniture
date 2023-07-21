import ContactForm from "../components/ContactForm";
import styles from "./Styles_contactpage.module.css";

const Contact = () => {
  return (
    <section id="contact_section" className={styles.contacts_section}>
      <div className={styles.form_header}>
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
