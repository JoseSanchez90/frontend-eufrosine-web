"use client"

import Image from "next/image";
import hombreAnimado from "../app/img/hombre-animado.png"
import { Button } from "./ui/button";
import { BsArrowRight, BsCart } from "react-icons/bs";
import lottie from "lottie-web"
import bottle from "../app/img/bottle.json"
import { useEffect, useRef } from "react";

const MainBanner = () => {

    const animationContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Importación dinámica: se carga lottie-web solo en el cliente
        import("lottie-web").then((lottie) => {
          if (animationContainer.current) {
            lottie.default.loadAnimation({ // lottie.default si es una importación dinámica
              container: animationContainer.current,
              animationData: bottle, // Tu archivo JSON de Lottie
              renderer: "svg",
              loop: true,
              autoplay: true,
            });
          }
        });
      }, []);

    return ( 
        <>
            <div className="w-full flex justify-center pb-40">
                <div className="grid grid-cols-2 items-center mx-auto px-40">
                    <div className="flex flex-col mx-auto gap-5">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-500">AGUA PURA</h2>
                            <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-500">BIENESTAR EN TU VIDA</h2>
                        </div>
                        <div>
                            <p className="font-medium dar:text-white">Descubre la frescura y pureza en cada gota con Agua <span className="text-blue-800 dark:text-blue-600 text-lg">Eu<span className="font-bold">Frosine</span></span>, tu fuente confiable de agua de mesa de alta calidad.</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <Button className="dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6">Ordenar ahora<BsCart/></Button>
                            <Button className="dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6">Conoce más<BsArrowRight/></Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={hombreAnimado} alt="vaso" width={500}></Image>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center pb-40 gap-20">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h2 className="font-bold text-3xl">COMPOSICION DEL <span className="text-blue-800">AGUA</span></h2>
                    <h3 className="font-bold text-lg text-blue-600 italic">¿QUE HAY DENTRO?</h3>
                </div>
                <div className="grid grid-cols-3 justify-center items-center px-40">
                        <div className="flex flex-col justify-center text-end mx-20 gap-10 text-sm">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Calcio Ca2+</h3>
                                <p className="font-bold text-blue-600 dark:text-blue-400 text-md">240 mg/L</p>
                                <p className="font-medium text-xs dark:text-white">Alrededor del 99% del calcio en nuestros cuerpos está en nuestros huesos y dientes.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Magnesio Mg2+</h3>
                                <p className="font-bold text-blue-600 dark:text-blue-400 text-md">42 mg/L</p>
                                <p className="font-medium text-xs dark:text-white">El magnesio es un nutriente que el cuerpo necesita para mantenerse saludable.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Sodio Na+</h3>
                                <p className="font-bold text-blue-600 dark:text-blue-400 text-md">5.2 mg/L</p>
                                <p className="font-medium text-xs dark:text-white">Es un componente importante para la función muscular y nerviosa adecuada.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div ref={animationContainer}></div>
                        </div>
                        <div className="flex flex-col justify-center text-start mx-20 gap-10 text-sm">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Sulfato SO4(2-)</h3>
                                <p className="font-bold text-blue-600 dark:text-blue-400 text-md">400 mg/L</p>
                                <p className="font-medium text-xs dark:text-white">El sulfato se encuentra entre los macronutrientes más importantes en las células.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Nitrato NO3-</h3>
                                <p className="font-bold text-blue-600 dark:text-blue-400 text-md">4.4 mg/L</p>
                                <p className="font-medium text-xs dark:text-white">Es genial para la salud beber agua con niveles de nitrato por debajo de 10 mg/L.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Bicarbonato</h3>
                                <p className="font-bold text-blue-600 dark:text-blue-400 text-md">384 mg/L</p>
                                <p className="font-medium text-xs dark:text-white">El bicarbonato es un antiácido que se usa para aliviar la acidez estomacal y la indigestión ácida.</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
     );
}
 
export default MainBanner;