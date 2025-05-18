import { useState } from "react";
import { Search, ChevronRight } from 'lucide-react';

export default function Header({ isMenuOpen, setIsMenuOpen, searchQuery, setSearchQuery }: { isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void, searchQuery: string, setSearchQuery: (searchQuery: string) => void }) {
  const darkMode = false;


  return (
    <>
      {/* Pixelated header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className={`w-full h-20 ${
              darkMode ? "bg-purple-900" : "bg-blue-400"
            } grid grid-cols-12`}
          >
            {Array(12)
              .fill(0)
              .map((_, i) => (
                <div key={`pixel-${i}`} className="h-full">
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <div
                        key={`pixel-${i}-${j}`}
                        className={`h-4 w-full ${
                          Math.random() > 0.7
                            ? darkMode
                              ? "bg-blue-500"
                              : "bg-purple-500"
                            : "bg-transparent"
                        }`}
                      />
                    ))}
                </div>
              ))}
          </div>
        </div>

        <div className="relative z-10 pt-8 pb-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {/* Logo */}
            <div
              className={`mr-3 text-3xl font-black ${
                darkMode ? "text-green-400" : "text-purple-600"
              }`}
              style={{ fontFamily: '"Press Start 2P", cursive' }}
            >
              SOL
              <span className={darkMode ? "text-yellow-400" : "text-blue-600"}>
                SEARCH
              </span>
            </div>
            <div
              className={`hidden md:block text-sm ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              • The Solana Ecosystem Navigator
            </div>
          </div>

          {/* Search bar & theme toggle for desktop */}
          <div className="w-full md:w-auto flex items-center gap-3">
            <div
              className={`relative flex-grow max-w-md border ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-300 bg-white"
              } rounded-lg overflow-hidden`}
            >
              <input
                type="text"
                placeholder="Search resources..."
                className={`w-full py-2 px-4 ${
                  darkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                } focus:outline-none`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search
                  size={18}
                  className={darkMode ? "text-gray-500" : "text-gray-400"}
                />
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-blue-600 text-white"
            >
              <ChevronRight
                size={20}
                className={`transform transition-transform ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
