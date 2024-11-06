import ReactMarkdown from "react-markdown";
import conversationbg from "../assets/conversationbg.png";

export default function Conversation({ listRef, data = [], input = [] }) {
  return (
    <section
      className="flex justify-center  w-screen mt-12 "
      style={{ backgroundImage: `url(${conversationbg})` }}
    >
      <div className="flex flex-row justify-between sm:w-screen mx-6  h-screen gap-12  mt-12 sm:ml-20">
        <div className="rounded w-full h-fit mt-10">
          <div className=" w-fit"></div>
          <ul>
            {Array.isArray(input) &&
              input.map((item, index) => (
                <li
                  className="text-[12px] sm:text-xl mt-4 bg-[#FFF4E8]"
                  key={index}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>

        <div className=" rounded w-full h-fit mt-10">
          <ul className="">
            {Array.isArray(data) &&
              data.map((item, index) => (
                <li
                  className="w-fit text-[12px] sm:text-xl mt-4 bg-[#FFF4E8] sm:w-[550px] md:w-[700px]"
                  key={index}
                >
                  <ReactMarkdown>{item}</ReactMarkdown>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
