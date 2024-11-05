import React, { useState, useRef, useEffect } from "react";
import TextInput from "../components/TextInput";
import Conversation from "../components/Conversation";
import PromptExample from "../components/PromptExample";
import Line from "../assets/Line.png";
import Navbar2 from "../components/NavBar2";
import Loading from "../components/Loading";

export default function Chats() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);
  const [isPrompt, setIsPrompt] = useState(false);
  const apiUrl = process.env.API_URL || "http://localhost:3000";

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [data]);

  const getData = async (userPrompt) => {
    if (!input.trim() && !userPrompt) {
      console.error("Input is empty!");
      return;
    }

    try {
      setLoading(true);
      setInputData((prev) => [...prev, userPrompt]);
      setIsPrompt(true);

      const res = await fetch("${apiUrl}/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: userPrompt }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const responseData = await res.json();
      setData((prev) => [...prev, responseData.result.trim()]);
      setInput("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setData((prev) => [
        ...prev,
        "There was an error generating your answer. Please try again later.",
      ]);
      setInput("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="flex flex-col h-screen items-center">
        <Navbar2 />
        {!isPrompt && (
          <>
            <h1 className="text-text text-3xl font-bold mt-6 sm:mt-10 overflow-clip">
              WELCOME TO INKU
            </h1>
            <p className="text-center sm:w-[400px] mx-5 mb-12 sm:mb-4 overflow-clip">
              Inku is a creative AI designed to spark inspiration and guide
              writers in developing their ideas.
            </p>
          </>
        )}

        <div>
          {!isPrompt && (
            <img src={Line} alt="line" className="mb-8 mt-12 ml-1 w-screen" />
          )}
          <TextInput input={input} setInput={setInput} getData={getData} />
          {!isPrompt && <PromptExample setInput={setInput} getData={getData} />}
          {isPrompt && (
            <Conversation listRef={listRef} data={data} input={inputData} />
          )}
        </div>
        {loading && <Loading setLoading={setLoading} setData={setData} />}
      </div>
    </main>
  );
}
