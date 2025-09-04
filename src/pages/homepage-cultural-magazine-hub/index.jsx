import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import NavigationPreview from './components/NavigationPreview';
import KaleidoscopeOfTheDay from './components/KaleidoscopeOfTheDay';
import RegionalFocus from './components/RegionalFocus';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';

const HomepageCulturalMagazineHub = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Калейдоскоп - Открий необикновеното в познатото</title>
        <meta 
          name="description" 
          content="Калейдоскоп е вашият пътеводител в света на културата, пътуванията и любопитните истории. Открийте скрити съкровища, културни анализи и вдъхновяващи интервюта." 
        />
        <meta name="keywords" content="култура, пътувания, интервюта, България, списание, любопитства" />
        <meta property="og:title" content="Калейдоскоп - Културно списание" />
        <meta property="og:description" content="Открий необикновеното в познатото" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-cultural-magazine-hub" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <NavigationPreview />
        <KaleidoscopeOfTheDay />
        <RegionalFocus />
        <PersonalizedRecommendations />
        <NewsletterSubscription />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomepageCulturalMagazineHub;