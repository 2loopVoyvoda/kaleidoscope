import React from 'react';
import ArticleCard from './ArticleCard';

const RelatedArticles = ({ articles, title = "Свързани статии" }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="font-playfair text-lg font-bold text-foreground mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {articles?.map((article) => (
          <ArticleCard 
            key={article?.id} 
            article={article} 
            variant="horizontal"
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;