import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Начало', path: '/homepage-cultural-magazine-hub' },
    { name: 'Пътувания', path: '/travel-section-regional-discovery' },
    { name: 'Култура', path: '/culture-section-editorial-authority' },
    { name: 'Интервюта', path: '/interview-section-personality-showcase' },
    { name: 'Търсене', path: '/search-hub-content-discovery-engine' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/homepage-cultural-magazine-hub" className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-foreground tracking-tight">
                Калейдоскоп
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`font-inter text-sm font-medium transition-colors duration-300 ease-out hover:text-accent ${
                  isActivePath(item?.path) 
                    ? 'text-foreground border-b-2 border-foreground pb-1' 
                    : 'text-muted-foreground'
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="default" 
              size="sm"
              className="font-inter font-medium"
            >
              Абонирай се
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-foreground"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="px-6 py-4 space-y-4">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-inter text-base font-medium transition-colors duration-300 ease-out ${
                    isActivePath(item?.path) 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-accent'
                  }`}
                >
                  {item?.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="default" 
                  fullWidth
                  className="font-inter font-medium"
                >
                  Абонирай се
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;