import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import EufrosineLogo from "@/app/img/Logo-Eufrosine.png"
import { Textarea } from "./ui/textarea"

const ContactForm = ({className, ...props}: React.ComponentProps<"div">) => {

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden shadow-lg rounded-xl shadow-blue-500 dark:shadow-blue-500 dark:shadow-md">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-blue-500">CONTACTANOS</h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre Completo <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ejm: Mario Lopez"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre de Empresa <span className="text-gray-400">(opcional)</span></Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ejm: Distribuidora Example"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Celular <span className="text-red-500">*</span></Label>
                  <Input
                    id="phone"
                    type="number"
                    placeholder="Ejm: 987654321"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                  <Label htmlFor="message">Mensaje <span className="text-red-500">*</span></Label>
                  <Textarea
                  className="resize-none"
                  id="message"
                  placeholder="Escribe aqui tu mensaje"
                  required
                  >
                  </Textarea>
                </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src={EufrosineLogo}
              alt="Image"
              className="absolute inset-0 w-full h-full contact object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactForm