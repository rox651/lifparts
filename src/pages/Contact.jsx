import BannerSecondary from "../components/BannerSecondary";
import World from "../assets/img/expor/world2.jpg";
import FormComp from "../components/contact/FormComp";
import BannerBottom from "../components/BannerBottom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { scrollToTop } from "../utils/js/scrollTop";

export default function Contact() {
  useEffect(() => {
    document.title = "Contacto | Lift Parts & Export Florida";
    scrollToTop();
  }, []);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}>
      <BannerSecondary bg={World}>Contáctenos</BannerSecondary>
      <FormComp />
      <BannerBottom></BannerBottom>
    </motion.div>
  );
}
