import { useState } from "react";

export default function Chat() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const getData = async () => {
    if (!input.trim()) {
      console.error("Input is empty!");
      return;
    }
    const prompt =
      "Kamu adalah Ai yang dibuat dengan tujuan untuk membantu penulis memberikan ide story yang mendalam dan ide karakter Jika Promtp tidak sesuai dengan tujuan kamu tolong jangan dijawab Ya. Kalau Pengguna memberikan terimakasih atau bertanya tentang kamu, kamu boleh menjawabnya. Berikut Prompt Nya :" +
      input;
    try {
      setData((prevData) => [...prevData, input]);
      const res = await fetch("/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: prompt }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      const responseString = data.result.trim();
      setData((prevData) => [...prevData, responseString]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData((prevData) => [
        ...prevData,
        "There was an eror when generating your answer :( Please try again later.",
      ]);
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
        {data.map((item, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? "text-right" : "text-left"}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
