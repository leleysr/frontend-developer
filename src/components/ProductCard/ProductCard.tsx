import emptyStar from "../../assets/empty-star.svg";
import filledStar from "../../assets/filled-star.svg";
import flagOff from "../../assets/off-flag.svg";
import { formatPrice } from "../../helpers/formatPrice";
import { Product } from "../../types";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import styles from "./styles.module.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  if (!product) return <></>;
  return (
    <div className={styles["product-card-wrapper"]}>
      <a className={styles["product-card-link"]} href="/">
        <img
          className={styles["product-card-image"]}
          src={product.imageUrl}
          alt={`Imagem do produto: ${product.productName}`}
        />
        {product.listPrice &&
          product.price &&
          product.listPrice !== product.price && (
            <img
              className={styles["product-card-off-flag"]}
              src={flagOff}
              alt=""
            />
          )}

        <p className={styles["product-card-name"]}>{product.productName}</p>

        <p className={styles["product-card-stars"]}>
          {Array.from({ length: 5 }, (_, index) =>
            index < product.stars ? (
              <img src={filledStar} alt="" />
            ) : (
              <img src={emptyStar} alt="" />
            )
          )}
        </p>

        {product.listPrice && (
          <p className={styles["product-card-list-price"]}>
            de {formatPrice(product.listPrice)}
          </p>
        )}
        {product.price && (
          <p className={styles["product-card-price"]}>
            por {formatPrice(product.price)}
          </p>
        )}
        {product.installments && product?.installments?.[0]?.value > 0 && (
          <p className={styles["product-card-installments"]}>
            ou em {product?.installments?.[0]?.quantity ?? 0} de{" "}
            {formatPrice(product?.installments?.[0]?.value ?? 0)}
          </p>
        )}

        <AddToCartButton productId={product.productId}></AddToCartButton>
      </a>
    </div>
  );
}
