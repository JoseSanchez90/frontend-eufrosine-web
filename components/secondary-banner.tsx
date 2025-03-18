import { useEffect, useRef } from "react";
import bottle from "../app/img/bottle.json"
import { motion } from "framer-motion";

const SecondaryBanner = () => {

    const animationContainer = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<any>(null); // Guarda la instancia de la animación

    useEffect(() => {
        import("lottie-web").then((lottie) => {
            if (animationContainer.current && !animationInstance.current) {
                animationInstance.current = lottie.default.loadAnimation({
                    container: animationContainer.current,
                    animationData: bottle,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                });
            }
        });

        return () => {
            // Limpiar la animación cuando el componente se desmonta
            if (animationInstance.current) {
                animationInstance.current.destroy();
                animationInstance.current = null;
            }
        };
    }, []);


    return ( 
        <div className="w-full flex flex-col justify-center mx-auto py-10 pb-20 sm:pb-0 px-10 sm:px-0 sm:py-20 sm:gap-10 gap-5 overflow-hidden">
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center gap-2">
                <h2 className="font-bold text-xl sm:text-3xl text-center">PROCESO DE PURIFICACION <span className="text-blue-800">DEL AGUA</span></h2>
                <h3 className="font-semibold text-md sm:text-lg text-blue-600 italic text-center">¿QUÉ HAY DENTRO DE CADA BOTELLA?</h3>
                <p className="font-semibold text-sm text-gray-600 italic text-center">Nuestro sistema de purificación garantiza agua pura y segura mediante un proceso avanzado que elimina impurezas, olores y sabores no deseados</p>
                <p className="font-semibold text-sm text-gray-600 italic text-center"><span className="text-blue-800">Resultado:</span> Agua de mesa de alta calidad, libre de impurezas y con un sabor puro y refrescante.</p>
            </motion.div>
            <div className="flex flex-col sm:grid sm:grid-cols-3 justify-center items-center gap-5 sm:gap-0">
                <motion.div
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center text-start sm:text-end sm:pl-10 lg:pl-40 gap-5 sm:gap-10 text-sm">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Filtro Multimedia</h3>
                        {/* <p className="font-bold text-blue-600 dark:text-blue-400 text-md">240 mg/L</p> */}
                        <p className="font-medium text-xs dark:text-white">Elimina sedimentos como arena, arcilla y partículas suspendidas.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Filtro de Carbón Activado</h3>
                        {/* <p className="font-bold text-blue-600 dark:text-blue-400 text-md">42 mg/L</p> */}
                        <p className="font-medium text-xs dark:text-white">Absorbe el cloro, compuestos orgánicos y mejora el sabor y olor del agua.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Ablandador Industrial</h3>
                        {/* <p className="font-bold text-blue-600 dark:text-blue-400 text-md">5.2 mg/L</p> */}
                        <p className="font-medium text-xs dark:text-white">Reduce la dureza del agua eliminando calcio y magnesio, previniendo incrustaciones.</p>
                    </div>
                </motion.div>
                <div className="flex justify-center items-center text-center">
                    <div ref={animationContainer}></div>
                </div>
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center text-start sm:pr-10 lg:pr-40 gap-5 sm:gap-10 text-sm">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Ósmosis Inversa</h3>
                        {/* <p className="font-bold text-blue-600 dark:text-blue-400 text-md">400 mg/L</p> */}
                        <p className="font-medium text-xs dark:text-white">Remueve hasta el 99% de sales, bacterias, virus y metales pesados, garantizando agua de alta pureza.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Generador de Ozono</h3>
                        {/* <p className="font-bold text-blue-600 dark:text-blue-400 text-md">4.4 mg/L</p> */}
                        <p className="font-medium text-xs dark:text-white">Desinfecta el agua eliminando microorganismos y proporcionando una mayor seguridad microbiológica.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-blue-900 dark:text-blue-600 text-lg">Luz Ultravioleta (UV)</h3>
                        {/* <p className="font-bold text-blue-600 dark:text-blue-400 text-md">384 mg/L</p> */}
                        <p className="font-medium text-xs dark:text-white">Esteriliza el agua eliminando bacterias y virus sin alterar su composición.</p>
                    </div>
                </motion.div>
            </div>
        </div>
     );
}
 
export default SecondaryBanner;