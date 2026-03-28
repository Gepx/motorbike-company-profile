"use client";

import { products } from "@/data/products";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductSelectCat from "./ProductSelectCat";
import { motion, AnimatePresence } from "motion/react";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("Matic");

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory,
  );
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <section className="w-full min-h-screen pb-20 pt-10" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Explore Our Motorcycles</h2>

          <p className="mt-2 text-gray-500">
            Discover the latest Honda models with the best offers and trusted
            service.
          </p>
        </motion.div>

        <ProductSelectCat
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Product Cards with AnimatePresence for category switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: index * 0.1,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Product;
