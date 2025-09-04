import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchHistory = ({ 
  searchHistory, 
  onSearchClick, 
  onClearHistory, 
  onRemoveHistoryItem,
  isVisible 
}) => {
  if (!isVisible || !searchHistory?.length) {
    return null;
  }

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const searchTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - searchTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Сега';
    if (diffInMinutes < 60) return `Преди ${diffInMinutes} мин`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `Преди ${diffInHours} ч`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `Преди ${diffInDays} дни`;
    
    return searchTime?.toLocaleDateString('bg-BG', {
      day: 'numeric',
      month: 'short'
    });
  };

  const groupHistoryByDate = (history) => {
    const groups = {
      today: [],
      yesterday: [],
      thisWeek: [],
      older: []
    };

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    history?.forEach(item => {
      const itemDate = new Date(item.timestamp);
      const itemDateOnly = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate());

      if (itemDateOnly?.getTime() === today?.getTime()) {
        groups?.today?.push(item);
      } else if (itemDateOnly?.getTime() === yesterday?.getTime()) {
        groups?.yesterday?.push(item);
      } else if (itemDate >= weekAgo) {
        groups?.thisWeek?.push(item);
      } else {
        groups?.older?.push(item);
      }
    });

    return groups;
  };

  const groupedHistory = groupHistoryByDate(searchHistory);

  const renderHistoryGroup = (items, title) => {
    if (!items?.length) return null;

    return (
      <div key={title} className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
          {title}
        </h4>
        <div className="space-y-2">
          {items?.map((item) => (
            <div
              key={item?.id}
              className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
            >
              <button
                onClick={() => onSearchClick(item?.query)}
                className="flex items-center space-x-3 flex-1 min-w-0 text-left"
              >
                <Icon 
                  name="Clock" 
                  size={14} 
                  className="text-gray-400 flex-shrink-0" 
                />
                <div className="min-w-0 flex-1">
                  <p className="font-inter text-sm text-gray-900 truncate group-hover:text-black">
                    {item?.query}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatTimeAgo(item?.timestamp)}
                    {item?.resultsCount && (
                      <span className="ml-2">
                        • {item?.resultsCount} резултата
                      </span>
                    )}
                  </p>
                </div>
              </button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemoveHistoryItem(item?.id)}
                className="h-6 w-6 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <Icon name="X" size={12} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Icon name="History" size={20} className="text-gray-600" />
            <h2 className="text-lg font-playfair font-bold text-gray-900">
              История на търсенията
            </h2>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearHistory}
            iconName="Trash2"
            iconPosition="left"
            className="text-gray-500 hover:text-red-600"
          >
            Изчисти всички
          </Button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {renderHistoryGroup(groupedHistory?.today, 'Днес')}
          {renderHistoryGroup(groupedHistory?.yesterday, 'Вчера')}
          {renderHistoryGroup(groupedHistory?.thisWeek, 'Тази седмица')}
          {renderHistoryGroup(groupedHistory?.older, 'По-рано')}
        </div>

        {searchHistory?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Search" size={32} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 text-sm">
              Все още няма история на търсенията
            </p>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-start space-x-2 text-xs text-gray-500">
            <Icon name="Info" size={14} className="mt-0.5 flex-shrink-0" />
            <p>
              Историята на търсенията се запазва локално в браузъра ви и може да бъде изчистена по всяко време. 
              Тя помага за по-бързо намиране на предишни търсения и подобряване на препоръките.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;