import { getProductById } from "@/lib/api";
import Image from "next/image";
import AddToCartButton from "../../../../components/AddToCartButton";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductById(id);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-80 rounded-2xl overflow-hidden shadow">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl font-bold mt-4">${product.price}</p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
