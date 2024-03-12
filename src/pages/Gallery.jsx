import styles from "./Styles_galerypage.module.css";
import React, { useEffect, useState } from "react";
import images from "../img.json";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Gallery = (props) => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  let content = {
    GE: {
      tagButtonNameAll: "ყველა",
      tagButtonNameHall: "შემოსასვლელის ავეჯი",
      tagButtonNameKitchen: "სამზარეულოს ავეჯი",
      tagButtonNameBed: "საძინებლის ავეჯი",
      tagButtonNameOffice: "საოფისე ავეჯი",
      tagButtonNameOthers: "სხვა და სხვა",
    },
    EN: {
      tagButtonNameAll: "All",
      tagButtonNameHall: "Hall",
      tagButtonNameKitchen: "Kitchen",
      tagButtonNameBed: "Bedroom",
      tagButtonNameOffice: "Office",
      tagButtonNameOthers: "Others",
    },
    RU: {
      tagButtonNameAll: "Все",
      tagButtonNameHall: "Прихожая мебель",
      tagButtonNameKitchen: "Кухонная мебель",
      tagButtonNameBed: "Спальная vебель",
      tagButtonNameOffice: "Офисная мебель",
      tagButtonNameOthers: "Другие",
    },
  };

  if (props.language === "GE") {
    content = content.GE;
  } else if (props.language === "EN") {
    content = content.EN;
  } else if (props.language === "RU") {
    content = content.RU;
  }

  useEffect(() => {
    if (tag === "all") {
      setFilteredImages(images.images);
    } else {
      setFilteredImages(
        images.images.filter((image) => image.tag.includes(tag))
      );
    }
  }, [tag]);

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

  return (
    <div className={styles.galery} handleSetTag={setTag}>
      <div className={styles.tags}>
        <TagButton
          name={content.tagButtonNameAll}
          value="all"
          handleSetTag={setTag}
          tagActive={tag === "all" ? true : false}
        />
        <TagButton
          name={content.tagButtonNameHall}
          value="hall"
          handleSetTag={setTag}
          tagActive={tag === "hall" ? true : false}
        />

        <TagButton
          name={content.tagButtonNameKitchen}
          value="kitchen"
          handleSetTag={setTag}
          tagActive={tag === "kitchen" ? true : false}
        />
        <TagButton
          name={content.tagButtonNameBed}
          value="bed"
          handleSetTag={setTag}
          tagActive={tag === "bed" ? true : false}
        />
        <TagButton
          name={content.tagButtonNameOffice}
          value="office"
          handleSetTag={setTag}
          tagActive={tag === "office" ? true : false}
        />
        <TagButton
          name={content.tagButtonNameOthers}
          value="others"
          handleSetTag={setTag}
          tagActive={tag === "others" ? true : false}
        />
      </div>
      <div>
        <div
          className={`${styles.container} ${"pswp-gallery"}`}
          id="my-gallery"
        >
          {filteredImages.map((image, index) => (
            <div className={styles.image_card} key={"my-gallery-" + index}>
              <a
                href={image.src}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.image}
                  src={image.src_thumbnail}
                  alt="ავეჯის დამზადება ბათუმში"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TagButton = ({ name, value, handleSetTag, tagActive }) => {
  return (
    <button
      className={`${styles.tag} ${tagActive ? styles.active : null}`}
      onClick={() => handleSetTag(value)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Gallery;
