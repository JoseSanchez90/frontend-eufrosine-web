import Link from "next/link";
import { Separator } from "./ui/separator";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TermsConditions } from "./terms-and-conditions";

const dataFooter = [
    {
        id: 1,
        name: "Terminos y Condiciones",
        link: "#",
    },
    {
        id: 2,
        name: "Politica de Privacidad",
        link: "#",
    },
    {
        id: 3,
        name: "Libro de Reclamaciones",
        link: "#",
    },
];

const Footer = () => {

    return ( 
        <footer className="w-full h-full md:mt-6">
            <Separator/>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mx-auto p-4 py-2 sm:py-6 justify-between ">
                
                <div className="grid grid-rows-2 md:flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl text-blue-800 dark:text-blue-600 font-normal">Eu<span className="text-2xl font-bold">Frosine</span>
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400 italic font-semibold">Bienestar en tu vida</p>
                    </div>
                    <div className="flex flex-col md:hidden justify-center items-center text-xs text-gray-500 sm:text-center dark:text-gray-400">
                        <span>&copy; 2025 - Derechos Reservados</span>
                        <span>Diseñado y Creado: 
                            <Link href="https://josesanchez-cv.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-black dark:text-white"> Jose Sanchez</Link>
                        </span>
                    </div>
                </div>

                <div className="hidden sm:flex flex-col justify-start items-center">
                    <div>
                        <h3 className="py-2 font-bold">Contacto</h3>
                        <div className="flex flex-col items-start gap-1 mb-6 text-sm sm:mb-0">
                            <p className="flex flex-row justify-center items-center gap-2"><SiGooglemaps />Huacho, Lima - Perú</p>
                            <p className="flex flex-row justify-center items-center gap-2"><IoIosPhonePortrait />903 565 918</p>
                            <p className="flex flex-row justify-center items-center gap-2"><MdEmail />aguademesaeufrosineperu@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex justify-start items-center">
                    <div>
                        <h3 className="py-2 font-bold">Legal</h3>                    
                        <ul className="flex flex-col items-start gap-1 mb-6 underline text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <TermsConditions/>
                        </ul>
                    </div>
                </div>

                <div className="hidden sm:flex flex-col justify-start items-center">
                    <div>
                        <h3 className="py-2 font-bold">Siguenos</h3>
                        <div className="flex flex-col items-start mb-6 gap-1 text-sm sm:mb-0">
                            <Link href="https://www.facebook.com/aguaeufrosine/" target="_autoblank" className="flex flex-row items-center gap-2"><BsFacebook/><span>Facebook</span></Link>
                            <Link href="#" className="flex flex-row items-center gap-2"><BsInstagram/><span>Instagram</span></Link>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex flex-col justify-center items-center text-xs text-gray-500 sm:text-center dark:text-gray-400">
                    <span>&copy; 2025 - Derechos Reservados</span>
                    <span>Diseñado y Creado: 
                        <Link href="https://josesanchez.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-black dark:text-white"> Jose Sanchez</Link>
                    </span>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;