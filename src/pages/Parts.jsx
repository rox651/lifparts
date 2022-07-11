import BannerBottom from "../components/BannerBottom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Outlet } from "react-router";

export default function Parts() {
  useEffect(() => {
    document.title = "Partes | Lift Parts & Export Florida";
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Outlet/>
      <BannerBottom />
    </motion.div>
  );
}
