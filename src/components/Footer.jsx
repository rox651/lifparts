import Logo from "../assets/img/component/Logo-1.jpg";
import { Link } from "react-router-dom";
import { navData } from "./navData";

export default function Footer({ path, scrollToTop, closeMenu }) {

  const handle = ()=>{
    scrollToTop()
    closeMenu()
  }

  return (
    <footer className="relative z-0 bottom-0 bg-reno-sand-750 text-white ">
      <Link to="/">
        <img src={Logo} className="w-60 mx-auto p-4" alt="logo" />
      </Link>
      <section className="w-3/4 px-10 py-10 md:w-full md:flex md:justify-around ">
        <div className="w-11/12 md:px-4 lg:w-1/3"
        style={{
          flexShrink: "0.7"
        }}>
          <h3 className="font-bold border-b-4 border-reno-sand-500 inline-block">
            Sobre nosotros
          </h3>
          <p className="my-5 text-sm lg:leading-6">
            Con más de 18 años de experiencia en la industria de manipulación de
            materiales, Lift Part & Export es el lugar para suministrarle las
            piezas de repuesto que su equipo necesita.
          </p>
        </div>
        <ul className="w-11/12 lg:w-1/5 ">
          <h3 className="font-bold border-b-4 border-reno-sand-500 inline-block">
            Conocenos
          </h3>
          {navData.map((data, index) => {
            return (
              <Link to={data.to} key={index}>
                <li
                  onClick={handle}
                  className={`my-4 text-sm transition-colors cursor-pointer hover:text-reno-sand-400 ${
                    path == data.to
                      ? "text-reno-sand-500"
                      : "text-white "
                  }`}
                >
                  {data.nav}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul className="w-11/12 lg:w-1/5">
          <h3 className="font-bold border-b-4 border-reno-sand-500 inline-block">
            Ponerse en contacto
          </h3>
          <li className="my-4 text-sm">
            <a className="border-b-2 border-transparent hover:border-white cursor-pointer">
              parts@liftpartsfl.com
            </a>
          </li>
          <li className="my-4 text-sm">
            <a className="border-b-2 border-transparent hover:border-white cursor-pointer">
              (305) 468-1824
            </a>
          </li>
          <li className="my-4 text-sm">
            <a className="border-b-2 border-transparent hover:border-white cursor-pointer">
              (305) 468-1824
            </a>
          </li>
          <div className="my-4 text-sm">
            <a className=" cursor-pointer">iconos</a>
          </div>
        </ul>
      </section>
      <section className="bg-reno-sand-800 text-white py-4 px-6 text-center lg:flex lg:px-4 lg:py-2">
        <h3 className="my-5 text-sm lg:w-1/2 lg:text-xs">
          © 2021 Liftparts - Todos los derechos reservados | Diseñado por{" "}
          <strong>Homero Bracamonte</strong>
        </h3>
        <ul className="flex justify-around w-full text-sm lg:w-1/2 lg:place-items-center  ">
          <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
            Mapa del sitio
          </li>
          <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
            Terminos y condiciones
          </li>
          <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
            Políticas de privacidad
          </li>
        </ul>
      </section>
    </footer>
  );
}
