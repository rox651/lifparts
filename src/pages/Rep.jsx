import BannerSecondary from "../components/BannerSecondary";
import BannerBottom from "../components/BannerBottom";
import RepImg from "../assets/img/reparation/rep.jpg";
import { motion } from "framer-motion";
import { scrollToTop } from "../utils/js/scrollTop";
import { useEffect } from "react";
import Content from "../components/reparation/Content";
import Services from "../components/reparation/Services";
import SliderReparations from "../components/reparation/SliderReparations";
import OthersServices from "../components/reparation/OthersServices";

export default function Rep() {
  useEffect(() => {
    document.title =
      "Mantenimiento y reparaciones | Lift Parts & Export Florida";
    scrollToTop()
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BannerSecondary bg={RepImg}>
        MANTENIMIENTO Y REPARACIONES
      </BannerSecondary>

      <Content />
      <Services />
      <SliderReparations />
      <OthersServices />
      <BannerBottom />
    </motion.div>
  );
}
