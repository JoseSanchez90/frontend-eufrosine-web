"use client"

import { ProductCard } from "@/components/productCard"

const Products = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center sm:gap-5 sm:pt-10">
      <h1 className="text-xl sm:text-3xl font-bold text-center mb-8">NUESTROS <span className="text-xl sm:text-3xl font-bold text-blue-800 dark:text-blue-500">PRODUCTOS</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProductCard
          title="Envase 625ml"
          description="Ideal para llevar a cualquier lado, práctico y refrescante."
          imageUrl="/app/img/bottle.png"
          price={6.90}
          offerPrice={4.90}
        />
        <ProductCard
          title="Envase 3Lt"
          description="Perfecto para el hogar, compartir con la familia o la oficina."
          imageUrl="/app/img/bottle.png"
          price={12.90}
          offerPrice={9.90}
        />
        <ProductCard
          title="Envase 10Lt"
          description="Gran capacidad para familias y negocios."
          imageUrl="/app/img/bottle.png"
          price={29.90}
          offerPrice={19.90}
        />
        <ProductCard
          title="Envase 20Lt"
          description="El tamaño ideal para consumo diario y dispensadores."
          imageUrl="/app/img/bottle.png"
          price={25.90}
          offerPrice={null}
        />
      </div>
    </main>
  )
}

export default Products
