export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description?: string;
  category: string;
  rating: number;
  stock: number;
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

export async function getProductById(id: string) {
  if (!id) throw new Error("Invalid product ID");

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
