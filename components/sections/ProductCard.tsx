import { Product } from "@/types/product";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
    >
      <div className="w-full h-56 flex items-center justify-center bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-contain h-full w-auto"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex flex-col leading-none text-black mt-3">
          <span className="text-xs">Price Start from</span>
          <span className="font-bold text-lg">
            Rp {product.price.toLocaleString()}
          </span>
        </div>

        <button className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 cursor-pointer text-white rounded-md font-semibold transition duration-300">
          Ask for Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
