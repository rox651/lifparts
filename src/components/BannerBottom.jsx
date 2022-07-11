import Engine from "../assets/img/component/Engine.jpg";

export default function BannerBottom() {
  return (
    <div
      className="my-5 mx-5 h-40 md:mx-20 md:my-12"
      style={{
        backgroundImage: `url(${Engine})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white flex flex-col justify-center place-items-center md:text-lg w-full h-full">
        <strong>¿Quiere más información?</strong>
        <p className="text-center">
          Póngase en contacto con nosotros en{" "}
          <a href="" className=" text-reno-sand-500 font-bold">parts@liftpartsfl.com</a>
        </p>
      </div>
    </div>
  );
}
