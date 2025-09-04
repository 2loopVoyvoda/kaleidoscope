import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SearchResults = ({ results, isLoading, searchQuery, totalResults }) => {
  const getContentTypeIcon = (type) => {
    switch (type) {
      case 'articles': return 'FileText';
      case 'interviews': return 'MessageCircle';
      case 'photo-essays': return 'Camera';
      case 'travel-guides': return 'MapPin';
      default: return 'FileText';
    }
  };

  const getContentTypeLabel = (type) => {
    switch (type) {
      case 'articles': return 'Статия';
      case 'interviews': return 'Интервю';
      case 'photo-essays': return 'Фото есе';
      case 'travel-guides': return 'Пътеводител';
      default: return 'Съдържание';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('bg-BG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text?.split(regex);
    
    return parts?.map((part, index) => 
      regex?.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {[...Array(6)]?.map((_, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
              <div className="flex space-x-4">
                <div className="w-32 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="flex space-x-4">
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!results?.length && searchQuery) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center">
          <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
            Няма намерени резултати
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Не намерихме съдържание, което да съответства на вашето търсене "{searchQuery}". 
            Опитайте с различни ключови думи или използвайте филтрите.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-medium">Предложения:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['българска култура', 'уикенд пътувания', 'интервюта', 'софия', 'пловдив']?.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      {/* Results Header */}
      {searchQuery && (
        <div className="mb-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
            Резултати за "{searchQuery}"
          </h2>
          <p className="text-gray-600">
            Намерени са {totalResults?.toLocaleString('bg-BG')} резултата
          </p>
        </div>
      )}
      {/* Results List */}
      <div className="space-y-6">
        {results?.map((result) => (
          <article 
            key={result?.id} 
            className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex space-x-6">
                {/* Article Image */}
                <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={result?.image}
                    alt={result?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 min-w-0">
                  {/* Content Type & Metadata */}
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon 
                        name={getContentTypeIcon(result?.type)} 
                        size={14} 
                        className="text-gray-500" 
                      />
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {getContentTypeLabel(result?.type)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {formatDate(result?.publishedAt)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {result?.readingTime} мин четене
                      </span>
                    </div>

                    {result?.region && (
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} className="text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {result?.region}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-black transition-colors duration-200">
                    {highlightSearchTerm(result?.title, searchQuery)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {highlightSearchTerm(result?.excerpt, searchQuery)}
                  </p>

                  {/* Author & Tags */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          src={result?.author?.avatar}
                          alt={result?.author?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        {result?.author?.name}
                      </span>
                    </div>

                    {result?.tags && result?.tags?.length > 0 && (
                      <div className="flex items-center space-x-1">
                        {result?.tags?.slice(0, 3)?.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {result?.tags?.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{result?.tags?.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Load More Button */}
      {results?.length > 0 && results?.length < totalResults && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ChevronDown"
            iconPosition="right"
            className="font-inter"
          >
            Зареди още резултати
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;