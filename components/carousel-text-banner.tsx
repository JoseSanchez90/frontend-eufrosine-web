"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const DataCarouselTop = [
    {
        id: 1,
        name: "Bidon 20Lt a S/10.00",
        description: "Botella 10Lt a S/6.00",
        oferta: "Llevate el Pack a solo S/14.00",
    },
    {
        id: 2,
        name: "Botella 10Lt a S/6.00",
        description: "Por la compra de 3 unidades",
        oferta: "Paga solo S/15.00",
    },
    {
        id: 3,
        name: "Por la compra de 10 paquetes de Botella 600ml",
        description: "(1 paquete contiene 15 unidades)",
        oferta: "Te llevas 1 paquete más gratis",
    },
];

const CarouselTextBanner = () => {

    const router = useRouter()

    return ( 
        <div className="w-full bg-sky-100 dark:bg-sky-800">
            <Carousel className="w-full py-2 max-w-5xl mx-auto" plugins={[
                Autoplay({
                    delay: 6000,
                })
            ]}>
                <CarouselContent>
                    {DataCarouselTop.map(({id, name, description, oferta}) => (
                        <CarouselItem key={id} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center items-center">
                                        <p className="flex flex-row justify-center items-center gap-2 text-sm sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {name}
                                            </p>
                                        <p className="flex flex-row justify-center items-center gap-2 text-sm sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {description}
                                        </p>
                                        <p className="text-sm sm:text-sm font-medium text-gray-800 dark:text-white">
                                            {oferta}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>  
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default CarouselTextBanner;