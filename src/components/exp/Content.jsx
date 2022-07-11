import Carge from "../../assets/img/expor/levantacarga.jpg";

export default function Content() {
  return (
    <>
      <div className="w-3/4  mx-auto my-10 text-center">
        <h2 className=" text-reno-sand-500 font-black text-2xl md:text-3xl">
          EXPORTAMOS A TODO EL MUNDO
        </h2>
        <p className=" my-4 text-sm">
          Florida es la puerta de entrada a América Latina y el Caribe
        </p>
      </div>
      <div className="md:flex ">
        <div className="w-4/5 mx-auto my-0 text-sm tracking-wide leading-5 sm:px-20 sm:w-auto md:pl-20 md:pr-0 lg:pl-32 lg:pr-16 lg:leading-7   ">
          <p className="mb-4">
            Debido a que Lift Parts & Export se encuentra en el sur de la
            Florida, podemos asegurarle que tendrá las piezas solicitadas en tan
            solo 1 o 2 días después de realizar los pedidos. Entendemos las
            necesidades urgentes de nuestros clientes y nos enorgullecemos de un
            tiempo de respuesta rápido y una entrega rápida.
          </p>
          <p className="mb-4">
            Realizamos envíos de acuerdo con las instrucciones de nuestros
            clientes y trabajamos con las principales aerolíneas, empresas de
            logística líderes y servicios de entrega de paquetes y correo
            urgente. Haremos todo lo posible para asegurarnos de que sus piezas
            se reciban a tiempo.
          </p>
        </div>
        <img className="md:w-2/5 md:h-1/2 md:mr-10" src={Carge} />
      </div>
    </>
  );
}
