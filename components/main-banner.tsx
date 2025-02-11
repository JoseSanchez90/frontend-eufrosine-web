"use client"

import Image from "next/image";
import hombreAnimado from "../app/img/hombre-animado.png"
import { Button } from "./ui/button";
import { BsArrowRight, BsCart } from "react-icons/bs";
import bottle from "../app/img/bottle.json"
import { useEffect, useRef } from "react";
import NewsBanner from "./news-banner";

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
            {/* BANNER PRINCIPAL */}
            <div className="w-full flex justify-center py-16 px-10 sm:py-10 sm:px-40">
                <div className="grid sm:grid-cols-2 gap-10 sm:gap-0 items-center mx-auto">
                    <div className="flex flex-col mx-auto gap-5">
                        <div>
                            <h2 className="text-xl sm:text-3xl font-bold text-blue-800 dark:text-blue-500">AGUA PURA</h2>
                            <h2 className="text-xl sm:text-3xl font-bold text-blue-800 dark:text-blue-500">BIENESTAR EN TU VIDA</h2>
                        </div>
                        <div>
                            <p className="text-sm sm:text-base font-medium">Descubre la frescura y pureza en cada gota con Agua <span className="text-blue-800 dark:text-blue-600 text-lg">Eu<span className="font-bold">Frosine</span></span>, tu fuente confiable de agua de mesa de alta calidad.</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <Button className="text-sm sm:text-base dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6">Ordenar ahora<BsCart/></Button>
                            <Button className="text-sm sm:text-base dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6">Conoce más<BsArrowRight/></Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={hombreAnimado} alt="vaso" width={500}></Image>
                    </div>
                </div>
            </div>

            {/* BANNER DOS */}
            <div className="w-full flex flex-col justify-center mx-auto py-10 px-5 sm:px-0 sm:py-20 sm:gap-10 gap-5">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h2 className="font-bold text-3xl">COMPOSICION DEL <span className="text-blue-800">AGUA</span></h2>
                    <h3 className="font-semibold text-lg text-blue-600 italic">¿QUE HAY DENTRO?</h3>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 justify-center items-center gap-5 sm:gap-0">
                    <div className="flex flex-col justify-center text-start sm:text-end sm:pl-40 gap-5 sm:gap-10 text-sm">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Calcio Ca2+</h3>
                            <p className="font-bold text-blue-600 dark:text-blue-400 text-md">240 mg/L</p>
                            <p className="font-medium text-xs dark:text-white">El calcio es un mineral esencial para la formación y mantenimiento de huesos y dientes.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Magnesio Mg2+</h3>
                            <p className="font-bold text-blue-600 dark:text-blue-400 text-md">42 mg/L</p>
                            <p className="font-medium text-xs dark:text-white">El magnesio es un nutriente importante para diversas funciones del cuerpo, incluyendo la función muscular y nerviosa.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Sodio Na+</h3>
                            <p className="font-bold text-blue-600 dark:text-blue-400 text-md">5.2 mg/L</p>
                            <p className="font-medium text-xs dark:text-white">El sodio es un electrolito que juega un papel en la regulación del equilibrio de líquidos y la función nerviosa y muscular.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center">
                        <div ref={animationContainer}></div>
                    </div>
                    <div className="flex flex-col justify-center text-start sm:pr-40 gap-5 sm:gap-10 text-sm">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Sulfato SO4(2-)</h3>
                            <p className="font-bold text-blue-600 dark:text-blue-400 text-md">400 mg/L</p>
                            <p className="font-medium text-xs dark:text-white">El sulfato es un macronutriente presente en las células y participa en diversas funciones metabólicas.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Nitrato NO3-</h3>
                            <p className="font-bold text-blue-600 dark:text-blue-400 text-md">4.4 mg/L</p>
                            <p className="font-medium text-xs dark:text-white">El nitrato es un compuesto que se encuentra en el agua y puede ser perjudicial en concentraciones elevadas. La imagen indica que es saludable beber agua con niveles de nitrato por debajo de 10 mg/L.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Bicarbonato HCO3-</h3>
                            <p className="font-bold text-blue-600 dark:text-blue-400 text-md">384 mg/L</p>
                            <p className="font-medium text-xs dark:text-white">El bicarbonato es un antiácido natural que ayuda a neutralizar el ácido estomacal y aliviar la acidez y la indigestión.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BANNER TRES */}
            <NewsBanner/>
        </>
     );
}
 
export default MainBanner;