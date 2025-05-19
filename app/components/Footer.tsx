export default function Footer() {
  const darkMode = false;
  return (
    <>
      {/* Footer */}
      <footer
        className={`mt-12 py-8 px-4 md:px-8 border-t ${
          darkMode
            ? "border-gray-800 bg-gray-900"
            : "border-gray-200 bg-gray-50"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div
              className={`text-xl font-black ${
                darkMode ? "text-green-400" : "text-purple-600"
              }`}
              style={{ fontFamily: '"Press Start 2P", cursive' }}
            >
              SOL
              <span className={darkMode ? "text-yellow-400" : "text-blue-600"}>
                SEARCH
              </span>
            </div>
            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              The ultimate navigator for the Solana ecosystem
            </p>
          </div>
          {/* <div className="flex flex-col md:flex-row gap-4 items-center">
            <button
              className={`px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-purple-600 hover:bg-purple-700"
              } text-white transition-colors`}
            >
              Submit a Resource
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition-colors`}
            >
              Advertise with Us
            </button>
          </div> */}
        </div>
        <div
          className={`mt-8 pt-4 border-t ${
            darkMode
              ? "border-gray-800 text-gray-500"
              : "border-gray-200 text-gray-600"
          } text-center text-sm`}
        >
          &copy; {new Date().getFullYear()} Sol Search. All rights reserved.
        </div>
      </footer>
    </>
  );
}
