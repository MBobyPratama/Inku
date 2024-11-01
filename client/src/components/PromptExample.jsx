export default function PromptExample({ getData }) {
  const promptList = [
    "Buatkan Ide karakter Untuk Teman Pemain Utama",
    "Berikan Ide Cara Menyelesaikan Klimaks Cerita Ini",
  ];
  return (
    <div className="flex gap-3 flex-wrap">
      {promptList.map((prompt, index) => (
        <button
          className="text-center bg-slate-300 p-2"
          key={index}
          onClick={() => {
            getData(prompt);
          }}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
