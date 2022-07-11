import TuneUp from "../../assets/img/reparation/tune-up-service.jpg";
import Maintenance from "../../assets/img/reparation/maintenance-services.jpg";
import { Link } from "react-router-dom";

const Images = [
  {
    title: "Servicio de puesta a punto",
    image: TuneUp,
    text: ["Tapa de Distribución", "Cables de encendido", "Rotor", "Bujías"],
    price: 150,
  },
  {
    title: "Programa de mantenimiento de servicio",
    image: Maintenance,
    text: [
      "Filtro de aceite",
      "Filtro de aire y aceite del motor",
      "¡Piezas y mano de obra incluidos!",
    ],
    price: 100,
  },
];

export default function OthersServices() {
  return (
    <div className="py-10 px-7 md:px-16 mt-10 gap-10 flex flex-col md:flex-row md:justify-center w-full">
      {Images.map((item, index) => {
        return (
          <div key={index} className="flex flex-col place-items-center w-full  justify-center lg:flex-row   ">
            <img className=" w-52" src={item.image} />
            <div className="flex flex-col justify-between lg:place-items-start lg:ml-4 place-items-center ">
              <h2 className="font-black text-center mt-3 text-xl">{item.title}</h2>
              <h3 className="text-reno-sand-400 mt-3 text-xl">Desde ${item.price}</h3>
              <ul>
                {item.text.map((text,index) => (
                  <li key={index}>
                    <span className="text-reno-sand-300">-</span> {text}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
              <button className="bg-reno-sand-500 hover:bg-reno-sand-400 text-white mt-5 sm:w-52 p-2">Contáctenos</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
