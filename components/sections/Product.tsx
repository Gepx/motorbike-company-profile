"use client";

import { products } from "@/data/products";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductSelectCat from "./ProductSelectCat";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("Matic");

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory,
  );
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <section className="w-full h-screen py-10" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Explore Our Motorcycles</h2>

          <p className="mt-2 text-gray-500">
            Discover the latest Honda models with the best offers and trusted
            service.
          </p>
        </div>

        <ProductSelectCat
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
