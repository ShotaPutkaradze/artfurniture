import styles from "./Styles_sections.module.css";

const Home = () => {
  return (
    <section id="home_section" className={styles.home_section}>
      <div className={styles.home_text_container}>
        <div className={styles.welcome_texts}>
          <h1>ავეჯის დამზადება ბათუმში</h1>
          <h2>ინდივიდუალური ზომები და დიზაინი</h2>
          <h2> თანამედროვე მასალები</h2>
          <h2>აზომვითი სამუშაოები</h2>
          <h2>ნახაზისა და 3D დიზაინის დამზადება</h2>

          <a className={styles.contact_btn} href="#contact_section">
            მოგვწერეთ
          </a>
        </div>
        <div className={styles.cover}></div>
      </div>
    </section>
  );
};

export default Home;
