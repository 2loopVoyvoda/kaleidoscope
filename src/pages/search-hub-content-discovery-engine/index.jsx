import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/ui/Header';
import SearchBar from './components/SearchBar';
import SearchFilters from './components/SearchFilters';
import SearchResults from './components/SearchResults';
import PopularSearches from './components/PopularSearches';
import SearchHistory from './components/SearchHistory';
import Icon from '../../components/AppIcon';

const SearchHubContentDiscoveryEngine = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const [filters, setFilters] = useState({
    contentType: 'all',
    dateRange: 'all',
    readingTime: 'all',
    region: 'all',
    sort: 'relevance'
  });

  // Mock data for search suggestions
  const searchSuggestions = [
    "българска култура",
    "уикенд пътувания",
    "интервюта с артисти",
    "софия забележителности",
    "традиционна кухня",
    "планински маршрути",
    "съвременно изкуство",
    "фестивали българия",
    "местни традиции",
    "културни събития",
    "гастрономия",
    "есенни дестинации"
  ];

  // Mock search results data
  const mockSearchResults = [
    {
      id: 1,
      title: "Скритите съкровища на Стария Пловдив: Пътеводител за любознателните",
      excerpt: "Открийте най-интересните места в архитектурно-историческия резерват Стария Пловдив, които туристите рядко посещават. От древни римски театри до съвременни галерии.",
      type: "travel-guides",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      author: {
        name: "Мария Петрова",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      publishedAt: "2025-08-28T10:30:00Z",
      readingTime: 8,
      region: "Пловдив",
      tags: ["пътувания", "култура", "история", "архитектура"],
      relevanceScore: 95
    },
    {
      id: 2,
      title: "Интервю с Димитър Христов: Съвременното българско изкуство и неговите корени",
      excerpt: "Разговор с един от най-влиятелните съвременни български художници за традициите, иновациите и бъдещето на българското изкуство в глобален контекст.",
      type: "interviews",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      author: {
        name: "Анна Георгиева",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      publishedAt: "2025-08-25T14:15:00Z",
      readingTime: 12,
      region: "София",
      tags: ["интервю", "изкуство", "култура", "творчество"],
      relevanceScore: 92
    },
    {
      id: 3,
      title: "Фото есе: Есенните багри на Витоша - природата като вдъхновение",
      excerpt: "Визуално пътешествие през есенните пейзажи на планината Витоша, заснети в най-красивите моменти на сезона. Природата като източник на творческо вдъхновение.",
      type: "photo-essays",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      author: {
        name: "Петър Николов",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      publishedAt: "2025-08-22T09:45:00Z",
      readingTime: 5,
      region: "София",
      tags: ["фотография", "природа", "есен", "витоша"],
      relevanceScore: 88
    },
    {
      id: 4,
      title: "Традиционната българска кухня в съвременния свят: Между автентичността и иновацията",
      excerpt: "Как съвременните готвачи преосмислят класическите български рецепти, запазвайки духа на традицията, но адаптирайки ги към днешните вкусове и начин на живот.",
      type: "articles",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      author: {
        name: "Елена Стоянова",
        avatar: "https://randomuser.me/api/portraits/women/38.jpg"
      },
      publishedAt: "2025-08-20T16:20:00Z",
      readingTime: 10,
      region: "България",
      tags: ["кухня", "традиции", "гастрономия", "култура"],
      relevanceScore: 85
    },
    {
      id: 5,
      title: "Културните фестивали на България: Календар за есента 2025",
      excerpt: "Пълен преглед на най-интересните културни събития, фестивали и изложби, които ще се проведат в България през есенните месеци. Не пропускайте нито едно!",
      type: "articles",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      author: {
        name: "Георги Иванов",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      publishedAt: "2025-08-18T11:10:00Z",
      readingTime: 7,
      region: "България",
      tags: ["фестивали", "култура", "събития", "есен"],
      relevanceScore: 82
    },
    {
      id: 6,
      title: "Интервю с Мария Спирова: Възраждането на традиционните занаяти в България",
      excerpt: "Разговор с майстор грънчар за възраждането на традиционните български занаяти, предизвикателствата пред занаятчиите днес и важността на запазването на културното наследство.",
      type: "interviews",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      author: {
        name: "Стефан Димитров",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg"
      },
      publishedAt: "2025-08-15T13:30:00Z",
      readingTime: 9,
      region: "Троян",
      tags: ["интервю", "занаяти", "традиции", "изкуство"],
      relevanceScore: 79
    }
  ];

  // Load search history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('kaleidoscope-search-history');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error loading search history:', error);
      }
    }
  }, []);

  // Save search history to localStorage
  const saveSearchHistory = useCallback((history) => {
    try {
      localStorage.setItem('kaleidoscope-search-history', JSON.stringify(history));
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  }, []);

  // Add search to history
  const addToSearchHistory = useCallback((query, resultsCount = 0) => {
    if (!query?.trim()) return;

    const newHistoryItem = {
      id: Date.now(),
      query: query?.trim(),
      timestamp: new Date()?.toISOString(),
      resultsCount
    };

    setSearchHistory(prev => {
      // Remove duplicate if exists
      const filtered = prev?.filter(item => item?.query?.toLowerCase() !== query?.toLowerCase());
      // Add new item at the beginning and limit to 50 items
      const updated = [newHistoryItem, ...filtered]?.slice(0, 50);
      saveSearchHistory(updated);
      return updated;
    });
  }, [saveSearchHistory]);

  // Perform search
  const performSearch = useCallback((query) => {
    if (!query?.trim()) {
      setSearchResults([]);
      setTotalResults(0);
      return;
    }

    setIsLoading(true);
    setShowHistory(false);

    // Simulate API call delay
    setTimeout(() => {
      // Filter results based on search query and filters
      let filteredResults = mockSearchResults?.filter(result => {
        const queryLower = query?.toLowerCase();
        const titleMatch = result?.title?.toLowerCase()?.includes(queryLower);
        const excerptMatch = result?.excerpt?.toLowerCase()?.includes(queryLower);
        const tagsMatch = result?.tags?.some(tag => tag?.toLowerCase()?.includes(queryLower));
        const regionMatch = result?.region?.toLowerCase()?.includes(queryLower);
        
        return titleMatch || excerptMatch || tagsMatch || regionMatch;
      });

      // Apply filters
      if (filters?.contentType !== 'all') {
        filteredResults = filteredResults?.filter(result => result?.type === filters?.contentType);
      }

      if (filters?.region !== 'all') {
        filteredResults = filteredResults?.filter(result => 
          result?.region?.toLowerCase() === filters?.region?.toLowerCase()
        );
      }

      if (filters?.readingTime !== 'all') {
        const [min, max] = filters?.readingTime?.split('-')?.map(Number);
        if (max) {
          filteredResults = filteredResults?.filter(result => 
            result?.readingTime >= min && result?.readingTime <= max
          );
        } else if (filters?.readingTime === '20+') {
          filteredResults = filteredResults?.filter(result => result?.readingTime >= 20);
        }
      }

      // Sort results
      switch (filters?.sort) {
        case 'date-desc':
          filteredResults?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
          break;
        case 'date-asc':
          filteredResults?.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
          break;
        case 'reading-time':
          filteredResults?.sort((a, b) => a?.readingTime - b?.readingTime);
          break;
        case 'popularity':
          filteredResults?.sort((a, b) => b?.relevanceScore - a?.relevanceScore);
          break;
        default: // relevance
          filteredResults?.sort((a, b) => b?.relevanceScore - a?.relevanceScore);
      }

      setSearchResults(filteredResults);
      setTotalResults(filteredResults?.length);
      setIsLoading(false);

      // Add to search history
      addToSearchHistory(query, filteredResults?.length);
    }, 800);
  }, [filters, addToSearchHistory]);

  // Handle search
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    performSearch(query);
  }, [performSearch]);

  // Handle popular search click
  const handlePopularSearchClick = useCallback((query) => {
    setSearchQuery(query);
    performSearch(query);
    setShowSuggestions(false);
  }, [performSearch]);

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setFilters({
      contentType: 'all',
      dateRange: 'all',
      readingTime: 'all',
      region: 'all',
      sort: 'relevance'
    });
  }, []);

  // Clear search history
  const handleClearHistory = useCallback(() => {
    setSearchHistory([]);
    saveSearchHistory([]);
  }, [saveSearchHistory]);

  // Remove single history item
  const handleRemoveHistoryItem = useCallback((itemId) => {
    setSearchHistory(prev => {
      const updated = prev?.filter(item => item?.id !== itemId);
      saveSearchHistory(updated);
      return updated;
    });
  }, [saveSearchHistory]);

  // Get filtered suggestions
  const getFilteredSuggestions = useCallback(() => {
    if (!searchQuery?.trim()) return [];
    
    return searchSuggestions?.filter(suggestion => 
        suggestion?.toLowerCase()?.includes(searchQuery?.toLowerCase()) &&
        suggestion?.toLowerCase() !== searchQuery?.toLowerCase()
      )?.slice(0, 8);
  }, [searchQuery]);

  // Re-run search when filters change
  useEffect(() => {
    if (searchQuery?.trim()) {
      performSearch(searchQuery);
    }
  }, [filters, searchQuery, performSearch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Търсене в Калейдоскоп
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Открийте богатството на нашето съдържание чрез интелигентно търсене 
                с поддръжка на български език и усъвършенствани филтри
              </p>
            </div>

            {/* Search Bar */}
            <SearchBar
              onSearch={handleSearch}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              suggestions={getFilteredSuggestions()}
              showSuggestions={showSuggestions}
              setShowSuggestions={setShowSuggestions}
            />

            {/* Quick Actions */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <Icon name="History" size={16} />
                <span>История</span>
              </button>
              
              <div className="w-px h-4 bg-gray-300"></div>
              
              <button
                onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <Icon name="Filter" size={16} />
                <span>Филтри</span>
              </button>
              
              <div className="w-px h-4 bg-gray-300"></div>
              
              <button
                onClick={() => handleSearch('')}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <Icon name="RotateCcw" size={16} />
                <span>Изчисти</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Filters */}
        <SearchFilters
          filters={filters}
          setFilters={setFilters}
          isFiltersVisible={isFiltersVisible}
          setIsFiltersVisible={setIsFiltersVisible}
          onClearFilters={handleClearFilters}
        />

        {/* Search History */}
        {showHistory && (
          <SearchHistory
            searchHistory={searchHistory}
            onSearchClick={handlePopularSearchClick}
            onClearHistory={handleClearHistory}
            onRemoveHistoryItem={handleRemoveHistoryItem}
            isVisible={showHistory}
          />
        )}

        {/* Search Results or Popular Searches */}
        {searchQuery?.trim() ? (
          <SearchResults
            results={searchResults}
            isLoading={isLoading}
            searchQuery={searchQuery}
            totalResults={totalResults}
          />
        ) : (
          !showHistory && (
            <PopularSearches
              onSearchClick={handlePopularSearchClick}
            />
          )
        )}
      </main>
    </div>
  );
};

export default SearchHubContentDiscoveryEngine;