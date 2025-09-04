import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import Footer from '../homepage-cultural-magazine-hub/components/Footer';

const ArticleDetails = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample articles database - in production this would come from API/database
  const articlesDatabase = {
    '1': {
      id: 1,
      title: "Скритите съкровища на Родопите: Пътешествие през времето",
      subtitle: "Открийте забравени села и древни традиции, които все още живеят в сърцето на българските планини",
      author: "Мария Петрова",
      authorBio: "Журналистка и изследовател на българския фолклор и традиции",
      publishedAt: "3 септември, 2025",
      readTime: "8 мин четене",
      category: "Пътувания",
      tags: ["Родопи", "Традиции", "Планински туризм", "Фолклор"],
      heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
      ],
      content: [
        {
          type: 'paragraph',
          text: 'Родопите са повече от планина - те са пазители на вековни тайни, свидетели на истории, които се предават от поколение на поколение. В тези древни планини времето сякаш тече по-бавно, а природата и културата са преплетени в неразделимо единство.'
        },
        {
          type: 'subheading',
          text: 'Селото на забравените песни'
        },
        {
          type: 'paragraph',
          text: 'Широка лъка е едно от най-автентичните места в Родопите. Тук все още можете да чуете древните родопски песни, изпълнени по начина, по който са били пени преди стотици години. Местните жители пазят традициите като свещен огън, предавайки ги от баба на внучка.'
        }
      ]
    },
    '2': {
      id: 2,
      title: "Съвременното българско изкуство: Между традицията и иновацията",
      subtitle: "Как младите български художници преосмислят културното наследство в дигиталната епоха",
      author: "Георги Стоянов",
      authorBio: "Арт критик и куратор със специализация в съвременно българско изкуство",
      publishedAt: "2 септември, 2025",
      readTime: "12 мин четене",
      category: "Култура",
      tags: ["Съвременно изкуство", "Традиции", "Дигитално изкуство", "Култура"],
      heroImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?w=800&h=600&fit=crop"
      ],
      content: [
        {
          type: 'paragraph',
          text: 'Българското съвременно изкуство преживява ренесанс. Младите художници намират нови начини да свържат богатото културно наследство с възможностите на дигиталната епоха, създавайки произведения, които говорят едновременно на локален и универсален език.'
        },
        {
          type: 'subheading',
          text: 'Дигиталната революция в изкуството'
        },
        {
          type: 'paragraph',
          text: 'Технологиите променят не само начина, по който създаваме изкуство, но и как го възприемаме. Българските художници използват VR, AI и интерактивни инсталации, за да разкажат истории за нашата идентичност в глобализирания свят.'
        }
      ]
    },
    '3': {
      id: 3,
      title: "Философията на бавния живот: Уроци от българското село",
      subtitle: "Защо връщането към простотата може да бъде ключът към истинското щастие в модерния свят",
      author: "Анна Димитрова",
      authorBio: "Философ и писател, изследовател на алтернативни начини на живот",
      publishedAt: "1 септември, 2025",
      readTime: "6 мин четене",
      category: "Любопитства",
      tags: ["Бавен живот", "Философия", "Селски живот", "Минимализъм"],
      heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505778276668-26b3ff7af103?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464822759844-d150ad6cdf0c?w=800&h=600&fit=crop"
      ],
      content: [
        {
          type: 'paragraph',
          text: 'В епохата на скоростта и постоянната свързаност, българското село предлага алтернатива - философията на бавния живот. Това не е просто носталгия към миналото, а съзнателен избор за по-осъзнат и устойчив начин на съществуване.'
        },
        {
          type: 'subheading',
          text: 'Уроците на земята'
        },
        {
          type: 'paragraph',
          text: 'Работата в градината учи на търпение, сезонността напомня за цикличността на живота, а общността в малкото село показва стойността на истинските човешки връзки. Това са уроци, от които съвременният човек може много да се научи.'
        }
      ]
    }
  };

  const article = articlesDatabase?.[id] || {
    id: parseInt(id),
    title: "Статията не беше намерена",
    subtitle: "Извинявайте, тази статия не съществува или е била премахната",
    author: "Калейдоскоп Екип",
    publishedAt: new Date()?.toLocaleDateString('bg-BG'),
    readTime: "1 мин четене",
    category: "Грешка",
    tags: [],
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
    gallery: [],
    content: [
      {
        type: 'paragraph',
        text: 'Статията, която търсите, не съществува или е била премахната. Моля, върнете се на началната страница или разгледайте други интересни материали.'
      }
    ]
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Мистериите на Тракия: На следите на древните богове",
      excerpt: "Изследване на археологическите находки и духовните традиции в Южна България",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Култура",
      readTime: "10 мин четене"
    },
    {
      id: 3,
      title: "Планинско село в XXI век: Как традициите оцеляват",
      excerpt: "Портрет на съвременните селски общности и техните предизвикателства",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      category: "Общество",
      readTime: "6 мин четене"
    }
  ];

  const nextSlide = () => {
    if (article?.gallery?.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % article?.gallery?.length);
    }
  };

  const prevSlide = () => {
    if (article?.gallery?.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + article?.gallery?.length) % article?.gallery?.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article?.title} - Калейдоскоп</title>
        <meta name="description" content={article?.subtitle} />
        <meta name="keywords" content={article?.tags?.join(', ')} />
        <meta property="og:title" content={article?.title} />
        <meta property="og:description" content={article?.subtitle} />
        <meta property="og:image" content={article?.heroImage} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={article?.author} />
        <meta property="article:section" content={article?.category} />
        {article?.tags?.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
      </Helmet>
      <Header />
      <article className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article?.heroImage}
              alt={article?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-inter text-sm font-medium mb-4">
                {article?.category}
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {article?.title}
            </h1>
            
            <p className="font-inter text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              {article?.subtitle}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span className="font-inter font-medium">{article?.author}</span>
              <span>•</span>
              <span className="font-inter">{article?.publishedAt}</span>
              <span>•</span>
              <span className="font-inter">{article?.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              {article?.content?.map((section, index) => (
                <div key={index} className="mb-8">
                  {section?.type === 'paragraph' && (
                    <p className="font-inter text-lg leading-relaxed text-foreground mb-6">
                      {section?.text}
                    </p>
                  )}
                  
                  {section?.type === 'subheading' && (
                    <h2 className="font-playfair text-3xl font-bold text-foreground mb-6 mt-12">
                      {section?.text}
                    </h2>
                  )}
                  
                  {section?.type === 'quote' && (
                    <blockquote className="border-l-4 border-accent pl-6 my-8">
                      <p className="font-playfair text-2xl italic text-foreground mb-4">
                        "{section?.text}"
                      </p>
                      {section?.author && (
                        <cite className="font-inter text-muted-foreground text-sm">
                          — {section?.author}
                        </cite>
                      )}
                    </blockquote>
                  )}
                  
                  {section?.type === 'list' && (
                    <ul className="space-y-3 my-6">
                      {section?.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="font-inter text-lg text-foreground flex items-start">
                          <span className="text-accent mr-3 flex-shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        {article?.gallery?.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">
                Галерия
              </h2>
              
              <div className="relative">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={article?.gallery?.[currentSlide]}
                    alt={`Gallery image ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground"
                  >
                    ←
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground"
                  >
                    →
                  </Button>
                </div>
                
                <div className="flex justify-center mt-6 space-x-2">
                  {article?.gallery?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? 'bg-accent' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tags Section */}
        {article?.tags?.length > 0 && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-wrap gap-3">
                {article?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-foreground px-4 py-2 rounded-full font-inter text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Articles */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">
              Свързани статии
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles?.map((relatedArticle) => (
                <Link
                  key={relatedArticle?.id}
                  to={`/article/${relatedArticle?.id}`}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedArticle?.image}
                      alt={relatedArticle?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full font-inter text-xs font-medium">
                        {relatedArticle?.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                      {relatedArticle?.title}
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">
                      {relatedArticle?.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-inter text-muted-foreground">
                        {relatedArticle?.readTime}
                      </span>
                      <div className="flex items-center text-accent group-hover:translate-x-1 transition-transform duration-300">
                        <span className="font-inter text-sm font-medium">Прочети</span>
                        <span className="ml-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="font-inter font-medium">
              Към началната страница
            </Button>
          </Link>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default ArticleDetails;