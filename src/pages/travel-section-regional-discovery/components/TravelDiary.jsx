import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TravelDiary = ({ diaries }) => {
  return (
    <div className="bg-card rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-playfair text-xl font-bold text-foreground">
          Пътешественически дневници
        </h3>
        <Link
          to="/travel-diaries"
          className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Виж всички
        </Link>
      </div>
      <div className="space-y-4">
        {diaries?.map((diary) => (
          <article key={diary?.id} className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
            <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={diary?.authorAvatar}
                alt={diary?.author}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center text-xs text-muted-foreground font-inter mb-1">
                <span>{diary?.author}</span>
                <span className="mx-2">•</span>
                <Icon name="Calendar" size={12} />
                <span className="ml-1">{diary?.date}</span>
              </div>
              
              <h4 className="font-inter font-semibold text-foreground mb-2 line-clamp-1">
                {diary?.title}
              </h4>
              
              <p className="text-sm text-muted-foreground font-inter line-clamp-2 mb-2">
                {diary?.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="MapPin" size={12} />
                  <span className="font-inter ml-1">{diary?.location}</span>
                </div>
                
                <Link
                  to={`/diary/${diary?.slug}`}
                  className="text-xs font-inter font-medium text-foreground hover:text-accent transition-colors"
                >
                  Прочети дневника
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TravelDiary;