import { useState } from "react";

export default function Chat() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    if (!input.trim()) {
      console.error("Input is empty!");
      return;
    }

    const prompt = `Kamu adalah Ai yang dibuat dengan tujuan untuk membantu penulis memberikan ide story yang mendalam dan ide karakter. Jika Prompt tidak sesuai dengan tujuan kamu, tolong jangan dijawab. Jika pengguna memberikan terimakasih atau bertanya tentang kamu, kamu boleh menjawabnya. Berikut Prompt-nya: ${input}`;

    try {
      setLoading(true);
      setData((prevData) => [...prevData, input]);

      const res = await fetch("/generate", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      const responseString = data.result.trim();
      setData((prevData) => [...prevData, responseString]);
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

  return (
    <>
      <h2 className="text-4xl">Inku</h2>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className="w-[100vw]"
      />
      <button onClick={getData}>Submit</button>
      <ul className="w-1/2">
        {/* Render existing data items */}
        {data.map((item, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? "text-right" : "text-left"}
          >
            {item}
          </li>
        ))}

        {/* Show loading indicator at the end, without replacing the list */}
        {loading && <li className="italic text-gray-500">Loading...</li>}
      </ul>
    </>
  );
}
