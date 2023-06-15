import styles from "./Styles_sections.module.css";

const Projects = () => {
  // return <ProductCategory />;
  return (
    <div id="projects_section" className={styles.projects_section}>
      <div>
        <h3 className={styles.project_header}>
          უამრავი შესრულებული პროექტები და კმაყოფილი მომხმარებლები
        </h3>
      </div>
      <div className={styles.galery}>
        <figure className={styles.galery_item}>
          <img alt="photo1" src={require("../img/galery/IMG1.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo2" src={require("../img/galery/IMG2.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo3" src={require("../img/galery/IMG3.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo4" src={require("../img/galery/IMG4.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo5" src={require("../img/galery/IMG5.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo6" src={require("../img/galery/IMG6.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo7" src={require("../img/galery/IMG7.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo8" src={require("../img/galery/IMG8.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo9" src={require("../img/galery/IMG9.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo10" src={require("../img/galery/IMG10.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo11" src={require("../img/galery/IMG11.WEBP")}></img>
        </figure>
        <figure className={styles.galery_item}>
          <img alt="photo12" src={require("../img/galery/IMG12.WEBP")}></img>
        </figure>
      </div>
    </div>
  );
};

export default Projects;
