import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ destinations, onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (destination) => {
    setSelectedLocation(destination);
    onLocationSelect && onLocationSelect(destination);
  };

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-playfair text-xl font-bold text-foreground">
          Интерактивна карта
        </h3>
        <Button variant="outline" size="sm">
          <Icon name="Maximize2" size={16} className="mr-2" />
          Разшири
        </Button>
      </div>
      <div className="relative bg-muted rounded-lg h-96 overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="България - Туристически дестинации"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=42.7339,25.4858&z=7&output=embed"
          className="rounded-lg"
        />
        
        {/* Map Overlay with Location Pins */}
        <div className="absolute inset-0 pointer-events-none">
          {destinations?.slice(0, 6)?.map((destination, index) => (
            <button
              key={destination?.id}
              onClick={() => handleLocationClick(destination)}
              className={`absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 ${
                selectedLocation?.id === destination?.id 
                  ? 'bg-foreground text-background' 
                  : 'bg-background text-foreground hover:bg-accent hover:text-background'
              } rounded-full p-2 shadow-lg transition-colors duration-200`}
              style={{
                left: `${20 + (index * 12)}%`,
                top: `${30 + (index * 8)}%`
              }}
            >
              <Icon name="MapPin" size={16} />
            </button>
          ))}
        </div>
      </div>
      {selectedLocation && (
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-inter font-semibold text-foreground mb-1">
            {selectedLocation?.name}
          </h4>
          <p className="text-sm text-muted-foreground font-inter mb-2">
            {selectedLocation?.description}
          </p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Icon name="Clock" size={14} />
            <span className="font-inter ml-1">{selectedLocation?.travelTime} от София</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;