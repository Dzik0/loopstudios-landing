import logo from "/logo.svg";
import hamburger from "/icon-hamburger.svg";
import hero from "/image-hero.jpg";

export default function MobileHeader() {
  return (
    <header>
      <div className="relative">
        <img src={hero} alt="" />
        <div className="absolute top-0 w-full p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="w-35">
              <img src={logo} alt="" />
            </div>
            <div>
              <img src={hamburger} alt="" />
            </div>
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
