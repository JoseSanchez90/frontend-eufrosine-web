"use client"

import Image from "next/image";
import banner1 from "../app/img/banner1.png"
import banner2 from "../app/img/banner2.png"
import banner3 from "../app/img/banner3.png"
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";
import NewsBanner from "./news-banner";
import SecondaryBanner from "./secondary-banner";
import { useRouter } from "next/navigation";
import { SiWhatsapp } from "react-icons/si";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";


const images = [banner1, banner2, banner3];

const MainBanner = () => {

    const router = useRouter()
    const [currentIndex, setCurrentIndex] = useState(0);

    // Efecto para cambiar de imagen automáticamente cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5000ms = 5 segundos

        return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, []);

    return ( 
        <>
            {/* BANNER PRINCIPAL */}
            <div className="w-full flex justify-center py-16 px-10 sm:py-10 sm:px-14 lg:px-20 2xl:px-40 2xl:py-24">
                <div className="grid sm:grid-cols-2 gap-10 lg:gap-0 items-center mx-auto">
                    <div className="flex flex-col mx-auto gap-5">
                        <div>
                            <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-blue-800 dark:text-blue-500">AGUA PURA</h2>
                            <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-blue-800 dark:text-blue-500">BIENESTAR EN TU VIDA</h2>
                        </div>
                        <div>
                            <p className="text-sm sm:text-base font-medium">Descubre la frescura y pureza en cada gota con Agua <span className="text-blue-800 dark:text-blue-600 text-lg">Eu<span className="text-md font-bold">Frosine</span></span>, tu fuente confiable de agua de mesa de alta calidad.</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <a href="https://api.whatsapp.com/send?phone=51903565918" target="_blank"><Button className="text-sm sm:text-base dark:text-white bg-green-600 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 px-6"><SiWhatsapp/> Solicitar ahora</Button>
                            </a>
                            <Button className="text-sm sm:text-base dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6" onClick={() => router.push("/productos")}>Ir a tienda <BsArrowRight/></Button>
                        </div>
                    </div>
                    {/* Carrusel de banners */}
                    <div className="flex justify-center py-10 sm:py-0">
                        <Carousel className="w-full max-w-md">
                            <CarouselContent
                                className="transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {images.map((image, index) => (
                                    <CarouselItem key={index} className="flex justify-center">
                                        <Image src={image} alt={`banner-${index}`} className="w-full rounded-lg" priority />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* BANNER DOS */}
            <SecondaryBanner/>

            {/* BANNER TRES */}
            <div className="md:mt-16">
                <NewsBanner/>
            </div>  
        </>
     );
}
 
export default MainBanner;