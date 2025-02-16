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
import { ArrowRight, ArrowRightCircle, ArrowRightFromLineIcon, ArrowRightSquare } from "lucide-react"
  
  export function TermsConditions() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>
            Términos y Condiciones
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>TÉRMINOS Y CONDICIONES</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="max-h-[400px] overflow-y-auto space-y-4 text-sm">
            <p className="font-semibold">Última actualización: 16 de Febrero del 2025</p>
            <p>
              Bienvenido a la empresa PUNTO VIDA pO SAC. Antes de utilizar nuestro sitio web <strong>www.aguaeufrosine.com</strong>,
              te pedimos que leas atentamente los siguientes términos y condiciones.
            </p>
            <p className="font-semibold">1. INFORMACIÓN GENERAL</p>
            <ul className="list-disc pl-4">
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/> Razón social: PUNTO VIDA H2O SAC</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/>RUC: 20613393367</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/>Dirección: Av. Cincuentenario S/N – Hualmay.</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/>Correo electrónico de contacto: aguaeufrosine@gmail.com</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/>Teléfono de contacto: 903565918</li>
            </ul>
            <p className="font-semibold">2. USO DEL SITIO WEB</p>
            <p>Este sitio web tiene como propósito informar la venta de productos de agua de mesa en diversas presentaciones.</p>
            <p>No puedes utilizar nuestro sitio para actividades ilegales o fraudulentas.</p>
            <p>Nos reservamos el derecho de suspender o cancelar el acceso a usuarios que incumplan estos términos.</p>
            <p className="font-semibold">3. POLÍTICA DE PAGOS Y FACTURACIÓN</p>
            <p>Aceptamos pagos mediante tarjetas, transferencias, Yape y Plin. Los precios incluyen IGV.</p>
            <p>No somos responsables de problemas con terceros proveedores de pago.</p>
            <p className="font-semibold">4. POLÍTICA DE DEVOLUCIONES Y REEMBOLSOS</p>
            <p>No se aceptan devoluciones de productos en oferta.</p>
            <p className="font-semibold">5. PRIVACIDAD Y PROTECCIÓN DE DATOS</p>
            <p>Cumplimos con la Ley de Protección de Datos Personales en Perú (Ley N° 29733).</p>
            <p className="font-semibold">6. RESPONSABILIDAD Y LIMITACIONES</p>
            <p>No garantizamos que el sitio esté libre de errores o interrupciones.</p>
            <p>No nos hacemos responsables por daños derivados del uso del sitio.</p>
            <p className="font-semibold">7. MODIFICACIONES A LOS TÉRMINOS</p>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
            <p className="font-semibold">8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</p>
            <p>Estos términos se rigen por las leyes de Perú. Cualquier disputa se resolverá en los tribunales de Huacho.</p>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction>Aceptar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  