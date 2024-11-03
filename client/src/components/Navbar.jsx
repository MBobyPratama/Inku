import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col items-center mt-4">
        <div className="flex gap-5 mt-6">
          <li>
            <a href="">Home</a>
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
