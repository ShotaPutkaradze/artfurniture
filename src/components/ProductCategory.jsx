import React from "react";
import styles from "./ProductCategory.module.css";
// import category1 from "../img/product category/categories-product1.webp";
// import category2 from "../img/product category/categories-product2.webp";
// import category3 from "../img/product category/categories-product3.webp";
// import category4 from "../img/product category/categories-product4.webp";
// import category5 from "../img/product category/categories-product5.webp";

function ProductCategory() {
  return (
    <div className={styles.category_text}>
      <h1>უამრავი შესრულებული პროექტი და კმაყოფილი მომხმარებლები</h1>
      {/* <div className={styles.category_container}>
        <div className={styles.category_item}>
          <button type="button">
            <img src={category1} alt="" />
          </button>
          <h2>სამზარუელობი</h2>
        </div>
        <div className={styles.category_item}>
          <button type="button">
            <img src={category2} alt="" />
          </button>
          <h2>საძინებლები</h2>
        </div>
        <div className={styles.category_item}>
          <button type="button">
            <img src={category3} alt="" />
          </button>
          <h2>კარადები</h2>
        </div>
        <div className={styles.category_item}>
          <button type="button">
            <img src={category4} alt="" />
          </button>
          <h2>ტელევიზორის კუთხე</h2>
        </div>
        <div className={styles.category_item}>
          <button type="button">
            <img src={category5} alt="" />
          </button>
          <h2>სამზარუელო</h2>
        </div>
      </div> */}
    </div>
  );
}

export default ProductCategory;
