"use client"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { motion } from "framer-motion";

const VisionMision = () => {
  return (
    <section className="w-full py-10 sm:py-20 overflow-hidden">
      <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
       viewport={{ once: true }}
       className="flex flex-col sm:gap-10 gap-0 px-2 sm:px-6">
        <motion.h2
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.3 }}
         viewport={{ once: true }}
         className="text-xl sm:text-3xl font-bold text-center">
          NUESTRA <span className="text-blue-800 dark:text-blue-500">VISION Y MISION</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
           viewport={{ once: true }}>
            <CardContainer>
              <CardBody className="bg-card-movil-1 sm:bg-vision relative w-[350px] h-[260px] sm:w-[600px] sm:h-[300px] rounded-xl p-6 border-none flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
                <CardItem translateZ="50" className="text-xl sm:text-3xl font-bold text-white">
                  Visión
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-white text-center sm:text-start text-sm sm:text-base max-w-sm mt-2 ">
                  Ser reconocidos como la empresa líder en la provisión de agua de mesa de la más alta calidad,
                  contribuyendo al bienestar y salud de nuestras comunidades, mientras establecemos nuevos estándares de
                  excelencia e innovación en la industria.
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}>
            <CardContainer>
              <CardBody className="bg-card-movil-2 sm:bg-mision relative w-[350px] h-[260px] sm:w-[600px] sm:h-[300px] rounded-xl p-6 border-none flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
                <CardItem translateZ="50" className="text-xl sm:text-3xl font-bold text-white">
                  Misión
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-white text-center sm:text-start text-sm sm:text-base max-w-sm mt-2">
                  Proporcionar agua de mesa pura y refrescante, utilizando tecnología de vanguardia y procesos sostenibles. Nos comprometemos a satisfacer las necesidades de hidratación de nuestros clientes, garantizando la más alta calidad y seguridad.
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default VisionMision

