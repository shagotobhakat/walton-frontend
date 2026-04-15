"use client";

import { useOptimistic, startTransition } from "react";
import { useCartStore } from "@/store/cartStore";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [optimisticCount, addOptimistic] = useOptimistic<number, number>(
    0,
    (state) => state + 1,
  );

  const handleAdd = () => {
    startTransition(() => {
      addOptimistic(1);
      addToCart(product);
    });
  };

  return (
    <button
      onClick={handleAdd}
      className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
      Add to Cart {optimisticCount > 0 && `(${optimisticCount})`}
    </button>
  );
}
