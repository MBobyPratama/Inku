import password from "../assets/password.png";
import user from "../assets/user.png";
import bar from "../assets/bar.png";

export default function Signup() {
  return (
    <section id="login">
      <div className="flex justify-center mt-4 items-center h-screen">
        <div className="flex flex-col items-center bg-primary p-6 px-12 rounded-xl h-fit">
          <img src={bar} className="h-[20px] mb-4" alt="Bar" />
          <h2 className="text-3xl sm:text-4xl overflow-clip opacity-0 sm:opacity-100">
            Login
          </h2>
          <span className="flex items-center gap-1 bg-secondary p-2 rounded mt-4 drop-shadow-xl">
            <img src={user} className="w-[25px] h-[25px]" alt="" />
            <img src="" alt="" />
            <input
              type="text"
              placeholder="Username"
              className="p-2 sm:w-[400px] bg-transparent focus:outline-none"
            />
          </span>
          <span className="flex items-center gap-2 bg-secondary p-2 rounded mt-4 drop-shadow-xl">
            <img
              src={password}
              className="w-[25px] h-[25px]"
              alt="logo password"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 sm:w-[400px] bg-transparent focus:outline-none"
            />
          </span>
          <button className="bg-secondary text-primary rounded-xl px-20 p-2 text-xl mt-10 drop-shadow-xl">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
