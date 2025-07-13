export const getCartItems = () => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

export const addToCart = (item) => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Adding item to cart:", item);
  }
  const currentItems = getCartItems();
  const updatedItems = [...currentItems, item];
  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
};
