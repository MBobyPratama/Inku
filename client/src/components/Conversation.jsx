import ReactMarkdown from "react-markdown";

export default function Conversation({ listRef, data = [], loading }) {
  return (
    <ul ref={listRef} className="w-full  overflow-auto">
      {Array.isArray(data) &&
        data.map((item, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? "text-right" : "text-left"}
          >
            <ReactMarkdown>{item}</ReactMarkdown>
          </li>
        ))}
      {loading && <li className="italic text-gray-500">Loading...</li>}
    </ul>
  );
}
