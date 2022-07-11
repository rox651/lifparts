import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Items({ partsData }) {
  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 md:gap-10 lg:grid-cols-5 px-20 mt-12 justify-center place-content-center  place-items-center w-full h-auto">
      {partsData.map((part, index) => {
        return (
          <div key={index}>
            <Link to={part.path}>
              <div className="part-ctn hover:translate-y-2 overflow-hidden relative w-52 h-52 cursor-pointer transition-transform ">
                <img
                  className=" w-full h-full cursor-pointer "
                  src={part.img}
                />
                <aside
                  className="absolute w-52 h-52 top-0 opacity-0 grid place-items-center"
                  style={{
                    backgroundImage: `linear-gradient(132deg, rgba(240,197,137,0.5) 29%, rgba(228,153,46,0.41220238095238093) 53%)`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img src={part.hover} />
                </aside>
              </div>
            </Link>
            <h2 className="font-bold  my-5">{part.title}</h2>
          </div>
        );
      })}
    </motion.div>
  );
}
