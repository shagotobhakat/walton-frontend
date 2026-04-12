import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/api";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
        <div className="relative h-48 bg-gray-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold line-clamp-1">
            {product.title}
          </h2>

          <p className="text-gray-500 text-sm mt-1 capitalize">
            {product.category}
          </p>

          <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>

          <p className="text-lg font-bold mt-2 text-black">${product.price}</p>

          <p
            className={`text-xs mt-1 ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
