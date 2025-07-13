import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router";

export default function Cart() {
  const { items, getCartTotal, clearCart, getCartCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-secondary font-primary mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-6 font-secondary">
            Looks like you haven't added any books to your cart yet.
          </p>
          <Link to="/store">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary font-primary mb-8">
        Shopping Cart ({getCartCount()} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            {items.map((item) => (
              <CartItem key={item._id || item.id} item={item} />
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <Link to="/store">
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Continue Shopping
              </button>
            </Link>
            <button
              className="text-red-600 border border-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-medium transition"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
            <h2 className="text-xl font-bold text-secondary font-primary mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="font-secondary">Subtotal:</span>
                <span className="font-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-secondary">Shipping:</span>
                <span className="font-primary">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-secondary">Tax:</span>
                <span className="font-primary">${tax.toFixed(2)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg font-bold">
                <span className="font-primary">Total:</span>
                <span className="font-primary text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <Link to="/checkout">
              <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary transition mb-3">
                Proceed to Checkout
              </button>
            </Link>

            <p className="text-xs text-gray-500 text-center font-secondary">
              Secure checkout with SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
