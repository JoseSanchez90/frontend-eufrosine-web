import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { nombre, dni, correo, telefono, mensaje } = await req.json()

    // Verifica que las variables están definidas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error("Faltan credenciales de email")
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "aguademesaeufrosineperu@gmail.com",
      subject: "📄 Nuevo Reclamo - Libro de Reclamaciones",
      text: `🔹 Nombre: ${nombre}\n🔹 DNI: ${dni}\n📧 Correo: ${correo}\n📞 Teléfono: ${telefono}\n✉️ Mensaje: ${mensaje}`,
      replyTo: correo,
    })

    return NextResponse.json({ success: true, message: "Reclamo enviado correctamente" })
  } catch (error) {
    console.error("Error enviando reclamo:", error)
    return NextResponse.json({ error: "Error enviando el reclamo" }, { status: 500 })
  }
}
