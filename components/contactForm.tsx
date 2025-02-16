"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import EufrosineLogo from "@/app/img/Logo-Eufrosine.png"
import { Textarea } from "./ui/textarea"
import { useState } from "react"

export default function ContactForm () {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error sending message");

      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden shadow-lg rounded-xl shadow-blue-500 dark:shadow-blue-500 dark:shadow-md">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-blue-500">CONTACTANOS</h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre Completo <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ejm: Mario Lopez"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre de Empresa <span className="text-gray-400">(opcional)</span></Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ejm: Distribuidora Example"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Celular <span className="text-red-500">*</span></Label>
                  <Input
                    id="phone"
                    type="number"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ejm: 987654321"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                  <Label htmlFor="message">Mensaje <span className="text-red-500">*</span></Label>
                  <Textarea
                  className="resize-none"
                  rows={4}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe aqui tu mensaje"
                  required
                  >
                  </Textarea>
              </div>
              
              <Button type="submit" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Enviando..." : "Enviar"}
              </Button>
                {status === "success" && <p className="text-green-500">Mensaje enviado satisfactoriamente!</p>}
                {status === "error" && <p className="text-red-500">Error al enviar mensaje.</p>}
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