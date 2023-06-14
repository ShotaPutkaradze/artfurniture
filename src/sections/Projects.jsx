import GaleryImg from "../components/GaleryImg";
import styles from "./Styles_sections.module.css";

const Projects = () => {
  // return <ProductCategory />;
  return (
    <div id="projects_section" className={styles.projects_section}>
      <GaleryImg />
    </div>
  );
};

export default Projects;
