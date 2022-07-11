export default function Button({ children, mleft = "10", mtop = "0" }) {
  return (
    <button
      className={`btn my-6 text-sm bg-reno-sand-500 text-white py-2 px-8 md:ml-${mleft} md:mt-${mtop} md:max-w-max  md:max-h-full hover:bg-reno-sand-400`}
    >
      {children}
    </button>
  );
}
