import Intro from "../components/principal/Intro";
import Banner from "../components/principal/Banner";
import MantenimientoInfo from "../components/principal/MantenimientoInfo";
import Slider from "../components/principal/Slider.jsx";
import Items from "../components/parts/Items";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { partsData } from "../components/parts/partsData";

export default function Home() {
    useEffect(() => {
      document.title =
        "Forklift Parts, Equipment and Accesories | Lift Parts & Export Florida";
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Slider />
      <Intro />

      <div className="text-center">
        <h2 className=" font-bold mb-6 text-2xl lg:text-3xl">Partes</h2>
        <div className="mx-10 sm:mx-52 lg:mx-72">
          <p className="my-5">
            Con acceso a millones de piezas de repuesto para la mayoría de los
            fabricantes. ¡Encuentre las piezas de repuesto que necesita hoy!
          </p>
          <p>
            Constantemente agregamos nuevos elementos a nuestra base de datos
          </p>
        </div>
      </div>

      <Items partsData={partsData} />
      <Banner />
      <MantenimientoInfo />
    </motion.div>
  );
}
