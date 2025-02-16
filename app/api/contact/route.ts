import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, message } = await req.json()

    // Verifica que las variables están definidas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error("Missing email credentials")
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
      to: "aguaeufrosine@gmail.com",
      subject: `Has recibido un mensaje desde tu Web Eufrosine`,
      text: `Nombre del usuario: ${name}\nNombre de la Empresa: ${company}\nNumero de celular: ${phone}\nCorreo Electronica: ${email}\nMensaje: ${message}`,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}