import Categories from "../components/Categories";
import ContactForm from "../components/ContactForm";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_section}>
      <div className={styles.home_text_container}>
        <div className={styles.welcome_text}>
          <h1 className={styles.firts_text}>
            ავეჯის დამზადება ბათუმში, ინდივიდუალური ზომებით, დიზაინით და თანამედროვე
            მასალებით
          </h1>

          <h2 className={styles.third_text}>
            დამზადება უმოკლეს დროში, აზომვითი სამუშაოები, ნახაზისა და 3d დიზაინის
            დამზადება, ავეჯის მოტანა და აწყობა.
          </h2>
          <p className={styles.fourth_text}>
            შესაძლებელია ავეჯის დამზადება განვადებით (თიბისი და კრედო ბანკი)
          </p>
        </div>
        <ContactForm />
      </div>
      <Categories />
    </div>
  );
};

export default Home;
