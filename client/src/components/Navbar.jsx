import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col items-center mt-4">
        <div className="flex gap-5 sm:gap-24 mt-6">
          <li>
            <Link to="/" className=" text-[12px] sm:text-xl">
              Home
            </Link>
          </li>
          <li>
            <a href="" className=" text-[12px] sm:text-xl">
              Help & Support
            </a>
          </li>
          <li>
            <a href="" className=" text-[12px] sm:text-xl">
              About Us
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
