import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Walton Shop</h1>

      <p className="text-gray-600 mb-6 max-w-md">
        Explore a wide range of products with a clean and modern shopping
        experience.
      </p>

      <Link
        href="/products"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
        Browse Products
      </Link>
    </div>
  );
}
