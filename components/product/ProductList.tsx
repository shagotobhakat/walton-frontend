"use client";

import { useEffect, useState } from "react";
import { getProducts, Product } from "@/lib/api";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [availability, setAvailability] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const categoryMatch = category === "all" ? true : p.category === category;

    const availabilityMatch =
      availability === "all"
        ? true
        : availability === "in"
          ? p.stock > 0
          : p.stock === 0;

    return categoryMatch && availabilityMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  if (loading) {
    return <p className="p-10 text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">Explore Products</h1>
        <p className="text-gray-500 mt-2">
          Filter, sort and find your best products
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-2xl mb-10 flex flex-col md:flex-row gap-4 justify-center ">
        <div className="relative w-full md:w-56 ">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none border border-gray-300 bg-white px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition cursor-pointer ">
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            ▼
          </span>
        </div>

        <div className="relative w-full md:w-56">
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full appearance-none border border-gray-300 bg-white px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition cursor-pointer ">
            <option value="all">All</option>
            <option value="in">In Stock</option>
            <option value="out">Out of Stock</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            ▼
          </span>
        </div>

        <div className="relative w-full md:w-56">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full appearance-none border border-gray-300 bg-white px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition cursor-pointer ">
            <option value="">Sort By</option>
            <option value="low">Price Low to High</option>
            <option value="high">Price High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            ▼
          </span>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
