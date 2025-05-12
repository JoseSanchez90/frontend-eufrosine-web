"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const DataCarouselTop = [
    {
        id: 1,
        name: "Bidón de 20 litros + botella de 7 litros",
        description: "llévate el pack a S/ 15",
        oferta: <div className="flex gap-2 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none"><path fill="url(#fluentColorSavings160)" d="M15 8.268c0 1.552-.548 2.64-1.11 3.34a4.6 4.6 0 0 1-.89.85V13.5a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 0 1-1-1H8a1 1 0 0 1-1 1h-.5A1.5 1.5 0 0 1 5 13.5v-.214c-1.363-.433-2.312-1.534-2.78-2.858a.43.43 0 0 0-.269-.281A1.31 1.31 0 0 1 1 8.89v-.794c0-.576.382-1.082.935-1.24c.104-.03.216-.13.271-.297c.346-1.046 1.069-1.81 2-2.37q.145-.088.26-.15V2.163a.76.76 0 0 1 .481-.704a.77.77 0 0 1 .826.15c.253.24.585.525.94.758c.365.238.707.39.986.418h.005C11.077 2.784 15 4.471 15 8.268"/><path fill="url(#fluentColorSavings161)" d="M5.5 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/><path fill="#9f1459" d="M6.942 4.727a.835.835 0 0 1 1.09-.453l5.56 2.295a.835.835 0 0 1-.637 1.544l-5.56-2.296a.835.835 0 0 1-.453-1.09"/><path fill="url(#fluentColorSavings162)" d="M12.14 7.776a3 3 0 1 0-3.906-1.613z"/><path fill="url(#fluentColorSavings163)" fillOpacity="0.8" d="M12.14 7.776a3 3 0 1 0-3.906-1.613z"/><defs><radialGradient id="fluentColorSavings160" cx="0" cy="0" r="1" gradientTransform="matrix(3.63124 12.79178 -13.17677 3.74053 5.287 2.736)" gradientUnits="userSpaceOnUse"><stop stopColor="#f08af4"/><stop offset=".581" stopColor="#e869ce"/><stop offset="1" stopColor="#d7257d"/></radialGradient><radialGradient id="fluentColorSavings161" cx="0" cy="0" r="1" gradientTransform="rotate(59.532 -3.375 7.091)scale(1.27093)" gradientUnits="userSpaceOnUse"><stop stopColor="#b91d6b"/><stop offset="1" stopColor="#670938"/></radialGradient><linearGradient id="fluentColorSavings162" x1="12.968" x2="8.03" y1="7.63" y2="3.794" gradientUnits="userSpaceOnUse"><stop stopColor="#ff8a69"/><stop offset="1" stopColor="#ffcd0f"/></linearGradient><linearGradient id="fluentColorSavings163" x1="11.795" x2="9.488" y1="2.361" y2="7.421" gradientUnits="userSpaceOnUse"><stop offset=".67" stopColor="#fb5937" stopOpacity="0"/><stop offset="1" stopColor="#cd3e1d"/></linearGradient></defs></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#4bd37b"/><path fill="#fff" d="M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z"/></svg>
        </div>,
    },
    {
        id: 2,
        name: "Botella de 7 litros a S/ 5.00",
        description: "Por la compra de 3 unidades  paga S/ 12 soles",
        oferta: <div className="flex gap-2 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64"><path fill="#b2c1c0" d="M62 50.8c0-1-.8-1.9-1.9-1.9H3.9c-1 0-1.9.8-1.9 1.9v1.9c0 1 .8 1.9 1.9 1.9h56.2c1 0 1.9-.8 1.9-1.9z"/><ellipse cx="12.3" cy="55.5" fill="#3e4347" rx="6.6" ry="6.5"/><ellipse cx="12.3" cy="55.5" fill="#b2c1c0" rx="3.8" ry="3.7"/><ellipse cx="50.8" cy="55.5" fill="#3e4347" rx="6.6" ry="6.5"/><ellipse cx="50.8" cy="55.5" fill="#b2c1c0" rx="3.8" ry="3.7"/><path fill="#62727a" d="M54.5 19H28.2c-3.1 0-5.6 2.5-5.6 5.6v24.3h37.5V24.6c0-3.1-2.5-5.6-5.6-5.6"/><path fill="#f15744" d="M15.1 26.5c-4.5 0-5.6 0-5.6 7.5c0 5.6-5.6 5.6-5.6 11.2v3.7h18.8V26.5z"/><path fill="#ffce31" d="M5.8 43.3h1.9V47H5.8z"/><path fill="#d33b23" d="M12.8 39.6c-1.1 0-1.7.8-1.3 1.8l1.6 4c.4 1 1.6 1.7 2.7 1.7h3c1.1 0 2-.8 2-1.9v-3.7c0-1-.9-1.9-2-1.9z"/><g fill="#3e4347"><path d="M20.8 28.3h-7.5s-1.9.2-1.9 2.8v4.5s0 2.1 1.9 2.1h7.5z"/><circle cx="12.3" cy="51.7" r=".9"/><circle cx="9.1" cy="53.6" r=".9"/><path d="M8.6 56.5c.4-.3 1-.1 1.3.3s.1 1-.3 1.3s-1 .1-1.3-.3c-.3-.5-.2-1 .3-1.3"/><circle cx="12.3" cy="59.2" r=".9"/><circle cx="15.6" cy="57.3" r=".9"/><circle cx="15.6" cy="53.6" r=".9"/></g><circle cx="12.3" cy="55.5" r="1.9" fill="#62727a"/><g fill="#3e4347"><circle cx="50.8" cy="51.7" r=".9"/><circle cx="47.5" cy="53.6" r=".9"/><path d="M47 56.5c.4-.3 1-.1 1.3.3s.1 1-.3 1.3s-1 .1-1.3-.3c-.3-.5-.1-1 .3-1.3"/><circle cx="50.8" cy="59.2" r=".9"/><circle cx="54" cy="57.3" r=".9"/><circle cx="54" cy="53.6" r=".9"/></g><circle cx="50.8" cy="55.5" r="1.9" fill="#62727a"/><path fill="#fff" d="M28.4 32.7c-.5-.4-1.2-.6-2.2-.6c-.6 0-1.2 0-1.6.1v5.4c.3 0 .8.1 1.4.1c1.1 0 1.9-.3 2.5-.8c.5-.5.9-1.2.9-2.2c-.2-.9-.5-1.5-1-2m-2.3 4.2h-.6V33c.1 0 .4-.1.7-.1c1.3 0 2 .7 2 1.9c0 1.4-.8 2.1-2.1 2.1m7.1-1.7h-2.1v1.6h2.3v.8h-3.3v-5.5h3.2v.9h-2.2v1.4h2.1zm2.1 1.6v-4.7h-1v5.5h3.3v-.8zm3-4.7h1v5.5h-1zm5.4 0l-.8 2.5c-.2.7-.4 1.3-.6 2c-.1-.7-.3-1.3-.5-2l-.8-2.5h-1l1.8 5.5H43l1.9-5.5zm2.7 4.7v-1.6h2.1v-.8h-2.1V33h2.2v-.9h-3.2v5.5h3.3v-.8zm6.7-.7c-.1-.5-.4-.9-.8-1.1c.5-.2 1-.7 1-1.4c0-.5-.2-.8-.5-1.1c-.4-.3-.9-.4-1.7-.4c-.6 0-1.1 0-1.5.1v5.4h1v-2.3h.5c.6 0 .8.2 1 1c.2.7.3 1.1.4 1.3h1c-.1-.2-.2-.8-.4-1.5m-1.9-1.5h-.6v-1.7h.6c.7 0 1.1.3 1.1.9c0 .5-.4.8-1.1.8m5.9-2.5l-.7 1.4c-.2.4-.3.7-.5 1.1c-.1-.4-.3-.7-.5-1.1l-.7-1.4h-1.1l1.7 3.2v2.3h1v-2.3l1.8-3.2z"/><path fill="#3e4347" d="M27.3 30.2v-5.6c0-.5.4-.9.9-.9h26.2c.5 0 .9.4.9.9v5.6h1.9v-5.6c0-1.5-1.3-2.8-2.8-2.8H28.2c-1.6 0-2.8 1.3-2.8 2.8v5.6zm28.1 9.4v3.7c0 .5-.4.9-.9.9H28.2c-.5 0-.9-.4-.9-.9v-3.7h-1.9v3.7c0 1.5 1.3 2.8 2.8 2.8h26.2c1.6 0 2.8-1.3 2.8-2.8v-3.7z"/><g fill="#b2c1c0"><circle cx="29.2" cy="25.5" r=".9"/><circle cx="53.6" cy="25.5" r=".9"/><circle cx="29.2" cy="42.4" r=".9"/><circle cx="53.6" cy="42.4" r=".9"/></g><path fill="#62727a" d="M37.6 55.5c0 1-.8 1.9-1.9 1.9h-7.5c-1 0-1.9-.8-1.9-1.9v-1.9c0-1 .8-1.9 1.9-1.9h7.5c1 0 1.9.8 1.9 1.9z"/><path fill="#b2c1c0" d="M28.5 52.7c-.6 0-1.2.4-1.2.9s.5.9 1.2.9h7c.6 0 1.2-.4 1.2-.9s-.5-.9-1.2-.9z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64"><path fill="#d0d0d0" d="M0 60h64v4H0z"/><path fill="#62727a" d="M2 32h60v28H2z"/><path fill="#d6eef0" d="M6 42h14v18H6z"/><path fill="#3e4347" d="M2 27h60v6H2z"/><path fill="#83bf4f" d="M0 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#d33b23" d="M8 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#83bf4f" d="M16 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#c7e755" d="M16 18h8v9h-8z"/><path fill="#d33b23" d="M24 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#f15744" d="M24 18h8v9h-8z"/><path fill="#c7e755" d="M0 18h8v9H0z"/><path fill="#f15744" d="M8 18h8v9H8z"/><path fill="#c7e755" d="M48 18h8v9h-8z"/><path fill="#f15744" d="M56 18h8v9h-8z"/><path fill="#83bf4f" d="M32 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#c7e755" d="M32 18h8v9h-8z"/><path fill="#d33b23" d="M40 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#f15744" d="M40 18h8v9h-8z"/><path fill="#83bf4f" d="M48 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#d33b23" d="M56 27c0 2.2 1.8 4 4 4s4-1.8 4-4z"/><path fill="#fff" d="M13 33c-5 0-9 4-9 9h18c0-5-4-9-9-9"/><path fill="#62727a" d="M6.3 40h13.4c-.9-2.9-3.5-5-6.7-5s-5.8 2.1-6.7 5"/><path fill="#fff" d="M6 42h2v18H6zm12 0h2v18h-2z"/><path fill="#b4d7ee" d="M8 42h10v2H8z"/><path fill="#fff" d="M27 33h30v20H27z"/><path fill="#3e4347" d="M59 56c0 .5-.5 1-1 1H26c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h32c.5 0 1 .5 1 1z"/><path fill="#d6eef0" d="M29 35h26v16H29z"/><path fill="#b4d7ee" d="M29 35h26v2H29z"/><path fill="#62727a" d="M16 47c-.6 0-1 .6-1 1.3v2c0 .7.4 1.7.8 2.1l.4.4c.4.4.8.2.8-.5v-3.9c0-.8-.5-1.4-1-1.4"/><path fill="#3e4347" d="M64 18H0V2C0 .9.9 0 2 0h60c1.1 0 2 .9 2 2z"/><path fill="#e8e8e8" d="M3 2c-.5 0-1 .5-1 1v12c0 .6.5 1 1 1h58c.5 0 1-.4 1-1V3c0-.5-.5-1-1-1z"/><g fill="#3e4347"><path d="M17.5 5.1c-2.3-1-4.9-1.5-7.4-.8c-2.4.7-2.7 3.6-.7 5c1.9 1.2 4.3.2 6.3 1.2c.8.4.2 1.1-.3 1.3c-.7.2-1.3.2-1.9.2c-1.3 0-2.9-.2-4-.9s-2.1 1-1 1.7c1.9 1.2 4.9 1.4 7 .9c2.2-.5 3.4-3.1 1.5-4.7c-1.6-1.4-4.1-.8-6.1-1.3c-.6-.1-1.4-.6-.8-1.3c.6-.5 1.9-.4 2.5-.4c1.3 0 2.9.4 3.9.9c1.2.5 2.2-1.3 1-1.8M50 13V5l-1 1c.8 0 6.1-.2 4.9 1.4c-.8 1-3.7.6-4.9.6c-1.3 0-1.3 2 0 2c2.2 0 6.7.4 7-2.7c.3-3.8-4.5-3.3-7-3.3c-.5 0-1 .5-1 1v8c0 1.3 2 1.3 2 0M22 5v8c0 1.3 2 1.3 2 0V5c0-1.3-2-1.3-2 0m8 0v8c0 1.3 2 1.3 2 0V5c0-1.3-2-1.3-2 0"/><path d="M23 10h8c1.3 0 1.3-2 0-2h-8c-1.3 0-1.3 2 0 2"/></g><circle cx="40" cy="9" r="4" fill="none" stroke="#3e4347" strokeMiterlimit="10" strokeWidth="2"/><g fill="#3e4347"><circle cx="5" cy="9" r="1"/><circle cx="59" cy="9" r="1"/></g></svg>
        </div>
    },
    {
        id: 3,
        name: "Por la compra de 10 paquetes de botella de 625ml (1 paquete contiene 15 unidades)",
        description: " Oferta te llevas 1 paquete gratis",
        oferta: <div className="flex gap-2 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64"><path fill="#f2b200" d="M29.1 12.9H19L12.9 19v10.1L43.8 64L64 43.8zm-6.4 9.8c-.9.9-2.4.9-3.4 0c-.9-.9-.9-2.4 0-3.4c.9-.9 2.4-.9 3.4 0c.9 1 .9 2.5 0 3.4"/><path fill="#94989b" d="M21.9 20.8c-.3-1.3-.9-2.6-1.6-3.7c-1.7-2.8-4.1-5.1-6.9-6.8C9.6 8.1 5.3 7.1.9 6.7c-.5 0-.9.5-.9.9c0 .5.4.9.9.9c4.7.4 9.5 1.7 13.4 4.5c1.1.8 2.4 2.1 3.3 3.3c.2.2-.1-.2 0 .1c0 .1.1.1.1.2c.1.1.2.3.3.4c.2.3.4.5.5.8c.3.5.5.9.8 1.4c.1.1.1.3.2.4c0 .1.1.1.1.2c.1.2.2.5.2.7c.1.2.1.4.2.6c.3 1.4 2.2.9 1.9-.3"/><path fill="#3e4347" d="m15.3 16.6l-.1-.1c-.5-.4-.9-.8-1.3-1.3c-.9-1-1.7-2.3-2.3-3.6C9.9 8.3 9 4.6 8.7 1c-.1-.6-.5-1-1.1-1c-.5 0-1 .4-.9.9c.3 4 1.4 8 3.2 11.6c.7 1.4 1.6 2.8 2.6 4c.4.5.9 1 1.4 1.4z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64"><path fill="#75d6ff" d="M32 2C20.6 17.6 14 32 14 43.8c0 10 8.1 18.2 18 18.2s18-8.1 18-18.2C50 32 43.2 17.4 32 2"/></svg>
        </div>,
    },
];

const CarouselTextBanner = () => {

    const router = useRouter()

    return ( 
        <div className="bg-sky-100 dark:bg-sky-800">
            <Carousel className="w-full h-24 sm:h-20 py-2 max-w-4xl mx-auto" plugins={[
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
                                        <div className="flex flex-row justify-center text-center items-center gap-2 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                                            {name}
                                            </div>
                                        <div className="flex flex-row justify-center text-center items-center gap-2 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                                            {description}
                                        </div>
                                        <div className="text-xs sm:text-sm text-center text-gray-800 dark:text-white">
                                            {oferta}
                                        </div>
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