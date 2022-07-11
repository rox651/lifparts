import FedexLogo from "../../assets/img/expor/logos/FedEx_Express-1.png";
import UPS from "../../assets/img/expor/logos/ups.png";
import Tropical from "../../assets/img/expor/logos/tropical-cuisine.png";
import Cargo from "../../assets/img/expor/logos/cargo.png";
import DHL from "../../assets/img/expor/logos/DHL-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LogosImages = [FedexLogo, UPS, Tropical, Cargo, DHL];

export default function SliderExport() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation, Thumbs]}
        grabCursor={true}
        className="  w-11/12 h-52"
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
        {LogosImages.map((logo, index) => (
          <SwiperSlide
            className="w-36 grid transition-all hover:-translate-y-2 opacity-80 hover:opacity-100 place-items-center"
            key={index}
          >
            <img
              className="w-2/5  sm:w-60 object-contain"
              src={logo}
              alt={`logo ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
