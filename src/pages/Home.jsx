import ContactForm from "../components/ContactForm";
import styles from "./Styles.module.css";

const Home = () => {
  return (
    <div className={styles.home_section}>
      <div className={styles.home_text_container}>
        <div className={styles.welcome_text}>
          <h1>
            ავეჯის დამზადება ბათუმში, ინდივიდუალური ზომებით, დიზაინით და თანამედროვე
            მასალებით
          </h1>

          <h2>
            დამზადება უმოკლეს დროში, აზომვითი სამუშაოები, ნახაზისა და 3D დიზაინის
            დამზადება, ავეჯის მოტანა და აწყობა.
          </h2>
          <p>შესაძლებელია ავეჯის დამზადება განვადებით (თიბისი და კრედო ბანკი)</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
