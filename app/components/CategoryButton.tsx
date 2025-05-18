// Category button component
export default function CategoryButton({ active, darkMode, onClick, children, icon }) {
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
  