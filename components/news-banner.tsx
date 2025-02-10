"use client"

import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { useRouter } from "next/navigation";


const CarouselBanner = [
    {
        id: 1,
        image: '/app/img/agua.png',
        name: "Científicos descubren nueva forma de purificar agua con luz solar y grafeno",
        description: "Un equipo de investigadores de la Universidad Monash en Australia ha dado un paso significativo hacia una solución eficaz. Desarrollaron un material que puede purificar agua de mar en solo media hora.",
        link: 'https://okdiario.com/ciencia/cientificos-descubren-nuevo-metodo-purificar-agua-forma-economica-13289258'
    },
    {
        id: 2,
        image: '/app/img/planeta.png',
        name: "La NASA descubre agua en un exoplaneta potencialmente habitable",
        description: "El telescopio espacial James Webb protagonizó otro gran hallazgo. Encontró rastros de agua en la atmósfera de un exoplaneta gigante llamado WASP-18b, que está ubicado a 400 años luz de la Tierra.",
        link: 'https://cnnespanol.cnn.com/video/nasa-agua-atmosfera-exoplaneta-perspectivas-buenos-aires#:~:text=Encontr%C3%B3%20rastros%20de%20agua%20en,mayor%20que%20la%20de%20J%C3%BApiter'
    },
    {
        id: 3,
        image: '/app/img/lluvia.jpg',
        name: "Estudio revela que el agua de lluvia contiene niveles de PFAS para siempre",
        description: "Los compuestos químicos para siempre, o PFAS, están presentes en el agua de lluvia según muestra un estudio científico en Miami. Estos compuestos influyen en la salud de las personas e impactan en los ecosistemas marinos y terrestres.",
        link: 'https://www.tiempo.com/ram/luvia-compuestos-quimicos-eternos-pfas.html'
    },
    {
        id: 4,
        image: '/app/img/agricultura.jpg',
        name: "Innovador sistema de riego reduce el consumo de agua en la agricultura",
        description: "La tecnificación de riego incrementa el ahorro del agua además mejora las condiciones agro-ecológicas, al aplicar al cultivo el agua que requiere en cantidad, calidad y oportunidad para optimizar la producción.",
        link: 'https://www.gob.mx/agricultura/es/articulos/conoce-los-5-sistemas-en-riego-de-innovacion-para-el-ahorro-de-agua'
    },
    {
        id: 5,
        image: '/app/img/sinagua.jpg',
        name: "Expertos advierten aumento de escasez de agua debido al cambio climático",
        description: "El cambio climático está acelerando tanto la escasez de agua como los peligros relacionados con este recurso (como inundaciones y sequías), ya que el aumento de las temperaturas altera los patrones de precipitación y todo el ciclo del agua.",
        link: 'https://www.un.org/es/climatechange/science/climate-issues/water'
    },
    {
        id: 6,
        image: '/app/img/pez.jpeg',
        name: "Descubren nueva especie de pez que puede vivir sin agua",
        description: "Este hallazgo, que significa un aporte trascendental a la ciencia, fue realizado por especialistas del Instituto de Investigaciones de la Amazonía Peruana (IIAP), tras un año y medio de estudios en campo y en laboratorio.",
        link: 'https://www.gob.pe/institucion/minam/noticias/986578-investigadores-del-minam-descubren-una-nueva-especie-de-pez-unica-en-el-mundo'
    },
];

const NewsBanner = () => {

    const router = useRouter()

    return ( 
        <div className="w-full h-full flex flex-col justify-center items-center pt-20 sm:pb-10">
            <div className="flex flex-col gap-10 ">
                <div className="flex flex-col justify-center items-center gap-5 sm:gap-2 px-5 sm:px-20">
                    <h2 className="font-bold text-3xl text-center">NUESTRAS ULTIMAS <span className="text-blue-800">NOTICIAS</span></h2>
                    <p className="font-semibold text-lg text-blue-600 italic text-center">Aquí te mostramos algunas de las ultimas noticias con respecto al agua entre otros.</p>
                </div>
                <div className="bg-transparent">
                    <Carousel opts={{align: "start"}} plugins={[Autoplay({delay: 4000})]} className="w-full max-w-sm sm:max-w-6xl mx-auto">
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {CarouselBanner.map(({id, image, name, description, link}) => (
                            <CarouselItem key={id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-2">
                                    <Card className="border-none">
                                        <CardContent className="flex flex-col aspect-square justify-between gap-4 p-6 dark:bg-blue-950 bg-blue-50 rounded-lg">
                                            <Image src={image} alt="img-noticia" width={300} height={300} className="rounded-lg bg-cover bg-no-repeat w-full" />
                                            <h2 className="text-base sm:text-md font-bold text-center text-gray-800 dark:text-gray-200">{name}</h2>
                                            <p className="text-sm font-normal">{description}</p>
                                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 underline text-start">Leer más</a>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
     );
}
 
export default NewsBanner;