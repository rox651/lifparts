import Undefined from "../../assets/img/parts/not-found.png";
import { Link } from "react-router-dom";
import NotProducts from "./NotProducts";
import { useEffect } from "react";

export default function PartsGrid({ products, category }) {
  const filterProducts = products.filter((product) => {
    return product.attributes.category_es === category;
  });

  useEffect(() => {
    document.title = `${category} | Lift Parts & Export Florida`;
  }, []);

  return (
    <div
      className={`grid ${
        filterProducts.length > 0
          ? `grid-cols-1 sm:grid-cols-2 ${
              filterProducts.length <= 4 ? "md:grid-cols-3" : "md:grid-cols-4"
            }`
          : "grid-cols-1"
      }  mb-10 gap-10 lg:px-44  px-20 mt-12 justify-center text-center place-items-center w-full h-auto`}
    >
      {filterProducts.length > 0 ? (
        filterProducts.map((productFilter, index) => {
          const categoryPath =
            productFilter.attributes.category_es.toLowerCase();
          return (
            <div key={index}>
              <img
                className={`${
                  filterProducts.length <= 4 ? "w-52" : "w-32"
                } border-4 mx-auto`}
                src={Undefined}
              />
              <h3 className="mt-3 font-black text-sm mb-8">
                {productFilter.attributes.product}
              </h3>

              <Link
                to={`/parts/${categoryPath}/producto/${productFilter.id}`}
                className=" text-sm bg-reno-sand-500 text-white py-2  px-8 md:max-w-max  md:max-h-full hover:bg-reno-sand-400"
              >
                Ver más
              </Link>
            </div>
          );
        })
      ) : (
        <NotProducts />
      )}
    </div>
  );
}
