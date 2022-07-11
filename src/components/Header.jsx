import Logo from "../assets/img/component/Logo-1.jpg";
import bars from "../assets/img/component/bars-solid.svg";
import Xmark from "../assets/img/component/xmark-solid.svg";
import { Link } from "react-router-dom";
import { navData } from "./navData";

export default function Header({ path, scrollToTop, closeMenu, openMenu, isOpenMenu }) {

  const handle = ()=>{
    scrollToTop()
    closeMenu()
  }
  return (
    <>
      <header className=" bg-reno-sand-900 text-white flex justify-center  flex-wrap px-5 py-5 lg:py-2 lg:text-xs gap-2 md:flex-nowrap md:justify-between">
        <ul className="flex justify-around w-80 flex-wrap">
          <li className="flex">
            <a href="">parts@liftpartsfl.com</a>
          </li>
          <li>
            <a href="">(305) 468-1824</a>
          </li>
        </ul>
        <nav className="flex list-none w-80 justify-around flex-wrap">
          <li>¿Qué hacemos?</li>
          <li>Contáctenos</li>
          <li>Search</li>
        </nav>
      </header>
      <header className="shadow-lg flex w-full sticky z-50  px-4 justify-between  top-0 lg:py-3 bg-white ">
        <Link to="/">
          <img
            onClick={scrollToTop}
            src={Logo}
            className="w-60 md:w-50 mx-auto h-auto my-0 md:mx-0 object-cover py-3"
            alt="logo"
          />
        </Link>
        <ul
          className={`nav ${
            isOpenMenu ? "right-0" : "-right-full"
          } fixed shadow-2xl top-0 pt-10 z-40  text-left  w-72 transition-all ease-in-out  h-screen   bg-reno-sand-850 lg:w-auto lg:shadow-none lg:p-0  lg:h-auto  lg:bg-transparent  lg:text-xs font-bold lg:static lg:flex lg:justify-around md:place-items-center gap-4`}
        >
          <div onClick={closeMenu} className="pl-5 lg:hidden">
            <img
              src={Xmark}
              className="cursor-pointer ml-56 my-0 "
              alt="logo"
            />
          </div>
          {navData.map((data, index) => {
            return (
              <Link to={data.to} key={index}>
                <li
                  onClick={handle}
                  className={`transition-colors px-5 uppercase lg:px-1 my-5 lg:m-auto  hover:text-reno-sand-400 lg:border-0   ${
                    path == data.to
                      ? "text-reno-sand-500"
                      : "text-white lg:text-black"
                  } `}
                  style={{
                    border: "1px solid rgba(255,255,255,.03)",
                  }}
                >
                  {data.nav}
                </li>
              </Link>
            );
          })}

          <li
            onClick={handle}
            className="transition-colors px-5 hover:text-reno-sand-400"
          >
            IDIOMA
          </li>
        </ul>
        <div className="w-8 lg:hidden">
          <img
            onClick={openMenu}
            src={bars}
            className="cursor-pointer mx-auto my-0 w-full object-cover h-full"
            alt="logo"
          />
        </div>
      </header>
    </>
  );
}
