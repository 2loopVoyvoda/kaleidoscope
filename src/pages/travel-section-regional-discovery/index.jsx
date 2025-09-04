import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Header from '../../components/ui/Header';
import PhotoEssayHero from './components/PhotoEssayHero';
import RegionFilter from './components/RegionFilter';
import DestinationCard from './components/DestinationCard';
import FeaturedArticle from './components/FeaturedArticle';
import InteractiveMap from './components/InteractiveMap';
import TravelDiary from './components/TravelDiary';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const TravelSectionRegionalDiscovery = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Mock destinations data - moved before SEO data to fix initialization issue
  const destinations = [
    {
      id: 1,
      name: "Копривщица",
      region: "Западна България",
      description: "Архитектурен резерват с възрожденски къщи и богата история от Априлското въстание",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      travelTime: "1.5 часа",
      duration: "Уикенд",
      bestSeason: "пролет",
      slug: "koprivshtitsa",
      coordinates: { lat: 42.6373, lng: 24.3576 }
    },
    {
      id: 2,
      name: "Странджа",
      region: "Източна България",
      description: "Най-старата планина в България с уникална флора и фауна, древни традиции",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      travelTime: "4 часа",
      duration: "3-4 дни",
      bestSeason: "лято",
      slug: "strandzha",
      coordinates: { lat: 41.9736, lng: 27.4611 }
    },
    {
      id: 3,
      name: "Мелник",
      region: "Южна България",
      description: "Най-малкият град в България, известен с винопроизводството и пясъчните пирамиди",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      travelTime: "2 часа",
      duration: "Уикенд",
      bestSeason: "есен",
      slug: "melnik",
      coordinates: { lat: 41.5239, lng: 23.3964 }
    },
    {
      id: 4,
      name: "Белоградчишки скали",
      region: "Северна България",
      description: "Впечатляващи скални образувания и средновековна крепост Калето",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      travelTime: "3 часа",
      duration: "2-3 дни",
      bestSeason: "пролет",
      slug: "belogradchik",
      coordinates: { lat: 43.6217, lng: 22.6742 }
    },
    {
      id: 5,
      name: "Созопол",
      region: "Източна България",
      description: "Древен черноморски град с автентична архитектура и кристално чисто море",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      travelTime: "5 часа",
      duration: "Уикенд",
      bestSeason: "лято",
      slug: "sozopol",
      coordinates: { lat: 42.4191, lng: 27.6947 }
    },
    {
      id: 6,
      name: "Банско",
      region: "Южна България",
      description: "Планински курорт с традиционна архитектура и отлични възможности за зимни спортове",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      travelTime: "2.5 часа",
      duration: "3-4 дни",
      bestSeason: "зима",
      slug: "bansko",
      coordinates: { lat: 41.8369, lng: 23.4881 }
    }
  ];

  // SEO Data
  const seoData = {
    title: "Регионални Дестинации България | Пътешествия и Туризъм | Kaleidoscope",
    description: "Открийте скритите съкровища на България по региони. Копривщица, Странджа, Мелник, Белоградчишки скали и още автентични дестинации с богата история и култура.",
    keywords: "България дестинации, регионален туризъм, Копривщица, Странджа, Мелник, Белоградчишки скали, българските планини, черноморско крайбрежие, културен туризъм България",
    image: "/images/travel-section-og.jpg",
    url: "/travel-section-regional-discovery"
  };

  // Breadcrumbs for SEO
  const breadcrumbs = [
    { name: "Начало", url: "/" },
    { name: "Пътешествия", url: "/travel-section-regional-discovery" }
  ];

  // Structured data for travel destinations
  const destinationsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Регионални Дестинации България",
    "description": "Колекция от регионални дестинации в България",
    "numberOfItems": destinations?.length,
    "itemListElement": destinations?.map((destination, index) => ({
      "@type": "Place",
      "position": index + 1,
      "name": destination?.name,
      "description": destination?.description,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": destination?.region,
        "addressCountry": "Bulgaria"
      },
      "geo": destination?.coordinates ? {
        "@type": "GeoCoordinates",
        "latitude": destination?.coordinates?.lat,
        "longitude": destination?.coordinates?.lng
      } : undefined,
      "image": destination?.image,
      "url": `/destination/${destination?.slug}`
    }))
  };

  // Mock data for photo essay hero
  const heroPhotos = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Родопски планини"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Черноморско крайбрежие"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Балканска планина"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Витоша"
    }
  ];

  // Mock featured articles data
  const featuredArticles = [
    {
      id: 1,
      title: "Уикенд в Копривщица: Пътешествие през времето",
      excerpt: "Разходка по калдъръмените улички на града-музей, където всяка къща разказва история от Възраждането. Открийте тайните на Априлското въстание и се потопете в атмосферата на XIX век.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Мария Петрова",
      date: "28 февруари 2025",
      readTime: "8",
      slug: "weekend-koprivshtitsa"
    },
    {
      id: 2,
      title: "Скритите съкровища на Странджа",
      excerpt: "Най-старата планина в България крие невероятни природни богатства и древни традиции. Пътешествие до сърцето на българската мистика и нестинарските игри.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Георги Иванов",
      date: "25 февруари 2025",
      readTime: "12",
      slug: "strandzha-treasures"
    },
    {
      id: 3,
      title: "Винените маршрути на Мелник",
      excerpt: "Най-малкият град в България предлага най-големите винени изживявания. Разкрийте тайните на местното винопроизводство и се насладете на уникалните пясъчни пирамиди.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Анна Димитрова",
      date: "22 февруари 2025",
      readTime: "10",
      slug: "melnik-wine-routes"
    }
  ];

  // Mock travel diaries data
  const travelDiaries = [
    {
      id: 1,
      title: "Три дни в Родопите: Личен дневник",
      excerpt: "Как открих най-красивите села в планината и защо всеки българин трябва да посети Широка лъка поне веднъж в живота си.",
      author: "Петър Стоянов",
      authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "1 март 2025",
      location: "Родопи",
      slug: "rhodope-diary"
    },
    {
      id: 2,
      title: "Зимна приказка в Рила",
      excerpt: "Снежни върхове, кристални езера и тишината на планината. Моето пътешествие до седемте рилски езера през зимата.",
      author: "Елена Георгиева",
      authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "28 февруари 2025",
      location: "Рила",
      slug: "rila-winter-diary"
    },
    {
      id: 3,
      title: "По стъпките на тракийците",
      excerpt: "Археологически обиколки из Южна България - от Казанлък до Свещари. Какво научих за древната ни история.",
      author: "Димитър Николов",
      authorAvatar: "https://randomuser.me/api/portraits/men/56.jpg",
      date: "25 февруари 2025",
      location: "Тракия",
      slug: "thracian-heritage-diary"
    }
  ];

  const filteredDestinations = activeRegion === 'all' 
    ? destinations 
    : destinations?.filter(dest => {
        const regionMap = {
          'north': 'Северна България',
          'south': 'Южна България',
          'west': 'Западна България',
          'east': 'Източна България'
        };
        return dest?.region === regionMap?.[activeRegion];
      });

  return (
    <>
      <SEOHead 
        {...seoData}
        breadcrumbs={breadcrumbs}
        structuredData={destinationsStructuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          {/* Hero Photo Essay */}
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <PhotoEssayHero photos={heroPhotos} />
          </section>

          {/* Main Content */}
          <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Destinations */}
              <div className="lg:col-span-2">
                {/* Section Header with SEO-optimized content */}
                <div className="mb-8">
                  <h1 className="font-playfair text-3xl font-bold text-foreground mb-4">
                    Регионални дестинации
                  </h1>
                  <p className="font-inter text-muted-foreground text-lg">
                    Открийте скритите съкровища на България, организирани по региони за лесно планиране на вашето следващо приключение
                  </p>
                </div>

                {/* Region Filter */}
                <RegionFilter 
                  activeRegion={activeRegion} 
                  onRegionChange={setActiveRegion} 
                />

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" itemScope itemType="https://schema.org/ItemList">
                  {filteredDestinations?.map((destination) => (
                    <div key={destination?.id} itemScope itemType="https://schema.org/Place" itemProp="itemListElement">
                      <DestinationCard destination={destination} />
                      {/* Hidden structured data for each destination */}
                      <meta itemProp="name" content={destination?.name} />
                      <meta itemProp="description" content={destination?.description} />
                      <meta itemProp="image" content={destination?.image} />
                    </div>
                  ))}
                </div>

                {/* Featured Articles */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-playfair text-2xl font-bold text-foreground">
                      Препоръчани статии
                    </h2>
                    <Button variant="outline" size="sm">
                      Виж всички статии
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FeaturedArticle article={featuredArticles?.[0]} isLarge />
                    <div className="space-y-6">
                      <FeaturedArticle article={featuredArticles?.[1]} />
                      <FeaturedArticle article={featuredArticles?.[2]} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* Interactive Map */}
                <InteractiveMap 
                  destinations={destinations} 
                  onLocationSelect={setSelectedLocation} 
                />

                {/* Travel Diaries */}
                <TravelDiary diaries={travelDiaries} />

                {/* Newsletter Signup */}
                <div className="bg-card rounded-lg p-6">
                  <div className="text-center">
                    <Icon name="Mail" size={32} className="mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-playfair text-lg font-bold text-foreground mb-2">
                      Пътешественски бюлетин
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter mb-4">
                      Получавайте най-новите статии за пътувания и скрити дестинации всяка седмица
                    </p>
                    <Button variant="default" fullWidth>
                      Абонирай се
                    </Button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-card rounded-lg p-6">
                  <h4 className="font-playfair text-lg font-bold text-foreground mb-4">
                    Статистики
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-inter text-muted-foreground">Дестинации</span>
                      <span className="font-inter font-semibold text-foreground">127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-inter text-muted-foreground">Статии</span>
                      <span className="font-inter font-semibold text-foreground">89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-inter text-muted-foreground">Дневници</span>
                      <span className="font-inter font-semibold text-foreground">34</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-inter text-muted-foreground">Региони</span>
                      <span className="font-inter font-semibold text-foreground">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TravelSectionRegionalDiscovery;