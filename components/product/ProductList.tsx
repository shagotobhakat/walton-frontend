import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/api";

interface Product {
  id: string | number;
  title: string;
  price: number;
  thumbnail: string;
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="relative h-48">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold line-clamp-1">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">${product.price}</p>

              <button className="mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
