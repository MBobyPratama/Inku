export default function PromptExample({ getData }) {
  const promptList = [
    "Buatkan Ide karakter Untuk Teman Pemain Utama",
    "Berikan Ide Cara Menyelesaikan Klimaks Cerita Ini",
  ];
  return (
    <div className="flex sm:flex-row justify-center gap-3 mx-5 ">
      {promptList.map((prompt, index) => (
        <button
          className="text-center p-4 rounded-lg bg-transparent border-2 border-primary"
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
