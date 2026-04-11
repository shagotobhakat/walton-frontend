"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartIndicator() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="fixed top-20 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg z-10">
         0
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-5 bg-white text-black p-4 rounded-2xl shadow-xl w-80 border z-10">
      <h2 className="font-bold text-lg mb-3">Cart ({totalQuantity})</h2>

      <div className="space-y-3 max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-sm border-b pb-2">
            <span className="line-clamp-1 w-32">{item.title}</span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 px-2 rounded hover:bg-gray-300">
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    thumbnail: item.thumbnail,
                  })
                }
                className="bg-gray-200 px-2 rounded hover:bg-gray-300">
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 rounded hover:bg-red-600">
                x
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={clearCart}
        className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
        Clear Cart
      </button>
    </div>
  );
}
