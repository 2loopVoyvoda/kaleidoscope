import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ArticleCard = ({ article, variant = 'default' }) => {
  if (variant === 'horizontal') {
    return (
      <article className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
          <Image
            src={article?.image}
            alt={article?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
              {article?.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {article?.readTime} мин
            </span>
          </div>
          
          <h3 className="font-playfair font-semibold text-sm leading-tight mb-2 line-clamp-2">
            <Link to={`/article/${article?.id}`} className="hover:text-accent transition-colors">
              {article?.title}
            </Link>
          </h3>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{article?.author?.name}</span>
            <span>{article?.publishDate}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article?.image}
          alt={article?.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
            {article?.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-playfair font-semibold text-lg leading-tight mb-2">
          <Link to={`/article/${article?.id}`} className="hover:text-accent transition-colors">
            {article?.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
          {article?.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={article?.author?.avatar}
              alt={article?.author?.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-foreground">
              {article?.author?.name}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{article?.readTime} мин</span>
            <div className="flex items-center gap-1">
              <Icon name="Eye" size={12} />
              <span>{article?.views}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;