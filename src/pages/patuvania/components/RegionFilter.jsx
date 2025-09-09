import React from 'react';
import Button from '../../../components/ui/Button';

const RegionFilter = ({ activeRegion, onRegionChange }) => {
  const regions = [
    { id: 'all', name: 'Всички региони' },
    { id: 'north', name: 'Северна България' },
    { id: 'south', name: 'Южна България' },
    { id: 'west', name: 'Западна България' },
    { id: 'east', name: 'Източна България' }
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {regions?.map((region) => (
        <Button
          key={region?.id}
          variant={activeRegion === region?.id ? "default" : "outline"}
          size="sm"
          onClick={() => onRegionChange(region?.id)}
          className="font-inter"
        >
          {region?.name}
        </Button>
      ))}
    </div>
  );
};

export default RegionFilter;