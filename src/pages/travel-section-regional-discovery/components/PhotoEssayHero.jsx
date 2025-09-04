import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PhotoEssayHero = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [photos?.length]);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos?.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos?.length) % photos?.length);
  };

  return (
    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg mb-8">
      <div className="relative w-full h-full">
        <Image
          src={photos?.[currentPhoto]?.src}
          alt={photos?.[currentPhoto]?.alt}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="max-w-4xl">
            <h1 className="font-playfair text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Скритите съкровища на България
            </h1>
            <p className="font-inter text-lg text-white/90 mb-6 max-w-2xl">
              Открийте необикновените места, които правят нашата страна уникална - от древни села до девствени природни паркове
            </p>
            <Button variant="secondary" size="lg">
              Започни пътешествието
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevPhoto}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white p-2 rounded-full transition-colors duration-200"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        
        <button
          onClick={nextPhoto}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white p-2 rounded-full transition-colors duration-200"
        >
          <Icon name="ChevronRight" size={24} />
        </button>
        
        {/* Photo Indicators */}
        <div className="absolute bottom-4 right-6 flex space-x-2">
          {photos?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhoto(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentPhoto ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Photo Caption */}
        <div className="absolute top-4 left-4 bg-background/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
          <span className="text-sm font-inter">
            {currentPhoto + 1} / {photos?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoEssayHero;