import logo from "/logo.svg";
import hamburger from "/icon-hamburger.svg";
import hero from "/image-hero.jpg";
import close from "/icon-close.svg";
import { useState } from "react";

export default function MobileHeader() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((pS) => !pS);
  }
  return (
    <header className="relative">
      {menu === true ? (
        <nav className="absolute top-0 right-0 left-0 z-1 h-dvh bg-black p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="w-35">
              <img src={logo} alt="" />
            </div>
            <div className="w-5">
              <button onClick={toggleMenu}>
                <img src={close} alt="" />
              </button>
            </div>
          </div>
          <ul className="mt-30 flex flex-col gap-4 text-2xl uppercase">
            <li>about</li>
            <li>careers</li>
            <li>events</li>
            <li>products</li>
            <li>support</li>
          </ul>
        </nav>
      ) : (
        ""
      )}
      <div className="relative">
        <img src={hero} alt="" />
        <div className="absolute top-0 w-full p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="w-35">
              <img src={logo} alt="" />
            </div>
            <button onClick={toggleMenu}>
              <img src={hamburger} alt="" />
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 right-5 left-5 -translate-y-1/2 border-2 p-4 text-4xl font-light tracking-wider text-white uppercase">
          immersive
          <br />
          experiences
          <br />
          that
          <br /> deliver
        </div>
      </div>
    </header>
  );
}
