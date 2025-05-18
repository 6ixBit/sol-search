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
          <span
            className={`text-sm ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Category Ad Space
          </span>
        </div>
      </div>
    </>
  );
}
