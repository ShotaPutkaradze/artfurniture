import React from "react";
import Slider from "react-slick";
import styles from "./Styles_sections.module.css";
import images from "../img.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects_section" className={styles.projects_section}>
      <div>
        <h3 className={styles.project_header}>
          უამრავი შესრულებული პროექტი და კმაყოფილი მომხმარებლები
        </h3>
      </div>

      <Slider {...settings} className={styles.galery}>
        {images.images.map((img, index) => (
          <figure className={styles.galery_img_box} key={index}>
            <img
              className={styles.galery_img}
              src={img.thumbnail}
              alt={img.thumbnail}
            ></img>
          </figure>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
