import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SearchHubContentDiscoveryEngine from './pages/search-hub-content-discovery-engine';
import TravelSectionRegionalDiscovery from './pages/travel-section-regional-discovery';
import CultureSection from './pages/culture-section-editorial-authority';
import HomepageCulturalMagazineHub from './pages/homepage-cultural-magazine-hub';
import InterviewSectionPersonalityShowcase from './pages/interview-section-personality-showcase';
import ArticleDetails from './pages/article-details';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageCulturalMagazineHub />} />
        <Route path="/search-hub-content-discovery-engine" element={<SearchHubContentDiscoveryEngine />} />
        <Route path="/travel-section-regional-discovery" element={<TravelSectionRegionalDiscovery />} />
        <Route path="/culture-section-editorial-authority" element={<CultureSection />} />
        <Route path="/homepage-cultural-magazine-hub" element={<HomepageCulturalMagazineHub />} />
        <Route path="/interview-section-personality-showcase" element={<InterviewSectionPersonalityShowcase />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;