"use client"

import { ProductCard } from "@/components/productCard"
import { motion } from "framer-motion";

const Products = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center sm:gap-5 sm:pt-10">
      <motion.h1
       initial={{ opacity: 0, y: -20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
       viewport={{ once: true }}
       className="text-xl sm:text-3xl font-bold text-center mb-8">NUESTROS <span className="text-xl sm:text-3xl font-bold text-blue-800 dark:text-blue-500">PRODUCTOS</span>
      </motion.h1>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProductCard
          title="Botella 500ml"
          description="Ideal para llevar a cualquier lado, práctico y refrescante."
          imageUrl="/app/img/prod1.png"
          price={6.90}
          offerPrice={4.90}
        />
        <ProductCard
          title="Botella 3Lt"
          description="Perfecto para el hogar, compartir con la familia o la oficina."
          imageUrl="/app/img/prod2.png"
          price={12.90}
          offerPrice={9.90}
        />
        <ProductCard
          title="Botella 10Lt"
          description="Gran capacidad para familias y negocios."
          imageUrl="/app/img/prod3.png"
          price={29.90}
          offerPrice={19.90}
        />
        <ProductCard
          title="Bidon 20Lt"
          description="El tamaño ideal para consumo diario y dispensadores."
          imageUrl="/app/img/prod4.png"
          price={25.90}
          offerPrice={null}
        />
      </motion.div>
    </main>
  )
}

export default Products
