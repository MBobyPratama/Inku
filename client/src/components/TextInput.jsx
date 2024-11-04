import { ArrowRight } from "lucide-react";
export default function TextInput({ input, setInput, getData }) {
  return (
    <>
      <div className="flex items-center justify-center w-screen p-5">
        <div className="flex justify-between bg-transparent w-fit p-5 border-2 border-primary rounded-3xl gap-4">
          <textarea
            className="w-fit sm:w-screen md:w-[600px] h-6 overflow-hidden"
            name="input"
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What would you like to say?"
            spellCheck="false"
          ></textarea>
          <button onClick={() => getData(input)}>
            <ArrowRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
}
