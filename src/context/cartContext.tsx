import { createContext, ReactNode, useContext, useState } from "react";
import { loadCartDataFromLocalStorage } from "../helpers/loadCartDataFromLocalStorage";
import { CartData } from "../types";

interface CartProviderData {
  cart: CartData[];
  setCart: React.Dispatch<React.SetStateAction<CartData[]>>;
}

interface CartProviderProps {
  children: ReactNode;
}
const CartContext = createContext<CartProviderData | undefined>(undefined);

// Provedor do contexto
export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartData[]>(loadCartDataFromLocalStorage());

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  const { cart, setCart } = context;

  return { cart, setCart };
}
