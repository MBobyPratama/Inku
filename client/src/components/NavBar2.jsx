import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <nav className="overflow-clip">
      <ul className="flex flex-col items-center mt-4 mr-4">
        <div className="flex flex-col sm:flex-row items-center  sm:gap-24 mt-6">
          <img src={Logo} className="w-[150px] sm:absolute sm:left-20" />
          <div className="flex gap-12 sm:gap-24">
            <li>
              <Link className="text-[12px] sm:text-xl" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="text-[12px] sm:text-xl">
                Chat
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[12px] sm:text-xl">
                About Us
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
