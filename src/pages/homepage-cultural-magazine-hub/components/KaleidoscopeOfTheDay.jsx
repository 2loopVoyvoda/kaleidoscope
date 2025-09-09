import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const KaleidoscopeOfTheDay = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Скритите съкровища на Родопите: Пътешествие през времето",
      excerpt: "Открийте забравени села и древни традиции, които все още живеят в сърцето на българските планини.",
      author: "Мария Петрова",
      readTime: "8 мин четене",
      category: "Пътувания",
      categoryPath: "/patuvania",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      featured: true,
      publishedAt: "2025-09-03"
    },
    {
      id: 2,
      title: "Съвременното българско изкуство: Между традицията и иновацията",
      excerpt: "Как младите български художници преосмислят културното наследство в дигиталната епоха.",
      author: "Георги Стоянов",
      readTime: "12 мин четене",
      category: "Култура",
      categoryPath: "/kultura",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      featured: false,
      publishedAt: "2025-09-02"
    },
    {
      id: 3,
      title: "Философията на бавния живот: Уроци от българското село",
      excerpt: "Защо връщането към простотата може да бъде ключът към истинското щастие в модерния свят.",
      author: "Анна Димитрова",
      readTime: "6 мин четене",
      category: "Любопитства",
      categoryPath: "/",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      featured: false,
      publishedAt: "2025-09-01"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-foreground mb-4">
            Калейдоскоп на деня
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Тщателно подбрани истории, които разкриват красотата в ежедневието и дълбочината в познатото
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-8">
            <Link 
              to={featuredArticles?.[0]?.categoryPath}
              className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={featuredArticles?.[0]?.image}
                  alt={featuredArticles?.[0]?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full font-inter text-sm font-medium">
                    {featuredArticles?.[0]?.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">
                  {featuredArticles?.[0]?.title}
                </h3>
                <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-6">
                  {featuredArticles?.[0]?.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="font-inter text-sm font-medium text-foreground">
                      {featuredArticles?.[0]?.author}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-inter text-sm text-muted-foreground">
                      {featuredArticles?.[0]?.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-accent group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-inter text-sm font-medium">Прочети</span>
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Articles */}
          <div className="lg:col-span-4 space-y-8">
            {featuredArticles?.slice(1)?.map((article) => (
              <Link
                key={article?.id}
                to={article?.categoryPath}
                className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article?.image}
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full font-inter text-xs font-medium">
                      {article?.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                    {article?.title}
                  </h4>
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">
                    {article?.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-inter font-medium text-foreground">
                      {article?.author}
                    </span>
                    <span className="font-inter text-muted-foreground">
                      {article?.readTime}
                    </span>
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

export default KaleidoscopeOfTheDay;