"use client"

import Image from "next/image";
import banner1 from "../app/img/Logo-Eufrosine-transparent.png"
import banner2 from "../app/img/banner2.png"
import banner3 from "../app/img/banner3.png"
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";
import NewsBanner from "./news-banner";
import SecondaryBanner from "./secondary-banner";
import { useRouter } from "next/navigation";
import { SiWhatsapp } from "react-icons/si";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


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
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full min-h-[550px] flex items-center px-5 py-5 md:py-0 md:px-14">
                <div className="relative w-full h-full mx-auto p-6 rounded-2xl justify-center overflow-hidden shadow-lg sm:py-20 sm:mb-24 2xl:mb-0 2xl:py-14">
                {/* VIDEO DE FONDO */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/app/video/gota.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>

                {/* CONTENIDO ENCIMA DEL VIDEO */}
                <div className="relative z-10 grid md:grid-cols-2 gap-10 lg:gap-0 md:justify-between md:items-center">
                {/* IMAGEN LOGO */}
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="md:hidden flex justify-center"
                >
                    <div className="flex w-full max-w-md z-10 justify-center">
                         <Image
                             src={banner1} // Reemplaza por tu imagen
                             width={100}
                             height={100}
                             alt="banner"
                             className="w-64 rounded-lg"
                             priority
                         />
                     </div>
                 </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-2xl grid gap-5 md:pl-28"
                    >
                    <div>
                        <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-blue-300">AGUA PURA</h2>
                        <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-blue-300">BIENESTAR EN TU VIDA</h2>
                    </div>
                    <div>
                        <p className="text-sm sm:text-base font-medium text-white">
                        Descubre la frescura y pureza en cada gota con Agua <span className="text-blue-300 dark:text-blue-300 text-lg">Eu<span className="text-md font-bold text-blue-300">Frosine</span></span>, tu fuente confiable de agua de mesa de alta calidad.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-row gap-2 md:gap-5"
                    >
                        <a href="https://api.whatsapp.com/send?phone=51903565918" target="_blank">
                        <Button className="text-sm sm:text-base dark:text-white bg-green-600 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 px-6">
                            <SiWhatsapp /> Solicitar ahora
                        </Button>
                        </a>
                        <Button
                        className="text-sm sm:text-base dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6"
                        onClick={() => router.push("/productos")}
                        >
                        Ir a tienda <BsArrowRight />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* IMAGEN LOGO */}
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="hidden md:flex justify-center py-4 sm:py-0"
                >
                       <div className="flex w-full max-w-md z-10 justify-center">
                           <Image
                            src={banner1} // Reemplaza por tu imagen
                             width={500}
                            height={500}
                            alt="banner"
                            className="w-full rounded-lg sm:max-w-[320px] 2xl:max-w-[600px]"
                            priority
                        />
                    </div>
                 </motion.div>
                </div>

                {/* CAPA OSCURA OPCIONAL */}
                <div className="absolute inset-0 bg-black/40 z-0" />
                </div>
            </motion.div>

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