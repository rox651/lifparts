import World from "../assets/img/expor/world2.jpg";
import BannerSecondary from "../components/BannerSecondary";
import BannerBottom from "../components/BannerBottom";
import Content from "../components/exp/Content";
import SliderExport from "../components/exp/SliderExport";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Export() {
  useEffect(() => {
    document.title = "¿Dónde exportamos?| Lift Parts & Export Florida";
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BannerSecondary bg={World}>¿DÓNDE EXPORTAMOS?</BannerSecondary>
      <Content/>
      <SliderExport />
      <BannerBottom></BannerBottom>
    </motion.main>
  );
}
