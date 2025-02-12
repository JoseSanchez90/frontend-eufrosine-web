"use client"

import { ProductCard } from "@/components/productCard"

const Products = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center sm:gap-5 sm:pt-10">
      <h1 className="text-xl sm:text-3xl font-bold text-center mb-8">NUESTROS <span className="text-xl sm:text-3xl font-bold text-blue-800 dark:text-blue-500">PRODUCTOS</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProductCard
          title="Botella 1"
          description="Descripcion Botella 1."
          imageUrl="/app/img/bottle.png"
          price={6.90}
          offerPrice={4.90}
        />
        <ProductCard
          title="Botella 2"
          description="Descripcion Botella 2."
          imageUrl="/app/img/bottle.png"
          price={12.90}
          offerPrice={9.90}
        />
        <ProductCard
          title="Bidon 1"
          description="Descripcion Bidon 1."
          imageUrl="/app/img/bottle.png"
          price={29.90}
          offerPrice={19.90}
        />
        <ProductCard
          title="Bidon 2"
          description="Descripcion Bidon 2."
          imageUrl="/app/img/bottle.png  "
          price={25.90}
          offerPrice={null}
        />
      </div>
    </main>
  )
}

export default Products
