import styles from "./Styles_galerypage.module.css";
import React, { useEffect, useState } from "react";
import images from "../img.json";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Gallery = (props) => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  let content = {
    Georgian: {
      tagButtonNameAll: "ყველა",
      tagButtonNameHall: "შემოსასვლელის ავეჯი",
      tagButtonNameKitchen: "სამზარეულოს ავეჯი",
      tagButtonNameBed: "საძინებლის ავეჯი",
      tagButtonNameOffice: "საოფისე ავეჯი",
      tagButtonNameOthers: "სხვა და სხვა",
    },
    English: {
      tagButtonNameAll: "All",
      tagButtonNameHall: "Hall",
      tagButtonNameKitchen: "Kitchen",
      tagButtonNameBed: "Bedroom",
      tagButtonNameOffice: "Office",
      tagButtonNameOthers: "Others",
    },
    Russian: {
      tagButtonNameAll: "Все",
      tagButtonNameHall: "Прихожая мебель",
      tagButtonNameKitchen: "Кухонная мебель",
      tagButtonNameBed: "Спальная vебель",
      tagButtonNameOffice: "Офисная мебель",
      tagButtonNameOthers: "Другие",
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
    if (tag === "all") {
      setFilteredImages(images.images);
    } else {
      setFilteredImages(images.images.filter((image) => image.tag === tag));
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
          handleSetTag={setTag}
          tagActive={tag === "living" ? true : false}
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
                  alt=""
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
