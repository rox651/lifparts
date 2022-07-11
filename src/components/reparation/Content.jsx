import Herramienta from "../../assets/img/about/herramienta.jpg";

export default function Content() {
  return (
    <div className="  mx-auto my-10 text-center">
      <h2 className="px-5 text-reno-sand-500 font-black text-2xl md:text-3xl">
        EXPORTAMOS A TODO EL MUNDO
      </h2>
      <div className="px-12 text-justify md:px-16 py-9 md:grid md:grid-cols-2 text-sm md:leading-6 ">
        <section className="my-5 md:text-center md:col-span-2 md:mx-32 lg:mx-72">
          Mantener sus montacargas en funcionamiento con un mantenimiento
          regular es importante para la productividad de su negocio y es una
          forma clave de reducir costos y preservar la vida de su flota de
          montacargas.
        </section>
        <section className="my-5 md:mx-10 lg:ml-20 ">
          Lift Parts & Export puede ayudarlo con una lista de verificación de
          mantenimiento preventivo planificado. Parte de nuestro trabajo es
          evitar averías y problemas antes de que se presenten complicaciones.
          Llámenos y podemos programar una cita de servicio a su conveniencia.
          <h2 className="font-black text-lg my-5">¡QUÉ HACEMOS!</h2>
          Ofrecemos todo tipo de reparación para sus montacargas. No hay trabajo
          demasiado grande o demasiado pequeño, desde el servicio de puesta a
          punto hasta la revisión del motor. Tenemos las herramientas y la
          experiencia para reparar sus montacargas y ponerlas en marcha,
          ¡rápido!
          <br />
        </section>

        <img
          className="w-4/5 mx-auto my-0 md:mx-0 md:my-auto md:w-full "
          src={Herramienta}
        ></img>
      </div>
    </div>
  );
}
