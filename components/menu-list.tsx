"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import eufrosine from '../app/img/logoeufrosine.png'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src={eufrosine} alt="Logo de la empresa" width={100} />
                    <div className="mb-2 mt-4 text-lg font-bold">
                      EuFrosine
                    </div>
                    <p className="text-sm text-gray-600 italic font-semibold leading-tight text-muted-foreground">
                      Bienestar en tu vida.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/quienes-somos" title="Quienes somos">
                Conoce un poco más acerca de nosotros.
              </ListItem>
              <ListItem href="/mision-vision" title="Mision y Vision">
                Te contamos cuales son nuestras priopridades.
              </ListItem>
              <ListItem href="/blog" title="Blog">
                Explora y conoce más acerca del Agua de Mesa.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nuestro producto</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contactanos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Envase 625ml",
      href: "/docs/primitives/alert-dialog",
      description: "Ideal para llevar, práctico y refrescante."
    },
    {
      title: "Envase 3Lt",
      href: "/docs/primitives/hover-card",
      description: "Perfecto para el hogar o la oficina."
    },
    {
      title: "Envase 10Lt",
      href: "/docs/primitives/progress",
      description: "Gran capacidad para familias y negocios."
    },
    {
      title: "Envase 20Lt",
      href: "/docs/primitives/scroll-area",
      description: "El tamaño ideal para consumo diario y dispensadores."
    },
    {
      title: "Explorar",
      href: "/docs/primitives/scroll-area",
      description: "Encuentra todos nuestros productos."
    },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
