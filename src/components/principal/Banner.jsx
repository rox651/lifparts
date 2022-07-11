import Button from "../Button";
import World from "../../assets/img/principal/world.jpg";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div
      className="m-8 bg-black text-center flex flex-col justify-center place-items-center md:m-0 md:w-full md:flex-row md:text-xl md:h-36"
      style={{
        backgroundImage: `url(${World})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white font-bold mt-8 md:mt-0">
        Exportamos alrededor de todo el mundo.
      </h1>
      <Link to="/contact">
        <Button mtop="12" mleft="10">
          Contáctenos
        </Button>
      </Link>
      
    </div>
  );
}
