import { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import { sliderData } from "./sliderData";

import Dots from "./Dots";

const len = sliderData.length - 1;

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="w-full relative m-auto overflow-hidden h-128">
      <SliderContent activeIndex={activeIndex} imageSlider={sliderData} />
      <Dots
        activeIndex={activeIndex}
        imageSlider={sliderData}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
