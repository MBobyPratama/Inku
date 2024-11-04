import LogoHD from "../assets/logoHD.png";
import FotoBanner from "../assets/FotoBanner.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="flex p-6 gap-4 sm:gap-24 items-center justify-center sm:h-screen">
      <div className="flex flex-col justify-center items-center">
        <img
          src={LogoHD}
          className="sm:h-[200px]"
          alt="Logo Inku"
          draggable={false}
        />
        <h1 className="text-text font-semibold mt-2 sm:text-4xl overflow-clip">
          Weaving Words, Crafting Stories
        </h1>
        <Link
          to="chat"
          className="text-primary bg-secondary p-2  sm:p-4 px-2 sm:px-6 font-medium text-[12px] sm:text-2xl  rounded-xl mt-2 sm:mt-12 "
        >
          Let's Start
        </Link>
      </div>
      <div>
        <img
          src={FotoBanner}
          alt="Foto Banner"
          className="sm:w-[500px]"
          draggable={false}
        />
      </div>
    </section>
  );
}
