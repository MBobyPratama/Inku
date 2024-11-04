import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <nav className="overflow-clip">
      <ul className="flex flex-col items-center mt-4">
        <div className="flex flex-col sm:flex-row items-center gap-14 mt-6">
          <img src={Logo} className="w-[150px]" />
          <div className="flex gap-12">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="">Help & Support</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
