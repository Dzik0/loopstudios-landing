import logo from "/logo.svg";
import facebook from "/icon-facebook.svg";
import pinterest from "/icon-pinterest.svg";
import twitter from "/icon-twitter.svg";
import instagram from "/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-15 bg-black p-15 text-center text-white md:flex-row md:justify-between md:p-5 md:px-20">
      <div className="flex flex-col gap-10 md:gap-4">
        <div className="w-40 md:w-25">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex flex-col gap-4 font-bold md:flex-row md:text-xs">
            <li className="cursor-pointer hover:text-yellow-200">About</li>
            <li className="cursor-pointer hover:text-yellow-200">Careers</li>
            <li className="cursor-pointer hover:text-yellow-200">Events</li>
            <li className="cursor-pointer hover:text-yellow-200">Products</li>
            <li className="cursor-pointer hover:text-yellow-200">Support</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:items-end">
        <div className="flex gap-5 md:gap-3">
          <div className="cursor-pointer md:w-4">
            <img src={facebook} alt="" />
          </div>
          <div className="cursor-pointer md:w-4">
            <img src={twitter} alt="" />
          </div>
          <div className="cursor-pointer md:w-4">
            <img src={pinterest} alt="" />
          </div>
          <div className="cursor-pointer md:w-4">
            <img src={instagram} alt="" />
          </div>
        </div>
        <p className="text-sm text-gray-400 md:text-xs">
          &#169; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
