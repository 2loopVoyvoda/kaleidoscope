import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CulturalCalendar = () => {
  const events = [
    {
      id: 1,
      title: "Изложба \'Съвременни визии'",
      venue: "Национална художествена галерия",
      date: "15 септември",
      time: "18:00",
      type: "Изложба",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Премиера: \'Хамлет\' от Шекспир",
      venue: "Народен театър \'Иван Вазов'",
      date: "18 септември",
      time: "19:30",
      type: "Театър",
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Концерт на БНР Симфоничен оркестър",
      venue: "Зала \'България'",
      date: "22 септември",
      time: "19:00",
      type: "Музика",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Фестивал на документалното кино",
      venue: "Кино \'Одеон'",
      date: "25 септември",
      time: "20:00",
      type: "Кино",
      image: "https://images.unsplash.com/photo-1489599735734-79b4d2b0a3a4?w=400&h=300&fit=crop"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Изложба': return 'Palette';
      case 'Театър': return 'Drama';
      case 'Музика': return 'Music';
      case 'Кино': return 'Film';
      default: return 'Calendar';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Изложба': return 'bg-blue-100 text-blue-800';
      case 'Театър': return 'bg-purple-100 text-purple-800';
      case 'Музика': return 'bg-green-100 text-green-800';
      case 'Кино': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Calendar" size={24} className="text-accent" />
        <h2 className="font-playfair text-xl font-bold text-foreground">
          Културен календар
        </h2>
      </div>
      <div className="space-y-4">
        {events?.map((event) => (
          <div key={event?.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
              <Image
                src={event?.image}
                alt={event?.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getTypeColor(event?.type)}`}>
                  <Icon name={getTypeIcon(event?.type)} size={12} />
                  {event?.type}
                </span>
              </div>
              
              <h3 className="font-medium text-sm text-foreground leading-tight mb-1">
                {event?.title}
              </h3>
              
              <p className="text-xs text-muted-foreground mb-2">
                {event?.venue}
              </p>
              
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={12} />
                  <span>{event?.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={12} />
                  <span>{event?.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
          Виж всички събития
          <Icon name="ArrowRight" size={16} className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CulturalCalendar;