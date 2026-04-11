import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold">
        Walton Shop
      </Link>

      <div className="flex gap-4">
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/graphql" className="hover:underline">
          GraphQL
        </Link>
      </div>
    </div>
  );
}
