import ReactMarkdown from "react-markdown";
import conversationbg from "../assets/conversationbg.png";

export default function Conversation({ listRef, data = [], input = [] }) {
  return (
    <section
      className="flex justify-center w-full mt-12 "
      style={{ backgroundImage: `url(${conversationbg})` }}
    >
      <div className="flex flex-row justify-between w-full max-w-4xl h-screen gap-12 mt-20">
        <div className=" bg-[#FFF4E8] rounded w-full h-fit px-4">
          <div className=" "></div>
          <ul className="">
            {Array.isArray(data) &&
              data.map((item, index) => (
                <li key={index}>
                  <ReactMarkdown>{item}</ReactMarkdown>
                </li>
              ))}
          </ul>
        </div>

        <div className=" bg-[#FFF4E8] rounded w-full h-fit px-4 ">
          <div className=" w-fit"></div>
          <ul className="flex flex-col items-end text-end">
            {Array.isArray(input) &&
              input.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
