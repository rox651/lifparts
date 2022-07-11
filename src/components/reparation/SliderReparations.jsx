import Complete from "../../assets/img/reparation/complete.jpg";
import Cylinder from "../../assets/img/reparation/cylinder.jpg";
import Diferential from "../../assets/img/reparation//diferential.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Images = [
  {
    image: Complete,
    text: "Complete brake job",
  },
  {
    image: Cylinder,
    text: "Cylinder head rebuild",
  },
  {
    image: Diferential,
    text: "Diferential removal and repair",
  },
];

export default function SliderReparations() {
  return (
    <>
      <h2 className=" font-black text-center text-xl md:text-2xl uppercase mb-5">Nuestro trabajo</h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation, Thumbs]}
        grabCursor={true}
        className="  md:w-5/6   "
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
       
        {Images.map((logo, index) => (
          <SwiperSlide
            className="w-36 grid px-9  opacity-80 hover:opacity-100 place-items-center"
            key={index}
            style={{
              transition: ".4s",
            }}
          >
            <img
              className="w-3/5 hover:-translate-y-2   sm:w-64  "
              src={logo.image}
              alt={`logo ${index}`}
              style={{
                transition: ".4s",
              }}
            />
            <p className="md:text-center mt-3">{logo.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
