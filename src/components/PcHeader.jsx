import hero from "/image-hero-pc.jpg";
import logo from "/logo.svg";

export default function PcHeader() {
  return (
    <header className="relative">
      <img src={hero} alt="" />
      <div className="absolute top-0 right-0 left-0 z-1 px-20 py-10">
        <nav className="flex w-full justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex gap-5 font-bold text-white">
            <li>about</li>
            <li>about</li>
            <li>about</li>
            <li>about</li>
            <li>about</li>
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-[15%] left-20 border-2 p-4 pr-20 text-4xl font-light tracking-wider text-white uppercase">
        immersive
        <br />
        experiences
        <br />
        that deliver
      </div>
    </header>
  );
}
