import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction,
  } from "@/components/ui/alert-dialog"
  import { AlignRightIcon, ArrowRightCircle, TicketCheckIcon } from "lucide-react"
import { MdOutlineChevronRight } from "react-icons/md"
  
  export function CookiePolicy() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="text-blue-600 underline">Política de Cookies</button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>POLÍTICA DE COOKIES</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="max-h-[400px] overflow-y-auto space-y-4 text-sm">
            <div className="font-semibold">Última actualización: 24 de Febrero del 2025</div>
            <div>
              En <strong>Eufrosine</strong>, utilizamos cookies para mejorar tu experiencia en nuestro sitio web <strong>www.aguaeufrosine.com</strong>. Al continuar navegando, aceptas el uso de cookies de acuerdo con esta política.
            </div>
  
            <div className="font-semibold">1. ¿QUÉ SON LAS COOKIES?</div>
            <div>
              Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas un sitio web. 
              Estas permiten recordar tus preferencias y mejorar la experiencia de usuario.
            </div>
  
            <div className="font-semibold">2. TIPOS DE COOKIES QUE UTILIZAMOS</div>
            <ul className="list-disc pl-4">
              <li className="list-none flex justify-start items-center gap-2"><MdOutlineChevronRight size={14} /><strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio.</li>
              <li className="list-none flex justify-start items-center gap-2"><MdOutlineChevronRight size={14} /><strong>Rendimiento:</strong> Nos ayudan a analizar cómo los usuarios usan nuestra web.</li>
              <li className="list-none flex justify-start items-center gap-2"><MdOutlineChevronRight size={14} /><strong>Funcionalidad:</strong> Guardan preferencias del usuario para una experiencia personalizada.</li>
              <li className="list-none flex justify-start items-center gap-2"><MdOutlineChevronRight size={14} /><strong>Terceros:</strong> Usadas por servicios externos como Google Analytics.</li>
            </ul>
  
            <div className="font-semibold">3. ¿CÓMO PUEDES GESTIONAR LAS COOKIES?</div>
            <div>
              Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Sin embargo, algunas funciones del sitio pueden no funcionar correctamente si las deshabilitas.
            </div>
  
            <div className="font-semibold">4. MÁS INFORMACIÓN</div>
            <div>
              Si tienes dudas sobre nuestra política de cookies, contáctanos en 
              <a href="mailto:info@eufrosine.com" className="text-blue-600 underline"> aguademesaeufrosineperu@gmail.com</a>.
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction>Aceptar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  