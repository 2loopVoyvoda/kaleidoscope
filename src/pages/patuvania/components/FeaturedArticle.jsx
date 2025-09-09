import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FeaturedArticle = ({ article, isLarge = false }) => {
  return (
    <article className={`bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${isLarge ? 'col-span-2' : ''}`}>
      <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
        <Image
          src={article?.image}
          alt={article?.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white/80 text-xs font-inter mb-2">
            <Icon name="User" size={14} />
            <span className="ml-1">{article?.author}</span>
            <span className="mx-2">•</span>
            <Icon name="Calendar" size={14} />
            <span className="ml-1">{article?.date}</span>
          </div>
          <h2 className={`font-playfair font-bold text-white leading-tight ${isLarge ? 'text-2xl' : 'text-lg'}`}>
            {article?.title}
          </h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground font-inter mb-3 line-clamp-3">
          {article?.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <Icon name="Clock" size={14} />
            <span className="font-inter ml-1">{article?.readTime} мин четене</span>
          </div>
          
          <Link
            to={`/article/${article?.slug}`}
            className="inline-flex items-center text-sm font-inter font-medium text-foreground hover:text-accent transition-colors"
          >
            Прочети
            <Icon name="ArrowRight" size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;