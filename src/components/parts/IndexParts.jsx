import BannerSecondary from "../BannerSecondary";
import PartsImg from "../../assets/img/parts/parts.jpg";
import Items from "./Items";
import { partsData } from "./partsData";

export default function IndexParts() {
  return (
    <main className="grid place-items-center">
      <BannerSecondary bg={PartsImg}>PARTES</BannerSecondary>
      <h1 className="text-center mt-20 font-bold text-reno-sand-500 text-3xl w-3/5">
        Podemos ofrecerle una gran variedad de productos en función de sus
        necesidades:
      </h1>
      <Items partsData={partsData} />
    </main>
  );
}
