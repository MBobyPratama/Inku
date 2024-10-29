import React, { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const getData = async () => {
    if (!input.trim()) {
      console.error("Input is empty!");
      return;
    }

    try {
      setLoading(true);
      setData((prevData) => [...prevData, input]);

      const res = await fetch("/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: input }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      const responseString = data.result.trim();
      setData((prevData) => [...prevData, responseString]);
      setInput("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setData((prevData) => [
        ...prevData,
        "There was an error generating your answer. Please try again later.",
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <>
      <h2 className="text-4xl">Inku</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-[100vw]"
      />
      <button onClick={getData}>Submit</button>
      <ul ref={listRef} className="w-1/2 h-screen overflow-auto">
        {data.map((item, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? "text-right" : "text-left"}
          >
            <ReactMarkdown>{item}</ReactMarkdown>
          </li>
        ))}

        {/* Show loading indicator at the end, without replacing the list */}
        {loading && <li className="italic text-gray-500">Loading...</li>}
      </ul>
    </>
  );
}
