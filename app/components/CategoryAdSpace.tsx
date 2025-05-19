export default function CategoryAdSpace() {
  const darkMode = false;

  return (
    <>
      <div
        className={`mt-4 p-3 rounded-lg border border-dashed ${
          darkMode
            ? "border-gray-700 bg-gray-800/50"
            : "border-gray-300 bg-gray-100"
        } text-center`}
      >
        <p
          className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          SPONSORED
        </p>
        <div className="h-12 flex items-center justify-center">
          <a
            href="https://x.com/solsearchweb3"
            target="_blank"
            rel="noopener noreferrer" 
            className={`text-sm ${
              darkMode ? "text-gray-500" : "text-gray-400"
            } hover:underline cursor-pointer`}
          >
            Your Ad Could Go Here! Contact us @SolSearchWeb3 On X
          </a>
        </div>
      </div>
    </>
  );
}
