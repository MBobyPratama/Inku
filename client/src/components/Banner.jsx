import Logo from "../assets/logo.png";
import FotoBanner from "../assets/FotoBanner.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="flex p-6 gap-3 items-center justify-center sm:h-screen">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo Inku" draggable={false} />
        <h1 className="text-text font-semibold mt-2 sm:text-2xl">
          Weaving Words, Crafting Stories
        </h1>
        <Link
          to="chat"
          className="text-primary bg-secondary p-2 rounded-xl mt-2"
        >
          Let's Start
        </Link>
      </div>
      <div>
        <img
          src={FotoBanner}
          alt="Foto Banner"
          className="sm:w-96"
          draggable={false}
        />
      </div>
    </section>
  );
}
