import { useState } from "react";
import { useCart } from "../../context/cartContext";
import { CartData } from "../../types";
import { Spinner } from "../Spinner/Spinner";
import styles from "./styles.module.css";

interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { setCart } = useCart();

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoading(true);
    event.stopPropagation();
    event.preventDefault();

    const cart = localStorage.getItem("CartData");

    const cartParsed = cart ? JSON.parse(cart) : [];

    const existingProductIndex = cartParsed.findIndex(
      (item: CartData) => Number(item.id) === productId
    );

    if (existingProductIndex !== -1) {
      cartParsed[existingProductIndex].quantity++;
    } else {
      cartParsed.push({ id: productId, quantity: 1 });
    }

    setCart(cartParsed);
    localStorage.setItem("CartData", JSON.stringify(cartParsed));

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={styles["add-to-cart-button-wrapper"]}>
      <button
        onClick={(e) => handleAddToCart(e)}
        className={styles["add-to-cart-button"]}
      >
        {isLoading ? <Spinner></Spinner> : "COMPRAR"}
      </button>
    </div>
  );
}
