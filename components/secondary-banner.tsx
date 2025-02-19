import { useEffect, useRef } from "react";
import bottle from "../app/img/bottle.json"

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
        <div className="w-full flex flex-col justify-center mx-auto py-10 pb-20 sm:pb-0 px-10 sm:px-0 sm:py-20 sm:gap-10 gap-5">
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="font-bold text-xl sm:text-3xl text-center">COMPOSICION DEL <span className="text-blue-800">AGUA</span></h2>
                <h3 className="font-semibold text-md sm:text-lg text-blue-600 italic text-center">¿QUE HAY DENTRO?</h3>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-3 justify-center items-center gap-5 sm:gap-0">
                <div className="flex flex-col justify-center text-start sm:text-end sm:pl-10 lg:pl-40 gap-5 sm:gap-10 text-sm">
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
                <div className="flex flex-col justify-center text-start sm:pr-10 lg:pr-40 gap-5 sm:gap-10 text-sm">
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
     );
}
 
export default SecondaryBanner;