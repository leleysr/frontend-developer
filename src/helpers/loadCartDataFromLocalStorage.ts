export const loadCartDataFromLocalStorage = () => {
  const cart = localStorage.getItem("CartData");
  return cart ? JSON.parse(cart) : [];
};
