"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/lib/api";

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => {
        console.log("clicked");

        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        });
      }}
      className="mt-6 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
      Add to Cart
    </button>
  );
}
