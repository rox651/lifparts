import Button from "../Button";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section id="ctn-grid" className="my-5 px-10 py-10 md:py-16 md:px-52 lg:px-72">
      <h2 className="text-center font-bold mb-6 text-2xl lg:text-3xl">
        Lift Parts & Export
      </h2>
      <p className="leading-5 mx-1 text-center text-base mb-2 tracking-wide md:mb-8 lg:px-24 lg:leading-6">
        Con más de <strong>18 años de experiencia</strong> en la industria de
        manipulación de materiales, Lift Part & Export es el lugar para
        suministrarle las piezas de repuesto que su equipo necesita.
      </p>
      <div>
        <div className="text-sm columns-1 leading-6 tracking-wide md:grid md:grid-cols-2 lg:text-md">
          <p className="my-3 md:mr-4 lg:mr-10">
            Tenemos la experiencia y el conocimiento para proporcionarle
            repuestos genericos y/o originales para cualquier marca de
            montacargas o equipos industriales.
          </p>
          <p className="my-3 md:my-0 col-start-1 md:mr-4 lg:mr-10">
            Ya sea que su empresa opere un montacargas o cien de ellos, su
            negocio aún depende del tiempo de inactividad mínimo de la
            carretilla elevadora para mantener su negocio en movimiento. Aquí es
            donde Lift Parts & Export satisface sus necesidades.
          </p>
          <p className="my-3 md:ml-10 md:col-start-2 md:row-start-1 ">
            Desde repuestos básicos como filtros y sellos de aceite hidráulico
            hasta bombas y cilindros; puede estar seguro de que seguiremos
            trabajando hasta que su equipo esté en funcionamiento.
          </p>
          <Link to="/contact">
            <Button>Contáctenos</Button>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
