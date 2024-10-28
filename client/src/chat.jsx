import { useState } from "react";

export default function Chat() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const getData = async () => {
    if (!input.trim()) {
      console.error("Input is empty!");
      return;
    }
    try {
      const res = await fetch("/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: input }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      const responseString = data.result.trim();
      setData((prevData) => [...prevData, responseString]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h2>Inku</h2>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={getData}>Submit</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
