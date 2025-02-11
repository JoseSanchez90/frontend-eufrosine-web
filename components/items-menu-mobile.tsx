import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-col gap-2">
                    <Link href="/nosotros" className="block">Quienes Somos</Link>
                    <Link href="/mision-vision" className="block">Mision / Vision</Link>
                    <Link href="/blog" className="block">Blog</Link>
                    <Link href="/nuestros-productos" className="block">Nuestros Productos</Link>
                </div>
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;