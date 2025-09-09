import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SearchHubContentDiscoveryEngine from './pages/tarsene';
import TravelSectionRegionalDiscovery from './pages/patuvania';
import CultureSection from './pages/kultura';
import HomepageCulturalMagazineHub from './pages/homepage-cultural-magazine-hub';
import InterviewSectionPersonalityShowcase from './pages/intervyuta';
import ArticleDetails from './pages/article-details';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageCulturalMagazineHub />} />
        <Route path="/tarsene" element={<SearchHubContentDiscoveryEngine />} />
        <Route path="/patuvania" element={<TravelSectionRegionalDiscovery />} />
        <Route path="/kultura" element={<CultureSection />} />
        <Route path="/intervyuta" element={<InterviewSectionPersonalityShowcase />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;