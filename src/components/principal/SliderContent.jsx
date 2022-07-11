export default function SliderContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {imageSlider.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === activeIndex
                ? "w-full relative transition-all inline-block animate-opacity"
                : "transition-all hidden"
            }
          >
            <div className="absolute h-full flex flex-col md:w-1/2 justify-center px-5 place-items-center md:place-items-end md:px-0 right-0 text-center md:text-left z-10">
              <h2 className="bg-white text-3xl p-2 font-bold mb-4 md:w-full md:text-4xl  text-reno-sand-500">
                {slide.title}
              </h2>
              <p className="bg-white p-3 text-lg md:w-full">{slide.desc}</p>
            </div>
            <img
              className="w-full transition-all  h-128   object-cover  animate-scaleAnimation"
              src={slide.image}
            />
          </div>
        );
      })}
    </section>
  );
}
