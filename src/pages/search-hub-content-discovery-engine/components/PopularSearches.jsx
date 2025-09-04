import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PopularSearches = ({ onSearchClick }) => {
  const popularSearches = [
    {
      query: "уикенд пътувания",
      count: 1247,
      trend: "up",
      category: "travel"
    },
    {
      query: "българска култура",
      count: 892,
      trend: "up",
      category: "culture"
    },
    {
      query: "интервюта с артисти",
      count: 634,
      trend: "stable",
      category: "interviews"
    },
    {
      query: "софия забележителности",
      count: 578,
      trend: "up",
      category: "travel"
    },
    {
      query: "традиционна кухня",
      count: 445,
      trend: "down",
      category: "culture"
    },
    {
      query: "планински маршрути",
      count: 389,
      trend: "up",
      category: "travel"
    },
    {
      query: "съвременно изкуство",
      count: 312,
      trend: "stable",
      category: "culture"
    },
    {
      query: "фестивали българия",
      count: 267,
      trend: "up",
      category: "culture"
    }
  ];

  const trendingTopics = [
    {
      topic: "Есенни дестинации",
      articles: 23,
      icon: "Leaf"
    },
    {
      topic: "Културни събития",
      articles: 18,
      icon: "Calendar"
    },
    {
      topic: "Местни традиции",
      articles: 15,
      icon: "Heart"
    },
    {
      topic: "Гастрономия",
      articles: 12,
      icon: "ChefHat"
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-400';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'travel': return 'MapPin';
      case 'culture': return 'Palette';
      case 'interviews': return 'MessageCircle';
      default: return 'Hash';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Popular Searches */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-playfair font-bold text-gray-900">
                Популярни търсения
              </h2>
              <Icon name="TrendingUp" size={20} className="text-gray-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularSearches?.map((search, index) => (
                <button
                  key={index}
                  onClick={() => onSearchClick(search?.query)}
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left group"
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <Icon 
                      name={getCategoryIcon(search?.category)} 
                      size={16} 
                      className="text-gray-500 flex-shrink-0" 
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-inter font-medium text-gray-900 truncate group-hover:text-black">
                        {search?.query}
                      </p>
                      <p className="text-xs text-gray-500">
                        {search?.count?.toLocaleString('bg-BG')} търсения
                      </p>
                    </div>
                  </div>
                  <Icon 
                    name={getTrendIcon(search?.trend)} 
                    size={16} 
                    className={`flex-shrink-0 ml-2 ${getTrendColor(search?.trend)}`} 
                  />
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Бързи връзки:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'нови статии', 'интервюта', 'пътеводители', 'фото есета', 
                  'културни събития', 'местни традиции', 'гастрономия'
                ]?.map((tag, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => onSearchClick(tag)}
                    className="text-xs"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trending Topics */}
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-playfair font-bold text-gray-900">
                Актуални теми
              </h2>
              <Icon name="Flame" size={20} className="text-orange-500" />
            </div>

            <div className="space-y-4">
              {trendingTopics?.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => onSearchClick(topic?.topic)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200">
                      <Icon 
                        name={topic?.icon} 
                        size={14} 
                        className="text-gray-600" 
                      />
                    </div>
                    <div>
                      <p className="font-inter font-medium text-gray-900 group-hover:text-black">
                        {topic?.topic}
                      </p>
                      <p className="text-xs text-gray-500">
                        {topic?.articles} статии
                      </p>
                    </div>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={16} 
                    className="text-gray-400 group-hover:text-gray-600" 
                  />
                </button>
              ))}
            </div>

            {/* Search Tips */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-inter font-medium text-gray-900 mb-3">
                Съвети за търсене
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <Icon name="Lightbulb" size={14} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p>Използвайте кавички за точно съвпадение: "българска култура"</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Plus" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Добавете + пред думи, които трябва да присъстват</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Minus" size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p>Добавете - пред думи, които да бъдат изключени</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSearches;