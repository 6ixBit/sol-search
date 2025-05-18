export default function MainAdSpace() {
    const darkMode = false;
    return (
        <>
           {/* Featured Ad Banner */}
           <div className={`mb-6 p-4 rounded-lg border-2 border-dashed ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-gray-100'} text-center`}>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>FEATURED SPONSOR</p>
              <div className="h-16 md:h-24 flex items-center justify-center">
                <span className={`text-lg ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Premium Ad Space</span>
              </div>
            </div>
        </>
    )