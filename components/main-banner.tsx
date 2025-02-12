"use client"

import Image from "next/image";
import hombreAnimado from "../app/img/hombre-animado.png"
import { Button } from "./ui/button";
import { BsArrowRight, BsCart } from "react-icons/bs";
import NewsBanner from "./news-banner";
import SecondaryBanner from "./secondary-banner";

const MainBanner = () => {

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
                            <p className="text-sm sm:text-base font-medium">Descubre la frescura y pureza en cada gota con Agua <span className="text-blue-800 dark:text-blue-600 text-lg">Eu<span className="text-md font-bold">Frosine</span></span>, tu fuente confiable de agua de mesa de alta calidad.</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <Button className="text-sm sm:text-base dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6">Ordenar ahora<BsCart/></Button>
                            <Button className="text-sm sm:text-base dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800 px-6">Conoce más<BsArrowRight/></Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={hombreAnimado} alt="vaso" className="sm:w-[500px] w-[300px]" priority />
                    </div>
                </div>
            </div>

            {/* BANNER DOS */}
            <SecondaryBanner/>

            {/* BANNER TRES */}
            <NewsBanner/>
        </>
     );
}
 
export default MainBanner;