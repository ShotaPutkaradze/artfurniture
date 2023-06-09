import styles from "./Styles_sections.module.css";

const Services = () => {
  return (
    <section id="services_section" className={styles.services_section}>
      <iframe
        className={styles.video}
        id="video"
        name="video"
        title="video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/4t3lAuxqDR4?color=white"
      ></iframe>

      <div className={styles.services_list_conainer}>
        <p>
          <svg
            className={styles.services_icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.641 22.569l-5.641 1.431 1.397-5.674 4.244 4.243zm-2.829-5.657l4.243 4.243 16.945-16.913-4.242-4.242-16.946 16.912zm14.114-2.783l-1.414 1.414.708.708 1.414-1.414 1.414 1.414-2.122 2.122.707.707 2.122-2.122 1.417 1.385-2.829 2.829-4.232-4.233-1.415 1.413 5.648 5.648 5.656-5.657-5.643-5.643-1.431 1.429zm-9.887-4.261l-4.21-4.21 2.828-2.829 1.369 1.401-2.121 2.121.707.707 2.121-2.122 1.414 1.415-1.414 1.414.707.707 1.414-1.414 1.432-1.429-5.629-5.629-5.657 5.657 5.623 5.624 1.416-1.413z" />
          </svg>
          <span>ჩვენ დაგიმზადებთ:</span>
        </p>
        <ul>
          <li>შემოსასვლელის ავეჯს</li>
          <li>მისაღების ავეჯს</li>
          <li>სამზარეულოს ავეჯს</li>
          <li>საძინებელის ავეჯს</li>
          <li>საოფისე ავეჯს</li>
        </ul>
        {/* <p>შეკვეთა შესაძლებელია განვადებით (თიბისი და კრედო ბანკი)</p> */}
      </div>
    </section>
  );
};

export default Services;
