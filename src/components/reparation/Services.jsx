import { servicesElements } from "../../assets/img/reparation/services";

export default function Services() {
  return (
    <div className="grid gap-5 mb-20 px-10 sm:grid-cols-2 md:grid-cols-5  place-items-center justify-center ">
      {servicesElements.map((service, index) => {
        return (
          <div key={index} className="text-center grid place-items-center">
            <div className="hover:opacity-80 transition-opacity w-20 h-20 grid place-items-center rounded-full bg-reno-sand-500">
              <img src={service.image} className="object-contain" />
            </div>
            <p className="text-sm w-5/6">{service.text}</p>
          </div>
        );
      })}
    </div>
  );
}
