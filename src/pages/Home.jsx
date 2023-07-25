import React, { useEffect } from "react";
import styles from "./Styles_homepage.module.css";
import images from "../img.json";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { LuMailOpen } from "react-icons/lu";
import { TbRuler } from "react-icons/tb";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#my-gallery`,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

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
    <>
      <section id="home_section" className={styles.home_section}>
        <div className={styles.home_text_container}>
          <div className={styles.welcome_texts}>
            <h1>ავეჯის დამზადება ბათუმში</h1>
            <h2>ინდივიდუალური ზომები და დიზაინი</h2>
            <h2> თანამედროვე მასალები</h2>
            <h2>აზომვითი სამუშაოები</h2>
            <h2>ნახაზისა და 3D დიზაინის დამზადება</h2>
            <NavLink className={styles.contact_btn} to={"contact"}>
              მოგვწერეთ <LuMailOpen className={styles.contact_btn_icon} />
            </NavLink>
          </div>
          <div className={styles.cover}></div>
        </div>
      </section>

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
            <TbRuler className={styles.services_icon} />
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

      <section id="projects_section" className={styles.projects_section}>
        <div>
          <h3 className={styles.project_header}>
            უამრავი შესრულებული პროექტი და კმაყოფილი მომხმარებლები
          </h3>
        </div>
        <div className="pswp-gallery" id="my-gallery">
          <Slider {...settings} className={styles.galery}>
            {images.images.map((image, index) => (
              <div
                className={styles.galery_img_box}
                key={"my-gallery-" + index}
              >
                <a
                  href={image.src}
                  data-pswp-width={image.width}
                  data-pswp-height={image.height}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={styles.galery_img}
                    src={image.src_thumbnail}
                    alt=""
                  ></img>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
