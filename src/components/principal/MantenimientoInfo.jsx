import Button from "../Button";
import { Link } from "react-router-dom";
export default function MantenimientoInfo() {
  return (
    <div className="ctn-man md:flex md:px-16 md:justify-center md:py-11">
      <h2 className="text-center font-bold text-xl mb-8 md:my-9 md:text-3xl ">
        Mantenimiento y reparaciones
      </h2>
      <div className="px-10 tracking-wide text-sm md:mr-24 md:pr-16">
        <strong>
          Brindamos servicio interno y en el lugar para todas las marcas y
          modelos de montacargas con personal capacitado y certificado.
        </strong>
        <p className="my-4">
          Programas personalizados y programación de vehículos de servicio bien
          surtidos y equipados
        </p>
        <strong>Puntos cubiertos por su solicitud:</strong>
        <ul className="mt-5">
          <li className="my-2">
            <span className="text-reno-sand-300">-</span> Una inspección
            completa del montacargas
          </li>
          <li className="my-2">
            <span className="text-reno-sand-300">-</span> Engrase y lubricación
          </li>
          <li className="my-2">
            <span className="text-reno-sand-300">-</span> Inspección y reemplazo
            de filtros y fluidos
          </li>
          <li className="my-2">
            <span className="text-reno-sand-300">-</span> Comprobación del
            funcionamiento del freno
          </li>
          <li className="my-2">
            <span className="text-reno-sand-300">-</span> Inspección y prueba de
            todos los cilindros y mangueras hidráulicas
          </li>
          <li>
            <span className="text-reno-sand-300">-</span> Verificación del
            montaje y el carro en posición vertical
          </li>
          <li className="my-2">
            <span className="text-reno-sand-300">-</span> Comprobación y prueba
            de la batería
          </li>
          <li className="my-2">
            <span className="text-reno-sand-300">-</span> Y mucho más...
          </li>
          <Link to="/rep">
            <Button mleft="0">Saber más</Button>
          </Link>
       
        </ul>
      </div>
    </div>
  );
}
