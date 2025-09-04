import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import CulturalCalendar from './components/CulturalCalendar';
import CategoryFilter from './components/CategoryFilter';
import RelatedArticles from './components/RelatedArticles';
import NewsletterSubscription from './components/NewsletterSubscription';
import Icon from '../../components/AppIcon';

const CultureSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentLanguage, setCurrentLanguage] = useState('bg');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'bg';
    setCurrentLanguage(savedLanguage);
  }, []);

  const categories = [
    { id: 'all', name: 'Всички', icon: 'Grid3X3', count: 24 },
    { id: 'cinema', name: 'Кино', icon: 'Film', count: 8 },
    { id: 'theater', name: 'Театър', icon: 'Drama', count: 6 },
    { id: 'art', name: 'Изкуство', icon: 'Palette', count: 5 },
    { id: 'music', name: 'Музика', icon: 'Music', count: 3 },
    { id: 'literature', name: 'Литература', icon: 'BookOpen', count: 2 }
  ];

  const featuredArticle = {
    id: 1,
    title: "Съвременното българско кино: Между традицията и новаторството",
    excerpt: `Българската кинематография преживява ренесанс с нова вълна режисьори, които успешно балансират между автентичните национални теми и съвременните разказвачески техники.\n\nАнализираме как филми като 'Възможност за щастие' и 'Омагьосаният принц' предефинират българското кино в международен контекст.`,
    image: "https://images.unsplash.com/photo-1489599735734-79b4d2b0a3a4?w=800&h=600&fit=crop",
    category: "Кино",
    readTime: 12,
    publishDate: "2 септември 2025",
    views: "2.3К",
    author: {
      name: "Мария Петрова",
      expertise: "Кинокритик и културолог",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    }
  };

  const articles = [
    {
      id: 2,
      title: "Културните слоеве на София: Архитектурно наследство и съвременност",
      excerpt: `Столицата като палимпсест - как различните исторически епохи се преплитат в градската тъкан и формират уникалната културна идентичност на София.`,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "Архитектура",
      readTime: 8,
      publishDate: "30 август 2025",
      views: "1.8К",
      author: {
        name: "Георги Стоянов",
        expertise: "Архитектурен историк",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
      }
    },
    {
      id: 3,
      title: "Възраждането на българския театър: Нови гласове, стари сцени",
      excerpt: `Младото поколение театрални творци преосмисля класическия репертоар и създава смели съвременни постановки в традиционните театрални пространства.`,
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600&h=400&fit=crop",
      category: "Театър",
      readTime: 10,
      publishDate: "28 август 2025",
      views: "1.5К",
      author: {
        name: "Елена Димитрова",
        expertise: "Театрален критик",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      }
    },
    {
      id: 4,
      title: "Дигиталното изкуство в България: Между технологията и емоцията",
      excerpt: `Как българските дигитални художници използват новите технологии за създаване на произведения, които говорят за човешкия опит в дигиталната епоха.`,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      category: "Изкуство",
      readTime: 7,
      publishDate: "26 август 2025",
      views: "1.2К",
      author: {
        name: "Иван Николов",
        expertise: "Куратор съвременно изкуство",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      }
    },
    {
      id: 5,
      title: "Музикалната сцена на София: Джаз клубове и алтернативни пространства",
      excerpt: `Картографиране на независимата музикална сцена в столицата - от интимните джаз клубове до експерименталните концертни зали.`,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      category: "Музика",
      readTime: 6,
      publishDate: "24 август 2025",
      views: "980",
      author: {
        name: "Петър Василев",
        expertise: "Музикален журналист",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
      }
    },
    {
      id: 6,
      title: "Съвременната българска литература: Гласове от новото поколение",
      excerpt: `Млади български автори, които предефинират литературния пейзаж с иновативни разказвачески техники и актуални социални теми.`,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      category: "Литература",
      readTime: 9,
      publishDate: "22 август 2025",
      views: "1.4К",
      author: {
        name: "Анна Георгиева",
        expertise: "Литературен критик",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
      }
    }
  ];

  const relatedArticles = [
    {
      id: 7,
      title: "Фестивалът на документалното кино в София",
      excerpt: "Преглед на най-интересните заглавия от тазгодишното издание",
      image: "https://images.unsplash.com/photo-1489599735734-79b4d2b0a3a4?w=400&h=300&fit=crop",
      category: "Кино",
      readTime: 5,
      publishDate: "20 август 2025",
      views: "750",
      author: {
        name: "Димитър Петков",
        expertise: "Кинокритик",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      }
    },
    {
      id: 8,
      title: "Изложбата \'Съвременни визии\' в НХГ",
      excerpt: "Как младите художници интерпретират българската идентичност",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Изкуство",
      readTime: 4,
      publishDate: "18 август 2025",
      views: "620",
      author: {
        name: "Светлана Иванова",
        expertise: "Арт критик",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
      }
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles?.filter(article => {
        const categoryMap = {
          'cinema': 'Кино',
          'theater': 'Театър', 
          'art': 'Изкуство',
          'music': 'Музика',
          'literature': 'Литература'
        };
        return article?.category === categoryMap?.[activeCategory];
      });

  return (
    <>
      <Helmet>
        <title>Култура - Калейдоскоп | Културни анализи и коментари</title>
        <meta name="description" content="Задълбочени културни анализи, интервюта с творци и преглед на българската културна сцена. Авторитетни мнения за кино, театър, изкуство и литература." />
        <meta name="keywords" content="култура, българско кино, театър, изкуство, литература, културни анализи" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Култура
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Задълбочени анализи и авторитетни коментари за българската и световната културна сцена. 
                Открийте новите гласове и преосмислете познатите творци.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Article */}
              <section className="mb-12">
                <FeaturedArticle article={featuredArticle} />
              </section>

              {/* Category Filter */}
              <CategoryFilter 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {/* Articles Grid */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles?.map((article) => (
                  <ArticleCard key={article?.id} article={article} />
                ))}
              </section>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Зареди още статии
                  <Icon name="ChevronDown" size={20} />
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Cultural Calendar */}
              <CulturalCalendar />

              {/* Newsletter Subscription */}
              <NewsletterSubscription />

              {/* Related Articles */}
              <RelatedArticles articles={relatedArticles} />

              {/* Popular Tags */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-playfair text-lg font-bold text-foreground mb-4">
                  Популярни теми
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Българско кино', 'Съвременно изкуство', 'Театрални премиери',
                    'Литературни награди', 'Културни фестивали', 'Музикална сцена',
                    'Архитектура', 'Фотография', 'Дигитално изкуство'
                  ]?.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CultureSection;