import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RegionalFocus = () => {
  const regions = [
    {
      id: 1,
      name: "Софийска област",
      description: "Открийте скритите кътчета около столицата",
      articleCount: 24,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      coordinates: { lat: 42.6977, lng: 23.3219 },
      featured: true
    },
    {
      id: 2,
      name: "Пловдивски регион",
      description: "Културното сърце на България",
      articleCount: 18,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&h=400&fit=crop",
      coordinates: { lat: 42.1354, lng: 24.7453 },
      featured: false
    },
    {
      id: 3,
      name: "Черноморието",
      description: "Морски бриз и древна история",
      articleCount: 31,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      coordinates: { lat: 43.2141, lng: 27.9147 },
      featured: false
    },
    {
      id: 4,
      name: "Родопите",
      description: "Мистични планини и автентични традиции",
      articleCount: 15,
      image: "https://images.unsplash.com/photo-1464822759844-d150ad6d1c71?w=600&h=400&fit=crop",
      coordinates: { lat: 41.6086, lng: 24.4979 },
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Регионални фокуси
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Всеки регион разказва своя уникална история. Открийте местните съкровища и културни особености.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Интерактивна карта на България
              </h3>
              
              <div className="relative h-80 rounded-xl overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Bulgaria Map"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=42.7339,25.4858&z=7&output=embed"
                  className="rounded-xl"
                />
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                {regions?.slice(0, 4)?.map((region) => (
                  <div
                    key={region?.id}
                    className="flex items-center space-x-3 p-3 bg-muted rounded-lg hover:bg-accent/10 transition-colors cursor-pointer"
                  >
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div>
                      <p className="font-inter text-sm font-medium text-foreground">
                        {region?.name}
                      </p>
                      <p className="font-inter text-xs text-muted-foreground">
                        {region?.articleCount} статии
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regional Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {regions?.map((region) => (
              <Link
                key={region?.id}
                to="/travel-section-regional-discovery"
                className={`group block bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 ${
                  region?.featured ? 'ring-2 ring-accent/20' : ''
                }`}
              >
                <div className="flex">
                  <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                    <Image
                      src={region?.image}
                      alt={region?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {region?.featured && (
                      <div className="absolute top-2 left-2">
                        <span className="inline-block bg-accent text-white px-2 py-1 rounded-full font-inter text-xs font-medium">
                          Популярен
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {region?.name}
                        </h4>
                        <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-3">
                          {region?.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center text-muted-foreground">
                            <Icon name="FileText" size={14} className="mr-1" />
                            <span className="font-inter">{region?.articleCount} статии</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Icon name="MapPin" size={14} className="mr-1" />
                            <span className="font-inter">Регион</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-accent group-hover:translate-x-1 transition-transform duration-300">
                        <Icon name="ArrowRight" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalFocus;