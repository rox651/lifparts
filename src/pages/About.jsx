import BannerSecondary from "../components/BannerSecondary";
import World from "../assets/img/about/world2.jpg";
import Herramienta from "../assets/img/about/herramienta.jpg";
import BannerBottom from "../components/BannerBottom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "¿Quiénes somos? | Lift Parts & Export Florida";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BannerSecondary bg={World}>¿QUIÉNES SOMOS?</BannerSecondary>
      <div className="px-12 text-justify md:px-16 py-9 md:grid md:grid-cols-2 text-sm md:leading-6 ">
        <p className="my-5 md:text-center md:col-span-2 md:mx-32 lg:mx-72">
          Lift Parts & Export es una empresa familiar dedicada al servicio de la
          industria de manipulación de materiales. Estamos orgullosamente
          establecidos en el sur de la Florida y hemos estado sirviendo a
          nuestros clientes locales y exportadores durante más de 20 años.
        </p>
        <p className="my-5 md:mx-10 lg:ml-20 lg:text-base">
          ¡La satisfacción de nuestros clientes es lo que nos mueve! Nuestro
          equipo está formado por profesionales capacitados con años de
          experiencia que pueden brindar soluciones integrales a su negocio.
          <br />
          <strong>
            Nuestro objetivo es construir una relación a largo plazo con usted!
          </strong>
        </p>

        <img
          className="w-4/5 mx-auto my-0 md:mx-0 md:my-auto md:w-full "
          src={Herramienta}
        ></img>
      </div>
      <BannerBottom></BannerBottom>
    </motion.div>
  );
}
