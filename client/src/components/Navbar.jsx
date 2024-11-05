import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col items-center mt-4">
        <div className="flex gap-5 sm:gap-24 mt-6">
          <li>
            <Link to="/" className="text-text text-[12px] sm:text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="chat" className="text-text text-[12px] sm:text-xl">
              Chat
            </Link>
          </li>
          <li>
            <a href="#about" className="text-text text-[12px] sm:text-xl">
              About Us
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
