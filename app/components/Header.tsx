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

        {/* X Logo Link */}
        <a
          href="https://x.com/solsearchweb3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}