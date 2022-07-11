export default function Dots({ activeIndex, onClick, imageSlider }) {
  return (
    <div
      className="w-full h-full  absolute text-white flex justify-center  top-0 z-30"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0) 70%, rgba(0,0,0,0.6601015406162465) 88%)",
      }}
    >
      <div className="flex justify-center absolute bottom-8 md:bottom-16">
        {imageSlider.map((slide, index) => {
          return (
            <span
              key={index}
              className={` cursor-pointer w-4 h-4 mx-1 transition-colors flex  ${
                activeIndex === index ? " bg-slate-300" : "bg-slate-500 "
              }`}
              onClick={() => onClick(index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
