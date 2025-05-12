"use client"

import ContactForm from "@/components/contactForm";
import { motion } from "framer-motion";


export default function Contactanos() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6 md:p-10">
      <motion.div
       className="w-full max-w-sm md:max-w-5xl md:my-20 lg:my-0"
       whileHover={{ scale: 1.00 }}>
        <ContactForm/>
      </motion.div>
    </motion.div>
  )
}
