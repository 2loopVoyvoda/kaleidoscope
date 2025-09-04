import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, searchQuery, setSearchQuery, suggestions, showSuggestions, setShowSuggestions }) => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      onSearch(searchQuery);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setSearchQuery(value);
    setShowSuggestions(value?.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'bg-BG';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsVoiceActive(true);
      };

      recognition.onresult = (event) => {
        const transcript = event?.results?.[0]?.[0]?.transcript;
        setSearchQuery(transcript);
        onSearch(transcript);
        setIsVoiceActive(false);
      };

      recognition.onerror = () => {
        setIsVoiceActive(false);
      };

      recognition.onend = () => {
        setIsVoiceActive(false);
      };

      recognition?.start();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
    inputRef?.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef?.current && !suggestionsRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowSuggestions]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus-within:border-black transition-colors duration-200">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 text-gray-400" 
          />
          
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Търсете статии, интервюта, дестинации..."
            className="w-full pl-12 pr-20 py-4 text-base font-inter bg-transparent border-none outline-none placeholder-gray-500"
            autoComplete="off"
          />
          
          <div className="absolute right-2 flex items-center space-x-1">
            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="h-8 w-8 text-gray-400 hover:text-gray-600"
              >
                <Icon name="X" size={16} />
              </Button>
            )}
            
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleVoiceSearch}
              className={`h-8 w-8 ${isVoiceActive ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Icon name={isVoiceActive ? "MicOff" : "Mic"} size={16} />
            </Button>
            
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="ml-2"
              disabled={!searchQuery?.trim()}
            >
              <Icon name="Search" size={16} />
            </Button>
          </div>
        </div>
      </form>
      {/* Search Suggestions */}
      {showSuggestions && suggestions?.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {suggestions?.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center space-x-3 transition-colors duration-150"
            >
              <Icon name="Search" size={16} className="text-gray-400 flex-shrink-0" />
              <span className="font-inter text-sm text-gray-700">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;