import { Search, ChevronRight } from 'lucide-react';

export default function Header() {

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
      </div>
    </header>
  );
}