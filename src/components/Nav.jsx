import { headerLogo } from "../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-black hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:flex">
          <RiMenu3Line
            color="#000000"
            size={27}
            onClick={() => setMenuToggle(true)}
          />
        </div>

        {menuToggle && (
          <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-start items-center z-5 bg-gray-100">
            <RiCloseLine
              color="#000000"
              size={27}
              className="absolute top-[40px] right-[40px] cursor-pointer"
              onClick={() => setMenuToggle(false)}
            />
            <ul className="mt-40">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="m-[2rem] text-[2rem]"
                  onClick={() => setMenuToggle(false)}
                >
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-black hover:text-coral-red"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
