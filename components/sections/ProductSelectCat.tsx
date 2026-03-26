import React from "react";

const ProductSelectCat = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}) => {
  return (
    <div className="flex justify-center gap-8 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`relative text-lg cursor-pointer font-medium pb-2 transition-all after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${
            selectedCategory === category
              ? "text-black after:w-full"
              : "text-gray-500 hover:text-black after:w-0"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductSelectCat;
