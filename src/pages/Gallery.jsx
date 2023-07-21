import styles from "./Styles_galerypage.module.css";
import React, { useEffect, useState } from "react";
import images from "../img.json";

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    if (tag === "all") {
      setFilteredImages(images.images);
      console.log(images.images);
    } else {
      setFilteredImages(images.images.filter((image) => image.tag === tag));
      console.log("filter");
    }
  }, [tag]);

  return (
    <div className={styles.galery_section} handleSetTag={setTag}>
      <div className={styles.tags}>
        <TagButton name="all" handleSetTag={setTag} />
        <TagButton name="hall" handleSetTag={setTag} />
        <TagButton name="living" handleSetTag={setTag} />
        <TagButton name="kitchen" handleSetTag={setTag} />
        <TagButton name="bed" handleSetTag={setTag} />
        <TagButton name="office" handleSetTag={setTag} />
      </div>
      <div className={styles.container}>
        {filteredImages.map((image) => (
          <div className={styles.image_card} key={image.id}>
            <img
              className={styles.image}
              src={image.src_thumbnail}
              alt={image.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag }) => {
  return (
    <button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>
  );
};

export default Gallery;
