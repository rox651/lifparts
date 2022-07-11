import { useEffect } from "react";
import products from "../../api/apiParts.json";
import World from "../../assets/img/about/world2.jpg";
import BannerSecondary from "../BannerSecondary";
import { scrollToTop } from "../../utils/js/scrollTop";
import PartsGrid from "./PartsGrid";
import { motion } from "framer-motion";

export default function PartsSection({ data, path }) {
  useEffect(() => {
    scrollToTop();
  }, []);

  const dateFilter = data.filter((item) => item.path === path);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BannerSecondary bg={dateFilter[0].backG || World}>
        {dateFilter[0].title}
      </BannerSecondary>
      <PartsGrid products={products} category={dateFilter[0].category_es} />
    </motion.div>
  );
}
