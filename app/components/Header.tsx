import { Search, ChevronRight } from 'lucide-react';

export default function Header({ isMenuOpen, setIsMenuOpen, searchQuery, setSearchQuery }: { isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void, searchQuery: string, setSearchQuery: (searchQuery: string) => void }) {

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="relative z-10 pt-6 pb-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Tagline */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-3 text-3xl font-black drop-shadow-lg" style={{ fontFamily: '"Press Start 2P", cursive' }}>
            <span className="text-green-400">SOL</span>
            <span className="text-purple-500">SEARCH</span>
          </div>
          <div className="hidden md:block text-sm text-gray-300">
            • The Solana Ecosystem Navigator
          </div>
        </div>

        {/* Search Bar and Menu Button */}
        <div className="w-full md:w-auto flex items-center gap-3">
          <div className="relative flex-grow max-w-md border border-green-400 bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Im looking for..."
              className="w-full py-2 px-4 text-gray-900 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search size={18} className="text-gray-400" />
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-green-500 text-white"
          >
            <ChevronRight
              size={20}
              className={`transform transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}