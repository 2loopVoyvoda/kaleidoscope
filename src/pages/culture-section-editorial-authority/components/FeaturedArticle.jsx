import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FeaturedArticle = ({ article }) => {
  return (
    <article className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={article?.image}
          alt={article?.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
              {article?.category}
            </span>
            <span className="text-white text-xs">
              {article?.readTime} мин четене
            </span>
          </div>
          <h2 className="text-white text-xl md:text-2xl font-playfair font-bold leading-tight">
            {article?.title}
          </h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {article?.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={article?.author?.avatar}
              alt={article?.author?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {article?.author?.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {article?.author?.expertise}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{article?.publishDate}</span>
            <div className="flex items-center gap-1">
              <Icon name="Eye" size={14} />
              <span>{article?.views}</span>
            </div>
          </div>
        </div>
        
        <Link
          to={`/article/${article?.id}`}
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          Прочети повече
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedArticle;