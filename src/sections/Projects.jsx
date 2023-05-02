import Categories from "../components/Categories";
import styles from "./Styles_sections.module.css";

const Projects = () => {
  // return <ProductCategory />;
  return (
    <div id="projects_section" className={styles.projects_section}>
      <Categories />
    </div>
  );
};

export default Projects;
