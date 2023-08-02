import ContactForm from "../components/ContactForm";
import styles from "./Styles_contactpage.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.form_header}>
        <p>
          დაგვიტოვეთ თქვენი საკონტაქტო ტელეფონის ნომერი, ჩვენ მალე
          დაგიკავშირდებით
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
