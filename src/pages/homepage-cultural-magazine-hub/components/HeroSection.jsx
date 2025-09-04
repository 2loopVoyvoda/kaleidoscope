import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-background min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tight">
            Калейдоскоп
          </h1>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Открий необикновеното в познатото
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/search-hub-content-discovery-engine">
            <Button variant="default" size="lg" className="font-inter font-medium">
              Започни изследването
            </Button>
          </Link>
          <Link to="/culture-section-editorial-authority">
            <Button variant="outline" size="lg" className="font-inter font-medium">
              Научи повече
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-300 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-foreground rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-foreground rounded-full opacity-50"></div>
    </section>
  );
};

export default HeroSection;