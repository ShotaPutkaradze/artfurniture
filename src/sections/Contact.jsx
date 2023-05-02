import ContactForm from "../components/ContactForm";
import styles from "./Styles_sections.module.css";

const Contact = () => {
  return (
    <div id="contact_section" className={styles.contact_section}>
      <ContactForm />
    </div>
  );
};

export default Contact;
