import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiWhatsapp } from "react-icons/si"
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string
  description: string
  imageUrl: string
  price: number | null
  offerPrice?: number | null
}

export function ProductCard({ title, description, imageUrl, price, offerPrice }: ProductCardProps) {
  const discount = price && offerPrice ? Math.round((1 - offerPrice / price) * 100) : 0

  const formatPrice = (value: number | null) => {
    return value != null ? `S/ ${value.toFixed(2)}` : "N/A"
  }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    whileHover={{ scale: 1.05 }} // Efecto al pasar el mouse
    viewport={{ once: true }}>
    <Card className="w-[300px] overflow-hidden bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-950">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="bg-white"
        />
        {offerPrice && price && offerPrice < price && (
          <Badge className="absolute top-2 right-2 text-white bg-red-500">{discount}% Dscto</Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-blue-800 dark:text-blue-400">{title}</CardTitle>
        <CardDescription className="text-blue-900 dark:text-blue-100">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {offerPrice && price && offerPrice < price ? (
              <>
                <span className="text-lg text-blue-800 dark:text-blue-200 font-bold">{formatPrice(offerPrice)}</span>
                <span className="text-sm  font-semibold text-muted-foreground line-through">{formatPrice(price)}</span>
              </>
            ) : (
              <span className="text-lg text-blue-800 dark:text-blue-200 font-bold">{formatPrice(price)}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <a href="https://api.whatsapp.com/send?phone=51903565918" target="_blank"><Button className="text-sm sm:text-base dark:text-white bg-green-600 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 px-6"><SiWhatsapp/> Solicitar ahora</Button></a>
      </CardFooter>
    </Card>
    </motion.div>
  )
}