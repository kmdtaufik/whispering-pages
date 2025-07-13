import React from "react";
import { useCart } from "../../context/CartContext";
import Iconify from "../Iconify/Iconify";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item._id || item.id);
    } else {
      updateQuantity(item._id || item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <img
        src={item.productThumbnail || item.image}
        alt={item.productName || item.title}
        className="w-16 h-20 object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-sm font-primary text-secondary">
          {item.productName || item.title}
        </h3>
        <p className="text-xs text-gray-600 font-secondary">
          By: {item.brand || item.author}
        </p>
        {item.productDescription && (
          <p className="text-xs text-gray-500 font-secondary line-clamp-1">
            {item.productDescription}
          </p>
        )}
        <p className="text-sm font-bold text-primary font-primary">
          ${item.productPrice || item.price}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <Iconify icon="mingcute:minus-line" className="text-xs" />
        </button>

        <span className="text-sm font-medium w-8 text-center">
          {item.quantity}
        </span>

        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <Iconify icon="mingcute:add-line" className="text-xs" />
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item._id || item.id)}
        className="text-red-500 hover:text-red-700 p-1"
      >
        <Iconify icon="mingcute:delete-2-line" className="text-lg" />
      </button>
    </div>
  );
};

export default CartItem;
