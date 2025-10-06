import logo from "/logo.svg";
import facebook from "/icon-facebook.svg";
import pinterest from "/icon-pinterest.svg";
import twitter from "/icon-twitter.svg";
import instagram from "/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-15 bg-black p-15 text-center text-white">
      <div className="flex flex-col gap-10">
        <div className="w-40">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex flex-col gap-4 font-bold">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex gap-5">
          <div>
            <img src={facebook} alt="" />
          </div>
          <div>
            <img src={twitter} alt="" />
          </div>
          <div>
            <img src={pinterest} alt="" />
          </div>
          <div>
            <img src={instagram} alt="" />
          </div>
        </div>
        <p className="text-sm text-gray-400">
          &#169; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
