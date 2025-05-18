import { ExternalLink } from 'lucide-react';

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
  


export default function ResourceCard({ resource, darkMode }) {
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