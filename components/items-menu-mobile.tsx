import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { useState } from "react";

const ItemsMenuMobile = () => {

    const [open, setOpen] = useState(false);
    const closePopover = () => setOpen(false);

    return ( 
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger >
                <Menu/>
            </PopoverTrigger>
            <PopoverContent onClick={() => setOpen(!open)}>
                <div className="flex flex-col gap-2">
                    <Link href="/nosotros" className="block" onClick={closePopover}>Quienes Somos</Link>
                    <Link href="/mision-vision" className="block" onClick={closePopover}>Mision y Vision</Link>
                    <Link href="/productos" className="block" onClick={closePopover}>Nuestros Productos</Link>
                    <Link href="/contactanos" className="block" onClick={closePopover}>Contactanos</Link>
                </div>
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;