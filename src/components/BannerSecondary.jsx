
export default function BannerSecondary({ children, bg }) {
  return (
    <main
      className="w-full h-32 md:h-60 px-2 py-1 grid place-items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="bg-white text-reno-sand-500 font-bold text-2xl md:text-3xl tracking-wide uppercase px-5 md:px-20 py-1  text-center">{children}</h1>
    </main>
  );
}
