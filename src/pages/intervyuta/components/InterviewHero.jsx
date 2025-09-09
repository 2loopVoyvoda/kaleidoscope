import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const InterviewHero = ({ featuredInterview }) => {
  return (
    <section className="relative bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted rounded-lg">
              <Image
                src={featuredInterview?.portrait}
                alt={`Портрет на ${featuredInterview?.name}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  ИНТЕРВЮ
                </span>
                <span className="text-sm text-muted-foreground">
                  {featuredInterview?.date}
                </span>
              </div>
              
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {featuredInterview?.name}
              </h1>
              
              <p className="text-lg text-muted-foreground font-inter">
                {featuredInterview?.title}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground font-inter leading-relaxed">
                {featuredInterview?.introduction}
              </p>
            </div>

            {/* Audio Player */}
            {featuredInterview?.audioUrl && (
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <button className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors">
                    <Icon name="Play" size={20} />
                  </button>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      Слушай интервюто
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {featuredInterview?.audioDuration}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Volume2" size={16} className="text-muted-foreground" />
                    <Icon name="Share" size={16} className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-muted-foreground">Следвай:</span>
              {featuredInterview?.socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.url}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={link?.platform} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewHero;