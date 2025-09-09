import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';


const SearchFilters = ({ 
  filters, 
  setFilters, 
  isFiltersVisible, 
  setIsFiltersVisible,
  onClearFilters 
}) => {
  const contentTypeOptions = [
    { value: 'all', label: 'Всички типове' },
    { value: 'articles', label: 'Статии' },
    { value: 'interviews', label: 'Интервюта' },
    { value: 'photo-essays', label: 'Фото есета' },
    { value: 'travel-guides', label: 'Пътеводители' }
  ];

  const dateRangeOptions = [
    { value: 'all', label: 'Всички периоди' },
    { value: 'last-week', label: 'Последната седмица' },
    { value: 'last-month', label: 'Последният месец' },
    { value: 'last-3-months', label: 'Последните 3 месеца' },
    { value: 'last-year', label: 'Последната година' }
  ];

  const readingTimeOptions = [
    { value: 'all', label: 'Всяко време за четене' },
    { value: '0-5', label: 'До 5 минути' },
    { value: '5-10', label: '5-10 минути' },
    { value: '10-20', label: '10-20 минути' },
    { value: '20+', label: 'Над 20 минути' }
  ];

  const regionOptions = [
    { value: 'all', label: 'Всички региони' },
    { value: 'sofia', label: 'София' },
    { value: 'plovdiv', label: 'Пловдив' },
    { value: 'varna', label: 'Варна' },
    { value: 'burgas', label: 'Бургас' },
    { value: 'ruse', label: 'Русе' },
    { value: 'stara-zagora', label: 'Стара Загора' },
    { value: 'pleven', label: 'Плевен' },
    { value: 'dobrich', label: 'Добрич' },
    { value: 'sliven', label: 'Сливен' },
    { value: 'shumen', label: 'Шумен' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'По релевантност' },
    { value: 'date-desc', label: 'Най-нови първо' },
    { value: 'date-asc', label: 'Най-стари първо' },
    { value: 'popularity', label: 'По популярност' },
    { value: 'reading-time', label: 'По време за четене' }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const hasActiveFilters = () => {
    return Object.entries(filters)?.some(([key, value]) => 
      key !== 'sort' && value !== 'all' && value !== ''
    );
  };

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Filter Toggle Button */}
        <div className="flex items-center justify-between py-4">
          <Button
            variant="outline"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            iconName={isFiltersVisible ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            className="font-inter"
          >
            Филтри {hasActiveFilters() && `(${Object.values(filters)?.filter(v => v !== 'all' && v !== '' && v !== 'relevance')?.length})`}
          </Button>

          {hasActiveFilters() && (
            <Button
              variant="ghost"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              className="text-gray-600 hover:text-gray-800"
            >
              Изчисти филтрите
            </Button>
          )}
        </div>

        {/* Filters Panel */}
        {isFiltersVisible && (
          <div className="pb-6 border-t border-gray-100 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <Select
                label="Тип съдържание"
                options={contentTypeOptions}
                value={filters?.contentType}
                onChange={(value) => handleFilterChange('contentType', value)}
                className="w-full"
              />

              <Select
                label="Период"
                options={dateRangeOptions}
                value={filters?.dateRange}
                onChange={(value) => handleFilterChange('dateRange', value)}
                className="w-full"
              />

              <Select
                label="Време за четене"
                options={readingTimeOptions}
                value={filters?.readingTime}
                onChange={(value) => handleFilterChange('readingTime', value)}
                className="w-full"
              />

              <Select
                label="Регион"
                options={regionOptions}
                value={filters?.region}
                onChange={(value) => handleFilterChange('region', value)}
                className="w-full"
              />

              <Select
                label="Сортиране"
                options={sortOptions}
                value={filters?.sort}
                onChange={(value) => handleFilterChange('sort', value)}
                className="w-full"
              />
            </div>

            {/* Quick Filter Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Бързи филтри:</span>
              {[
                { label: 'Уикенд пътувания', type: 'contentType', value: 'travel-guides' },
                { label: 'Нови интервюта', type: 'contentType', value: 'interviews' },
                { label: 'Кратко четене', type: 'readingTime', value: '0-5' },
                { label: 'София', type: 'region', value: 'sofia' },
                { label: 'Тази седмица', type: 'dateRange', value: 'last-week' }
              ]?.map((tag, index) => (
                <Button
                  key={index}
                  variant={filters?.[tag?.type] === tag?.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(tag?.type, 
                    filters?.[tag?.type] === tag?.value ? 'all' : tag?.value
                  )}
                  className="text-xs"
                >
                  {tag?.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;