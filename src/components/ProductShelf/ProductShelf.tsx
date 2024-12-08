import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./styles.module.css";

const splideOptions = {
  type: "loop",
  width: "100%",
  perMove: 1,
  pagination: false,
  arrows: true,
  perPage: 4,
  gap: 16,
  breakpoints: {
    1024: {
      perPage: 2,
      pagination: true,
      arrows: false,
    },
  },
  drag: true,
  classes: {
    pagination: `splide__pagination splide__pagination--ltr ${styles["product-shelf-pagination"]}`,
    page: `splide__pagination__page ${styles["product-shelf-page"]}`,
    arrows: `splide__arrows your-class-arrows ${styles["product-shelf-arrows"]}`,
    arrow: `splide__arrow your-class-arrow ${styles["product-shelf-arrow"]}`,
    prev: `splide__arrow--prev your-class-prev ${styles["product-shelf-arrow-prev"]}`,
    next: `splide__arrow--next your-class-next ${styles["product-shelf-next-next"]}`,
  },
};

export function ProductShelf() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://corebiz-test-server.onrender.com/api/v1/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <div className={styles["product-shelf-wrapper"]}>
      <div className={styles["product-shelf-title-wrapper"]}>
        <h3 className={styles["product-shelf-title"]}>Mais vendidos</h3>
      </div>

      <div className={styles["product-shelf-splide-wrapper"]}>
        {products && products.length > 0 ? (
          <Splide
            id="ProductShelfSlider"
            options={splideOptions}
            hasTrack={false}
          >
            <SplideTrack className={styles["product-shelf-splide-track"]}>
              {products.map((product) => {
                return (
                  <SplideSlide key={product.productId}>
                    <ProductCard product={product}></ProductCard>
                  </SplideSlide>
                );
              })}
            </SplideTrack>
          </Splide>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
