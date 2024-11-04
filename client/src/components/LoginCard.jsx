import password from "../assets/password.png";
import user from "../assets/user.png";

export default function LoginCard() {
  return (
    <section id="login">
      <div className="flex justify-center mt-4 items-center h-screen">
        <div className="flex flex-col items-center bg-primary w-fit p-6 rounded-xl h-fit">
          <h2 className="text-3xl opacity-0 sm:opacity-100">Login</h2>
          <span className="flex items-center gap-1 bg-secondary p-2 rounded mt-4 drop-shadow-xl">
            <img src={user} className="w-[25px] h-[25px]" alt="" />
            <img src="" alt="" />
            <input
              type="text"
              placeholder="Username"
              className="p-2 bg-transparent focus:outline-none"
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
              className="p-2 bg-transparent focus:outline-none"
            />
          </span>
          <button className="bg-secondary text-primary rounded-xl px-6 p-2 mt-4 drop-shadow-xl">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
