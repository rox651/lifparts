import { Link, useParams } from "react-router-dom";
import products from "../../api/apiParts.json";
import Undefined from "../../assets/img/parts/not-found.png";
import World from "../../assets/img/about/world2.jpg";
import BannerSecondary from "../BannerSecondary";
import { motion } from "framer-motion";
import { scrollToTop } from "../../utils/js/scrollTop";
import { useEffect } from "react";
import PartsGrid from "./PartsGrid";

export default function PartInfo() {
  const { id } = useParams();

  const filterProduct = products.filter((product) => {
    return product.id === Number(id);
  });


  let restProducts = [];

  for (let i = 0; i <3; i++) {
    let random = Math.floor(Math.random() * products.length);
    if (products[random].id !== Number(id)) {
      restProducts.push(products[random]);
    }
  }




  useEffect(() => {
    scrollToTop();
    document.title = `${filterProduct[0].attributes.product} | Lift Parts & Export Florida`;
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BannerSecondary bg={World}>
        {filterProduct[0].attributes.category_es}
      </BannerSecondary>
      {filterProduct.map((product, index) => {
        return (
          <div
            key={index}
            className="flex md:justify-center md:gap-10 my-10 flex-col md:flex-row place-items-center"
          >
            <img src={Undefined} className="w-60 md:w-80 border-4" />
            <div className="font-black my-5 flex flex-col justify-between h-52">
              <h2 className="text-xl text-reno-sand-500 ">
                {product.attributes.product}
              </h2>
              <p>Modelo: {product.attributes.model}</p>
              <p className=" text-reno-sand-500 font-normal">
                Categoría: {product.attributes.category_es}
              </p>
              <p>Cantidad: {product.attributes.quantity}</p>
              <p>Precio: ${product.attributes.price}</p>
              <Link
                to={`/contact`}
                className=" text-sm bg-reno-sand-500 text-white py-2  px-8 md:max-w-max  md:max-h-full hover:bg-reno-sand-400"
              >
                Contáctenos para mas información
              </Link>
            </div>
          </div>
        );
      })}

      <div className="text-center mt-28">
        <h3 className="font-black text-2xl">Productos Relacionados</h3>
        <PartsGrid
          products={restProducts}
          category={filterProduct[0].attributes.category_es}
        />
      </div>
    </motion.div>
  );
}
