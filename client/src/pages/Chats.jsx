import React, { useState, useRef, useEffect } from "react";
import TextInput from "../components/TextInput";
import Conversation from "../components/Conversation";
import PromptExample from "../components/PromptExample";

export default function Chats() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const getData = async (userPrompt) => {
    if (!input.trim() && !userPrompt) {
      console.error("Input is empty!");
      return;
    }

    try {
      setLoading(true);
      setData((prevData) => [...prevData, userPrompt]);

      const res = await fetch("/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: userPrompt }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

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
  {
    useEffect(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    }, [data]);
  }

  return (
    <>
      <main>
        <div className="flex flex-col justify-center h-screen items-center">
          <h1>How Can I Help You Today?</h1>
          <TextInput input={input} setInput={setInput} getData={getData} />
          <PromptExample setInput={setInput} getData={getData} />
          <Conversation listRef={listRef} data={data} loading={loading} />
        </div>
      </main>
    </>
  );
}
