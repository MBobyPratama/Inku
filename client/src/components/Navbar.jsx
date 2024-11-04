import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col items-center mt-4">
        <div className="flex gap-16 mt-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">Help & Support</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li className="bg-secondary rounded-xl">
            <a href="" className="text-orange-500">
              Login
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
