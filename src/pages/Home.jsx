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

const Home = (props) => {
  let content = {
    Georgian: {
      headerText: "ავეჯის დამზადება ბათუმში",
      headetDescLine1: "ინდივიდუალური ზომები და დიზაინი",
      headetDescLine2: "თანამედროვე მასალები",
      headetDescLine3: "აზომვითი სამუშაოები ",
      headetDescLine4: "ნახაზისა და 3D დიზაინის დამზადება",
      buttonText: "მოგვწერეთ",
    },
    English: {
      headerText: "Furniture making in Batumi",
      headetDescLine1: "Individual sizes and designs",
      headetDescLine2: "Modern materials",
      headetDescLine3: "Measuring jobs",
      headetDescLine4: "Drafting and 3D design",
      buttonText: "Get in touch",
    },
    Russian: {
      headerText: "Изготовление мебели в Батуми",
      headetDescLine1: "Индивидуальные размеры и дизайн",
      headetDescLine2: "Современные материалы",
      headetDescLine3: "Измерительные работы",
      headetDescLine4: "Чертеж и 3D дизайн",
      buttonText: "Напишите нам",
    },
  };

  if (props.language === "Georgian") {
    content = content.Georgian;
  } else if (props.language === "English") {
    content = content.English;
  } else if (props.language === "Russian") {
    content = content.Russian;
  }

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
    autoplaySpeed: 800,
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
            <h1>{content.headerText}</h1>
            <h2>{`${content.headetDescLine1}`}</h2>
            <h2>{`${content.headetDescLine2}`}</h2>
            <h2>{`${content.headetDescLine3}`}</h2>
            <h2>{`${content.headetDescLine4}`}</h2>
            <NavLink className={styles.contact_btn} to={"contact"}>
              {content.buttonText}
              <LuMailOpen className={styles.contact_btn_icon} />
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
