"use client"

// import { ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {

    const router = useRouter()
    const { theme } = useTheme(); // Obtiene el tema actual (light, dark)
    const isDark = theme === "dark"; // Verifica si está en modo oscuro

    return ( 
        <div className="flex flex-row justify-between items-center p-4 md:px-12 lg:px-48 mx-auto">
            <motion.h1
             whileHover={{
                textShadow: isDark
                  ? "0px 0px 15px rgba(100, 200, 255, 0.8)" // Brillo celeste en dark mode
                  : "0px 0px 15px rgba(19, 88, 165, 0.8)", // Brillo azul en light mode
                color: isDark ? "rgb(135, 206, 250)" : "rgb(30, 144, 255)", // Cambia el color del texto
                transition: { duration: 0.4 },
              }}
              className="text-2xl text-blue-800 dark:text-blue-600 font-normal cursor-pointer relative transition-colors duration-300" onClick={() => router.push("/")}>
                Eu
                <span className="text-3xl font-bold">
                    Frosine
                </span>
            </motion.h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
            </div>
            <div className="flex items-center justify-between gap-4 sm:gap-7">
                <a href="https://api.whatsapp.com/send?phone=51903565918" target="_blank"><BsWhatsapp size={18} color="green"/></a>
                <a href="https://www.facebook.com/aguaeufrosine/" target="_blank"><BsFacebook size={18} color="blue"/></a>
                <a href="https://www.instagram.com/" target="_blank"><BsInstagram size={18} color="orange" /></a>
                {/* <User strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/usuario")}/>
                <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/carrito-compras")}/> */}
                <ToggleTheme/>
            </div>
        </div>
     );
}
 
export default Navbar;