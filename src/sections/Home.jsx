import styles from "./Styles_sections.module.css";

const Home = () => {
  return (
    <div id="home_section" className={styles.home_section}>
      <div className={styles.home_text_container}>
        <div className={styles.welcome_texts}>
          <h1>ავეჯის დამზადება ბათუმში</h1>
          <h2>ინდივიდუალური ზომები და დიზაინი, თანამედროვე მასალები</h2>
          <h2>აზომვითი სამუშაოები, ნახაზისა და 3D დიზაინის დამზადება</h2>

          <button className={styles.contact_btn}>მოგვწერეთ</button>
        </div>
        <div className={styles.test}></div>
      </div>
    </div>
  );
};

export default Home;
