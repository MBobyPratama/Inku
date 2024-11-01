import { ArrowRight } from "lucide-react";
export default function TextInput({ input, setInput, getData }) {
  return (
    <>
      <div className="w-full p-5">
        <div className="flex items-center bg-slate-500 w-full p-5 rounded-3xl gap-4">
          <textarea
            className="w-full h-6"
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
