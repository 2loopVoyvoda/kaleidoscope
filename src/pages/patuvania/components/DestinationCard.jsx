import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const DestinationCard = ({ destination }) => {
  const getSeasonIcon = (season) => {
    switch (season) {
      case 'пролет': return 'Flower';
      case 'лято': return 'Sun';
      case 'есен': return 'Leaf';
      case 'зима': return 'Snowflake';
      default: return 'Calendar';
    }
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={destination?.image}
          alt={destination?.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-xs font-inter font-medium text-foreground">
            {destination?.duration}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-playfair text-lg font-bold text-foreground leading-tight">
            {destination?.name}
          </h3>
          <div className="flex items-center text-muted-foreground ml-2">
            <Icon name="MapPin" size={14} />
            <span className="text-xs font-inter ml-1">{destination?.region}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground font-inter mb-3 line-clamp-2">
          {destination?.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Icon name="Clock" size={14} />
            <span className="font-inter ml-1">{destination?.travelTime} от София</span>
          </div>
          
          <div className="flex items-center">
            <Icon name={getSeasonIcon(destination?.bestSeason)} size={14} />
            <span className="font-inter ml-1 capitalize">{destination?.bestSeason}</span>
          </div>
        </div>
        
        <Link
          to={`/travel-destination/${destination?.slug}`}
          className="inline-flex items-center mt-3 text-sm font-inter font-medium text-foreground hover:text-accent transition-colors"
        >
          Прочети повече
          <Icon name="ArrowRight" size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;