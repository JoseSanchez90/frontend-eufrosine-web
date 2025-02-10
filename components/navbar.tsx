"use client"

import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {

    const router = useRouter()

    return ( 
        <div className="flex flex-row justify-between items-center p-4 cursor-pointer">
            <h1 className="text-2xl text-blue-800 dark:text-blue-600 font-normal" onClick={() => router.push("/")}>Eu<span className="text-3xl font-bold">Frosine</span></h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
            </div>
            <div className="flex flex-row items-center justify-between gap-2 sm:gap-7">
                <ToggleTheme/>
            </div>
        </div>
     );
}
 
export default Navbar;