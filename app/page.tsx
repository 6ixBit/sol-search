'use client'

import React, { useState } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import { resources, categories } from './constants';
import ResourceCard from '@/app/components/ResourceCard';
import CategoryButton from '@/app/components/CategoryButton';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Resource } from './constants';
import CategoryAdSpace from '@/app/components/CategoryAdSpace';
export default function SolSearch() {
  const darkMode = false;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const isMenuOpen = false;

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = 
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'all' || 
      resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const groupedResources: Record<string, Resource[]> = {};
  resources.forEach((resource) => {
    if (!groupedResources[resource.category]) {
      groupedResources[resource.category] = [];
    }
    groupedResources[resource.category].push(resource);
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-200`}>
      <Header />

      <main className="px-4 md:px-8 py-6">
        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Sol Search</h1>
          <p className="text-lg mb-8 text-gray-600">
            Your one stop shop for everything Solana.
          </p>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for DEXs, wallets, tools, and more..."
              className={`w-full px-4 py-3 pl-12 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

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
                  icon={<></>}
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
                  icon={<></>}
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
            {/* Results */}
            {activeCategory === 'all' ? (
              // Show all categories when "All" is selected
              Object.keys(groupedResources).map((category: string) => {
                const categoryInfo = categories.find(c => c.id === category);
                return (
                  <div key={category} className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-xl font-bold">{categoryInfo?.name || category}</h2>
                      <div className={`h-px flex-grow ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {groupedResources[category]
                        .filter((resource: Resource) => 
                          resource.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .slice(0, 3)
                        .map((resource: Resource) => (
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
                <div className="mb-6">
                  <CategoryAdSpace />
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

      <Footer />
    </div>
  );
}
