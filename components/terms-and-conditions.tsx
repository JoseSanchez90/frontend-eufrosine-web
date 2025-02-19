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
import { ArrowRightCircle } from "lucide-react"
  
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
          <div className="max-h-[400px] overflow-y-auto space-y-4 text-sm">
            <div className="font-semibold">Última actualización: 16 de Febrero del 2025</div>
            <div>
              Bienvenido a la empresa PUNTO VIDA pO SAC. Antes de utilizar nuestro sitio web 
              <strong>www.aguaeufrosine.com</strong>, te pedimos que leas atentamente los siguientes términos y condiciones.
            </div>

            <div className="font-semibold">1. INFORMACIÓN GENERAL</div>
            <ul className="list-disc pl-4">
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/> Razón social: PUNTO VIDA H2O SAC</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/> RUC: 20613393367</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/> Dirección: Av. Cincuentenario S/N – Hualmay.</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/> Correo electrónico de contacto: aguaeufrosine@gmail.com</li>
              <li className="list-none flex items-center gap-2"><ArrowRightCircle size={18}/> Teléfono de contacto: 903565918</li>
            </ul>

            <div className="font-semibold">2. USO DEL SITIO WEB</div>
            <div>Este sitio web tiene como propósito informar la venta de productos de agua de mesa en diversas presentaciones.</div>
            <div>No puedes utilizar nuestro sitio para actividades ilegales o fraudulentas.</div>
            <div>Nos reservamos el derecho de suspender o cancelar el acceso a usuarios que incumplan estos términos.</div>

            <div className="font-semibold">3. POLÍTICA DE PAGOS Y FACTURACIÓN</div>
            <div>Aceptamos pagos mediante tarjetas, transferencias, Yape y Plin. Los precios incluyen IGV.</div>
            <div>No somos responsables de problemas con terceros proveedores de pago.</div>

            <div className="font-semibold">4. POLÍTICA DE DEVOLUCIONES Y REEMBOLSOS</div>
            <div>No se aceptan devoluciones de productos en oferta.</div>

            <div className="font-semibold">5. PRIVACIDAD Y PROTECCIÓN DE DATOS</div>
            <div>Cumplimos con la Ley de Protección de Datos Personales en Perú (Ley N° 29733).</div>

            <div className="font-semibold">6. RESPONSABILIDAD Y LIMITACIONES</div>
            <div>No garantizamos que el sitio esté libre de errores o interrupciones.</div>
            <div>No nos hacemos responsables por daños derivados del uso del sitio.</div>

            <div className="font-semibold">7. MODIFICACIONES A LOS TÉRMINOS</div>
            <div>Nos reservamos el derecho de modificar estos términos en cualquier momento.</div>

            <div className="font-semibold">8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</div>
            <div>Estos términos se rigen por las leyes de Perú. Cualquier disputa se resolverá en los tribunales de Huacho.</div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction>Aceptar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  