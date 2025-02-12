import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
    <Card className="w-[300px] overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
        {offerPrice && price && offerPrice < price && (
          <Badge className="absolute top-2 right-2 bg-red-500">{discount}% Descuento</Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {offerPrice && price && offerPrice < price ? (
              <>
                <span className="text-2xl font-bold">{formatPrice(offerPrice)}</span>
                <span className="text-sm text-muted-foreground line-through">{formatPrice(price)}</span>
              </>
            ) : (
              <span className="text-2xl font-bold">{formatPrice(price)}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Solicitar</Button>
      </CardFooter>
    </Card>
  )
}