import styles from "./Styles_galerypage.module.css";
import React, { useEffect, useState } from "react";
import images from "../img.json";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

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
          name="all"
          handleSetTag={setTag}
          tagActive={tag === "all" ? true : false}
        />
        <TagButton
          name="hall"
          handleSetTag={setTag}
          tagActive={tag === "hall" ? true : false}
        />
        <TagButton
          name="living"
          handleSetTag={setTag}
          tagActive={tag === "living" ? true : false}
        />
        <TagButton
          name="kitchen"
          handleSetTag={setTag}
          tagActive={tag === "kitchen" ? true : false}
        />
        <TagButton
          name="bed"
          handleSetTag={setTag}
          tagActive={tag === "bed" ? true : false}
        />
        <TagButton
          name="office"
          handleSetTag={setTag}
          tagActive={tag === "office" ? true : false}
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

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`${styles.tag} ${tagActive ? styles.active : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Gallery;
