"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"
import { FaBottleWater } from "react-icons/fa6";

export const DataCarouselTop = [
    {
        id: 1,
        name: "Bidon 20Lt a S/10.00",
        description: "Botella 10Lt a S/6.00",
        oferta: "Llevate el Pack a solo S/14.00",
        link: "#",
    },
    {
        id: 2,
        name: "Botella 10Lt a S/6.00",
        description: "Por la compra de 3 unidades",
        oferta: "Paga solo S/15.00",
        link: "#",
    },
    {
        id: 3,
        name: "Por la compra de 10 paquetes de Botella 600ml",
        description: "(1 paquete contiene 15 unidades)",
        oferta: "Te llevas 1 paquete más gratis",
        link: "#",
    },
];

const CarouselTextBanner = () => {

    const router = useRouter()

    return ( 
        <div className="bg-sky-200 dark:bg-sky-800">
            <Carousel className="w-full h-20 py-2 max-w-4xl mx-auto" plugins={[
                Autoplay({
                    delay: 6000
                })
            ]}>
                <CarouselContent>
                    {DataCarouselTop.map(({id, name, description, oferta, link}) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center items-center">
                                        <p className="flex flex-row justify-center items-center gap-2 text-sm sm:text-sm text-gray-500 dark:text-gray-200">
                                            <FaBottleWater />
                                            {name}
                                            <FaBottleWater />
                                            </p>
                                        <p className="flex flex-row justify-center items-center gap-2 text-sm sm:text-sm text-gray-500 dark:text-gray-200">
                                            <FaBottleWater />
                                            {description}
                                            <FaBottleWater />
                                        </p>
                                        <p className="text-sm sm:text-sm font-bold text-gray-800 dark:text-white">{oferta}</p>
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