"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
// import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion";

const CompanyBanners = [
  {
    id: 1,
    image: '/app/img/company1.jpg',
  },
  {
    id: 2,
    image: '/app/img/company2.jpg',
  },
  {
    id: 3,
    image: '/app/img/company3.jpg',
  },
]

const Nosotros = () => {

  // const router = useRouter()

  return (

      <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeInOut" }} 
      className="grid grid-cols-1 xl:grid-cols-2 sm:py-10 py-5 gap-5 sm:gap-10 overflow-hidden">
        <motion.div
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        className="w-full sm:h-96 flex flex-col gap-5 justify-center px-5 sm:px-20">
            <h2 className="max-w-2xl text-xl sm:text-3xl font-bold text-center">QUIENES <span className="text-xl sm:text-3xl font-bold text-blue-800 dark:text-blue-500">SOMOS</span></h2>
            <p className="font-medium sm:text-base text-center">Somos una empresa que no solo representa una marca si no un estilo de vida saludable, en Eufrosine, garantizamos agua de mesa embotellada con los más altos estándares de calidad y pureza, cumpliendo con las exigencias del mercado peruano. Nuestra agua es más que una bebida, es: salud, bienestar y un recurso esencial para la vida. Purificada con tecnología avanzada: ultrafiltración, ósmosis inversa, esterilización ultravioleta y ozonización, asegurando frescura y confianza en cada gota.</p>
        </motion.div>
        <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1, delay: 1 }}
        className="flex justify-center bg-cover py-10">
          <Carousel opts={{align: "start"}} plugins={[Autoplay({delay: 4000})]} orientation="vertical" className="max-w-xl lg:max-w-2xl flex justify-center items-center">
            <CarouselContent className="-mt-1 w-[400px] h-[300px] sm:w-[600px] sm:h-[400px]">
              {CompanyBanners.map(({id, image}) => (
                <CarouselItem key={id} className="pt-1 sm:basis-1/2">
                  <div className="p-1">
                    <Card className="border-none">
                      <CardContent className="flex items-center justify-center p-1">
                        <Image src={image} alt="CompanyBanner" width={500} height={200} className="rounded-lg w-[250px] sm:w-[500px]" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </motion.div>

  )
  
}

export default Nosotros