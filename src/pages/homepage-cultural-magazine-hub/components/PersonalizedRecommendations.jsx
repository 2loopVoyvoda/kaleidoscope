import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PersonalizedRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Тракийските съкровища: Археологически открития, които променят историята",
      excerpt: "Нови разкопки разкриват неизвестни страни от древната тракийска цивилизация.",
      author: "Проф. Иван Маразов",
      readTime: "15 мин четене",
      category: "Култура",
      categoryPath: "/kultura",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      tags: ["археология", "история", "траки"],
      engagement: 92
    },
    {
      id: 2,
      title: "Интервю с Мила Роберт: Как българската мода завладява Европа",
      excerpt: "Разговор с дизайнерката, която представя България на международните подиуми.",
      author: "Елена Георгиева",
      readTime: "10 мин четене",
      category: "Интервюта",
      categoryPath: "/intervyuta",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      tags: ["мода", "дизайн", "интервю"],
      engagement: 87
    },
    {
      id: 3,
      title: "Винените маршрути на България: Пътешествие през лозята",
      excerpt: "Открийте най-добрите винарни и техните уникални истории в различните региони.",
      author: "Димитър Петков",
      readTime: "12 мин четене",
      category: "Пътувания",
      categoryPath: "/patuvania",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop",
      tags: ["вино", "туризм", "традиции"],
      engagement: 89
    },
    {
      id: 4,
      title: "Дигиталният детокс: Как да намерим баланса в свързания свят",
      excerpt: "Практически съвети за създаване на здравословна връзка с технологиите.",
      author: "Д-р Мария Стоянова",
      readTime: "8 мин четене",
      category: "Любопитства",
      categoryPath: "/",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      tags: ["здраве", "технологии", "баланс"],
      engagement: 94
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              За вас
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Персонализирани препоръки въз основа на вашите интереси
            </p>
          </div>
          
          <Link
            to="/tarsene"
            className="hidden md:flex items-center text-accent hover:text-foreground transition-colors group"
          >
            <span className="font-inter text-sm font-medium">Виж всички</span>
            <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations?.map((article) => (
            <Link
              key={article?.id}
              to={article?.categoryPath}
              className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article?.image}
                  alt={article?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full font-inter text-xs font-medium">
                    {article?.category}
                  </span>
                </div>
                
                <div className="absolute top-3 right-3">
                  <div className="flex items-center bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    <span className="font-inter text-xs font-medium">{article?.engagement}%</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight line-clamp-2">
                  {article?.title}
                </h3>
                
                <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article?.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article?.tags?.slice(0, 2)?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded-md font-inter text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
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
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/tarsene">
            <button className="inline-flex items-center text-accent hover:text-foreground transition-colors group">
              <span className="font-inter text-sm font-medium">Виж всички препоръки</span>
              <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;