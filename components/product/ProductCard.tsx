import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/api";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-2xl border p-3 hover:shadow-xl transition duration-300 cursor-pointer">
        <div className="relative w-full h-40 mb-3">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug group-hover:text-black transition">
            {product.title}
          </h2>

          <p className="text-lg font-bold mt-2 text-black">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
