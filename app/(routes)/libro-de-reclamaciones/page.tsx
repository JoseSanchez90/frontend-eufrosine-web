"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const ClaimBook = () => {
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/reclamos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage("✅ Reclamo enviado con éxito.");
        setForm({ nombre: "", dni: "", correo: "", telefono: "", mensaje: "" });
      } else {
        setMessage("❌ Hubo un error al enviar el reclamo.");
      }
    } catch (error) {
      setMessage("❌ Error de conexión. Inténtalo de nuevo.");
    }

    setLoading(false);
  };

  return (
    <section>
      <div className="p-4 max-w-lg mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold text-center pb-6">
          LIBRO DE <span className="text-blue-800 dark:text-blue-500">RECLAMACIONES</span>
        </h2>

        {message && <p className="text-center mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required className="w-full border p-2 rounded-lg" />
          <input type="text" name="dni" placeholder="DNI" value={form.dni} onChange={handleChange} required className="w-full border p-2 rounded-lg" />
          <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} required className="w-full border p-2 rounded-lg" />
          <input type="tel" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required className="w-full border p-2 rounded-lg" />
          <textarea name="mensaje" placeholder="Detalle de la queja o reclamo" value={form.mensaje} onChange={handleChange} rows={5} required className="w-full border p-2 rounded-lg resize-none"></textarea>

          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Reclamo"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ClaimBook;
