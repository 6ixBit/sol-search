'use client'


import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, ExternalLink, Sun, Moon } from 'lucide-react';

// SolSearch component
export default function SolSearch() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Filter resources based on search query and active category
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = 
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'all' || 
      resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group resources by category
  const groupedResources = {};
  resources.forEach((resource) => {
    if (!groupedResources[resource.category]) {
      groupedResources[resource.category] = [];
    }
    groupedResources[resource.category].push(resource);
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-200`}>
      {/* Pixelated header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`w-full h-20 ${darkMode ? 'bg-purple-900' : 'bg-blue-400'} grid grid-cols-12`}>
            {Array(12).fill(0).map((_, i) => (
              <div key={`pixel-${i}`} className="h-full">
                {Array(5).fill(0).map((_, j) => (
                  <div 
                    key={`pixel-${i}-${j}`} 
                    className={`h-4 w-full ${
                      Math.random() > 0.7 
                        ? darkMode 
                          ? 'bg-blue-500' 
                          : 'bg-purple-500' 
                        : 'bg-transparent'
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
            <div className={`mr-3 text-3xl font-black ${darkMode ? 'text-green-400' : 'text-purple-600'}`} style={{ fontFamily: '"Press Start 2P", cursive' }}>
              SOL<span className={darkMode ? 'text-yellow-400' : 'text-blue-600'}>SEARCH</span>
            </div>
            <div className={`hidden md:block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              • The Solana Ecosystem Navigator
            </div>
          </div>

          {/* Search bar & theme toggle for desktop */}
          <div className="w-full md:w-auto flex items-center gap-3">
            <div className={`relative flex-grow max-w-md border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-lg overflow-hidden`}>
              <input
                type="text"
                placeholder="Search resources..."
                className={`w-full py-2 px-4 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} focus:outline-none`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search size={18} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
              </div>
            </div>
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-blue-800'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-blue-600 text-white"
            >
              <ChevronRight size={20} className={`transform transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar / Categories - Mobile Dropdown */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mb-4`}>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
              <h3 className="font-bold mb-3 text-lg">Categories</h3>
              <div className="flex flex-col gap-2">
                <CategoryButton 
                  active={activeCategory === 'all'} 
                  darkMode={darkMode}
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </CategoryButton>
                {categories.map((category) => (
                  <CategoryButton 
                    key={category.id} 
                    active={activeCategory === category.id}
                    darkMode={darkMode}
                    onClick={() => setActiveCategory(category.id)}
                    icon={category.icon}
                  >
                    {category.name}
                  </CategoryButton>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar / Categories - Desktop */}
          <div className="hidden md:block md:w-64 flex-shrink-0">
            <div className={`p-4 rounded-lg sticky top-4 ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
              <h3 className="font-bold mb-3 text-lg">Categories</h3>
              <div className="flex flex-col gap-2">
                <CategoryButton 
                  active={activeCategory === 'all'} 
                  darkMode={darkMode}
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </CategoryButton>
                {categories.map((category) => (
                  <CategoryButton 
                    key={category.id} 
                    active={activeCategory === category.id}
                    darkMode={darkMode}
                    onClick={() => setActiveCategory(category.id)}
                    icon={category.icon}
                  >
                    {category.name}
                  </CategoryButton>
                ))}
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-grow">
            {/* Featured Ad Banner */}
            <div className={`mb-6 p-4 rounded-lg border-2 border-dashed ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-gray-100'} text-center`}>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>FEATURED SPONSOR</p>
              <div className="h-16 md:h-24 flex items-center justify-center">
                <span className={`text-lg ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Premium Ad Space</span>
              </div>
            </div>

            {/* Results */}
            {activeCategory === 'all' ? (
              // Show all categories when "All" is selected
              Object.keys(groupedResources).map((category) => {
                const categoryInfo = categories.find(c => c.id === category);
                return (
                  <div key={category} className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-xl font-bold">{categoryInfo?.name || category}</h2>
                      <div className={`h-px flex-grow ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {groupedResources[category]
                        .filter(resource => 
                          resource.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .slice(0, 3)
                        .map((resource) => (
                          <ResourceCard 
                            key={resource.id} 
                            resource={resource} 
                            darkMode={darkMode} 
                          />
                        ))}
                      {groupedResources[category].length > 3 && searchQuery === '' && (
                        <button 
                          onClick={() => setActiveCategory(category)}
                          className={`flex items-center justify-center h-full rounded-lg ${
                            darkMode 
                              ? 'bg-gray-800 hover:bg-gray-700 text-blue-400' 
                              : 'bg-white hover:bg-gray-50 text-blue-600 shadow'
                          } p-4 transition-colors`}
                        >
                          <span>See all {groupedResources[category].length} resources</span>
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      )}
                    </div>
                    
                    {/* Category Ad Space */}
                    {category === 'dexes' || category === 'wallets' ? (
                      <div className={`mt-4 p-3 rounded-lg border border-dashed ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-gray-100'} text-center`}>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>SPONSORED</p>
                        <div className="h-12 flex items-center justify-center">
                          <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Category Ad Space</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })
            ) : (
              // Show specific category results
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl font-bold">
                    {categories.find(c => c.id === activeCategory)?.name || activeCategory}
                  </h2>
                  <div className={`h-px flex-grow ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                </div>
                
                {/* Category Ad Space */}
                <div className={`mb-6 p-3 rounded-lg border border-dashed ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-gray-100'} text-center`}>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>SPONSORED</p>
                  <div className="h-12 flex items-center justify-center">
                    <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Category Ad Space</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredResources.map((resource) => (
                    <ResourceCard 
                      key={resource.id} 
                      resource={resource} 
                      darkMode={darkMode} 
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-12 py-8 px-4 md:px-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className={`text-xl font-black ${darkMode ? 'text-green-400' : 'text-purple-600'}`} style={{ fontFamily: '"Press Start 2P", cursive' }}>
              SOL<span className={darkMode ? 'text-yellow-400' : 'text-blue-600'}>SEARCH</span>
            </div>
            <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The ultimate navigator for the Solana ecosystem
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white transition-colors`}>
              Submit a Resource
            </button>
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
              Advertise with Us
            </button>
          </div>
        </div>
        <div className={`mt-8 pt-4 border-t ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-600'} text-center text-sm`}>
          &copy; {new Date().getFullYear()} Sol Search. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// Category button component
const CategoryButton = ({ active, darkMode, onClick, children, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg w-full text-left transition-colors
        ${active
          ? darkMode
            ? 'bg-blue-900/50 text-blue-400 border-l-4 border-blue-500'
            : 'bg-blue-100 text-blue-800 border-l-4 border-blue-500'
          : darkMode
            ? 'hover:bg-gray-700'
            : 'hover:bg-gray-100'
        }
      `}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

// Resource card component
const ResourceCard = ({ resource, darkMode }) => {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        block rounded-lg p-4 transition-all hover:transform hover:scale-105
        ${darkMode 
          ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-900' 
          : 'bg-white hover:bg-gray-50 shadow hover:shadow-md'
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-md ${getCategoryColor(resource.category, darkMode)}`}>
          {getCategoryIcon(resource.category)}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="font-bold mb-1">{resource.name}</h3>
            <ExternalLink size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
            {resource.description}
          </p>
          {resource.tags && (
            <div className="mt-2 flex flex-wrap gap-1">
              {resource.tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`text-xs px-2 py-0.5 rounded-full
                    ${darkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

// Helper function to get category color
const getCategoryColor = (category, darkMode) => {
  const colors = {
    dexes: darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700',
    wallets: darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700',
    trading: darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700',
    nfts: darkMode ? 'bg-pink-900/50 text-pink-300' : 'bg-pink-100 text-pink-700',
    jobs: darkMode ? 'bg-yellow-900/50 text-yellow-300' : 'bg-yellow-100 text-yellow-700',
    education: darkMode ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-700',
    liquidity: darkMode ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-700',
    social: darkMode ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-700',
    tools: darkMode ? 'bg-cyan-900/50 text-cyan-300' : 'bg-cyan-100 text-cyan-700',
    gaming: darkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-100 text-orange-700',
  };
  
  return colors[category] || (darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700');
};

// Helper function to get category icon
const getCategoryIcon = (category) => {
  // In a real application, you would import icons for each category
  // For simplicity, we're just using emoji characters here
  const icons = {
    dexes: '📊',
    wallets: '👛',
    trading: '📈',
    nfts: '🖼️',
    jobs: '💼',
    education: '📚',
    liquidity: '💧',
    social: '👥',
    tools: '🛠️',
    gaming: '🎮',
  };
  
  return icons[category] || '🔍';
};

// Categories data
const categories = [
  { id: 'dexes', name: 'DEXes', icon: '📊' },
  { id: 'wallets', name: 'Wallets', icon: '👛' },
  { id: 'trading', name: 'Trading Platforms', icon: '📈' },
  { id: 'jobs', name: 'Jobs', icon: '💼' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'liquidity', name: 'Liquidity Pools', icon: '💧' },
  { id: 'nfts', name: 'NFTs', icon: '🖼️' },
  { id: 'social', name: 'Social', icon: '👥' },
  { id: 'tools', name: 'Developer Tools', icon: '🛠️' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
];

// Sample resources data
const resources = [
  // DEXes
  {
    id: 'raydium',
    category: 'dexes',
    name: 'Raydium',
    description: 'An automated market maker (AMM) built on the Solana blockchain that leverages the central order book of the Serum DEX.',
    url: '#',
    tags: ['AMM', 'Trading', 'Popular'],
  },
  {
    id: 'orca',
    category: 'dexes',
    name: 'Orca',
    description: 'A user-friendly decentralized exchange for the Solana ecosystem focused on the best-in-class trading experience.',
    url: '#',
    tags: ['AMM', 'Simple UI'],
  },
  {
    id: 'serum',
    category: 'dexes',
    name: 'Serum DEX',
    description: 'A decentralized exchange protocol with a fully on-chain central limit order book (CLOB).',
    url: '#',
    tags: ['Order Book', 'Protocol'],
  },
  {
    id: 'jupiter',
    category: 'dexes',
    name: 'Jupiter Aggregator',
    description: 'The key liquidity aggregator for Solana, providing the best swap routes across all Solana DEXes.',
    url: '#',
    tags: ['Aggregator', 'Best Rates'],
  },

  // Wallets
  {
    id: 'phantom',
    category: 'wallets',
    name: 'Phantom',
    description: 'A friendly, easy-to-use crypto wallet built for the Solana blockchain that makes it safe and easy to store, send, receive, collect, and swap tokens.',
    url: '#',
    tags: ['Browser Extension', 'Mobile'],
  },
  {
    id: 'solflare',
    category: 'wallets',
    name: 'Solflare',
    description: 'A non-custodial wallet built specifically for Solana that supports Ledger hardware wallets.',
    url: '#',
    tags: ['Browser Extension', 'Hardware Support'],
  },
  {
    id: 'backpack',
    category: 'wallets',
    name: 'Backpack',
    description: 'A multi-chain wallet that supports Solana and xNFTs, bringing a new app-store-like experience to web3.',
    url: '#',
    tags: ['Multi-chain', 'xNFTs'],
  },
  {
    id: 'exodus',
    category: 'wallets',
    name: 'Exodus',
    description: 'A multi-asset wallet with Solana support, built-in exchange functionality, and a simple user interface.',
    url: '#',
    tags: ['Multi-chain', 'Desktop', 'Mobile'],
  },

  // Trading Platforms
  {
    id: 'mango',
    category: 'trading',
    name: 'Mango Markets',
    description: 'A decentralized, cross-margin trading platform offering spot markets, perpetual futures, and lending.',
    url: '#',
    tags: ['Derivatives', 'Margin Trading'],
  },
  {
    id: 'drift',
    category: 'trading',
    name: 'Drift Protocol',
    description: 'A decentralized exchange that enables permissionless leverage trading of crypto assets.',
    url: '#',
    tags: ['Perpetuals', 'Derivatives'],
  },
  {
    id: 'zeta',
    category: 'trading',
    name: 'Zeta Markets',
    description: 'A DeFi derivatives exchange built on Solana focusing on options and futures trading.',
    url: '#',
    tags: ['Options', 'Futures'],
  },

  // Jobs
  {
    id: 'solana-jobs',
    category: 'jobs',
    name: 'Solana Jobs',
    description: 'Official job board for roles in the Solana ecosystem, from developers to marketing and design.',
    url: '#',
    tags: ['Official', 'Full-time'],
  },
  {
    id: 'crypto-jobs-list',
    category: 'jobs',
    name: 'Crypto Jobs List',
    description: 'Job board featuring Solana developer positions, including remote and contract opportunities.',
    url: '#',
    tags: ['Remote', 'Contract'],
  },
  {
    id: 'web3-careers',
    category: 'jobs',
    name: 'Web3 Careers',
    description: 'Find Solana development, product, and marketing roles across Web3 and DeFi projects.',
    url: '#',
    tags: ['DeFi', 'Web3'],
  },

  // Education
  {
    id: 'solana-cookbook',
    category: 'education',
    name: 'Solana Cookbook',
    description: 'A developer resource that provides the essential concepts and references for building applications on Solana.',
    url: '#',
    tags: ['Development', 'Reference'],
  },
  {
    id: 'soldev',
    category: 'education',
    name: 'Solana Development Course',
    description: 'Comprehensive course covering Solana fundamentals, Rust programming, and on-chain program development.',
    url: '#',
    tags: ['Beginners', 'Course'],
  },
  {
    id: 'solana-bootcamp',
    category: 'education',
    name: 'Solana Bootcamp',
    description: 'Intensive training program for developers looking to build on Solana, including practical project work.',
    url: '#',
    tags: ['Interactive', 'Advanced'],
  },

  // Liquidity Pools
  {
    id: 'saber',
    category: 'liquidity',
    name: 'Saber',
    description: 'Cross-chain stablecoin and wrapped assets exchange on Solana focusing on capital efficiency.',
    url: '#',
    tags: ['Stablecoins', 'Low Slippage'],
  },
  {
    id: 'mercurial',
    category: 'liquidity',
    name: 'Mercurial Finance',
    description: 'Dynamic vaults for stable assets on Solana with higher capital efficiency and better swap rates.',
    url: '#',
    tags: ['Stable Pools', 'Capital Efficient'],
  },
  {
    id: 'atrix',
    category: 'liquidity',
    name: 'Atrix',
    description: 'Decentralized liquidity provision protocol allowing users to earn fees by providing tokens to pools.',
    url: '#',
    tags: ['Farming', 'Yield'],
  },

  // NFTs
  {
    id: 'magic-eden',
    category: 'nfts',
    name: 'Magic Eden',
    description: 'The leading NFT marketplace on Solana with the largest collection of NFTs for browsing, buying and selling.',
    url: '#',
    tags: ['Marketplace', 'Popular'],
  },
  {
    id: 'metaplex',
    category: 'nfts',
    name: 'Metaplex',
    description: 'The protocol that powers NFTs on Solana, providing tools for creators to launch their collections.',
    url: '#',
    tags: ['Protocol', 'Tools'],
  },

  // Social
  {
    id: 'dialect',
    category: 'social',
    name: 'Dialect',
    description: 'Web3 messaging protocol built on Solana that enables wallet-to-wallet communication.',
    url: '#',
    tags: ['Messaging', 'Protocol'],
  },
  {
    id: 'solcial',
    category: 'social',
    name: 'Solcial',
    description: 'Decentralized and censorship-resistant social media platform built on Solana.',
    url: '#',
    tags: ['Social Media', 'Decentralized'],
  },

  // Developer Tools
  {
    id: 'anchor',
    category: 'tools',
    name: 'Anchor',
    description: 'Development framework for Solana that makes it easy to build secure on-chain programs.',
    url: '#',
    tags: ['Framework', 'Rust'],
  },
  {
    id: 'solana-playground',
    category: 'tools',
    name: 'Solana Playground',
    description: 'Web-based IDE for building, deploying, and testing Solana programs without local setup.',
    url: '#',
    tags: ['IDE', 'WebApp'],
  },

  // Gaming
  {
    id: 'star-atlas',
    category: 'gaming',
    name: 'Star Atlas',
    description: 'A grand strategy game of space exploration, territorial conquest, and political domination.',
    url: '#',
    tags: ['MMO', 'Strategy'],
  },
  {
    id: 'aurory',
    category: 'gaming',
    name: 'Aurory',
    description: 'A play-to-earn gaming metaverse powered by Solana with NFT gameplay elements.',
    url: '#',
    tags: ['Play-to-Earn', 'RPG'],
  },
];