// SEO utility functions for better search engine optimization

/**
 * Generates a sitemap entry for a page
 */
export const generateSitemapEntry = (url, lastmod, changefreq = 'weekly', priority = '0.8') => {
  const baseUrl = import.meta.env?.VITE_BASE_URL || 'https://kaleidoscope.bg';
  return {
    url: `${baseUrl}${url}`,
    lastmod: lastmod || new Date()?.toISOString()?.split('T')?.[0],
    changefreq,
    priority
  };
};

/**
 * Creates breadcrumbs for SEO and navigation
 */
export const createBreadcrumbs = (pathSegments) => {
  const breadcrumbs = [{ name: 'Начало', url: '/' }];
  
  let currentPath = '';
  pathSegments?.forEach((segment, index) => {
    currentPath += `/${segment?.url || segment?.name?.toLowerCase()?.replace(/\s+/g, '-')}`;
    breadcrumbs?.push({
      name: segment?.name,
      url: currentPath
    });
  });
  
  return breadcrumbs;
};

/**
 * Optimizes image URLs for better performance and SEO
 */
export const optimizeImageUrl = (url, options = {}) => {
  if (!url) return '/assets/images/no_image.png';
  
  const {
    width = 800,
    height = null,
    quality = 80,
    format = 'webp'
  } = options;
  
  // For Unsplash images, add optimization parameters
  if (url?.includes('unsplash.com')) {
    const params = new URLSearchParams();
    params?.set('w', width);
    if (height) params?.set('h', height);
    params?.set('q', quality);
    params?.set('fm', format);
    params?.set('fit', 'crop');
    
    return `${url}&${params?.toString()}`;
  }
  
  return url;
};

/**
 * Generates schema.org structured data for articles
 */
export const generateArticleSchema = (article, baseUrl) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article?.title,
    "description": article?.excerpt || article?.description,
    "image": article?.image ? `${baseUrl}${article?.image}` : `${baseUrl}/og-image.jpg`,
    "url": `${baseUrl}${article?.url || `/article/${article?.slug}`}`,
    "datePublished": article?.datePublished || article?.date,
    "dateModified": article?.dateModified || article?.date,
    "author": {
      "@type": "Person",
      "name": article?.author?.name || article?.author,
      "image": article?.author?.image,
      "url": article?.author?.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kaleidoscope Magazine",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${article?.url || `/article/${article?.slug}`}`
    },
    "articleSection": article?.category,
    "wordCount": article?.wordCount,
    "timeRequired": article?.readTime ? `PT${article?.readTime}M` : undefined,
    "keywords": article?.tags?.join(', ') || article?.keywords
  };
};

/**
 * Generates schema.org structured data for destinations/places
 */
export const generatePlaceSchema = (destination, baseUrl) => {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": destination?.name,
    "description": destination?.description,
    "image": destination?.image,
    "url": `${baseUrl}/destination/${destination?.slug}`,
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
    "touristType": destination?.touristType || "Cultural Tourism",
    "amenityFeature": destination?.amenities?.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity
    })),
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Best Season",
        "value": destination?.bestSeason
      },
      {
        "@type": "PropertyValue", 
        "name": "Travel Time",
        "value": destination?.travelTime
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": destination?.duration
      }
    ]
  };
};

/**
 * Calculates reading time for content
 */
export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content?.trim()?.split(/\s+/)?.length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Extracts keywords from content
 */
export const extractKeywords = (content, maxKeywords = 10) => {
  // Simple keyword extraction - in production, use more sophisticated NLP
  const commonWords = new Set(['и', 'на', 'в', 'за', 'с', 'от', 'по', 'до', 'като', 'се', 'да', 'е', 'са']);
  const words = content?.toLowerCase()?.replace(/[^\w\s]/g, '')?.split(/\s+/)?.filter(word => word?.length > 3 && !commonWords?.has(word));
    
  const wordCount = {};
  words?.forEach(word => {
    wordCount[word] = (wordCount?.[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)?.sort(([,a], [,b]) => b - a)?.slice(0, maxKeywords)?.map(([word]) => word);
};

/**
 * Validates and optimizes page title for SEO
 */
export const optimizePageTitle = (title, siteName = 'Kaleidoscope') => {
  const maxLength = 60;
  const separator = ' | ';
  const suffix = siteName;
  
  if (title?.length + separator?.length + suffix?.length <= maxLength) {
    return `${title}${separator}${suffix}`;
  }
  
  const truncatedTitle = title?.substring(0, maxLength - separator?.length - suffix?.length - 3) + '...';
  return `${truncatedTitle}${separator}${suffix}`;
};

/**
 * Optimizes meta description
 */
export const optimizeMetaDescription = (description) => {
  const maxLength = 160;
  if (description?.length <= maxLength) {
    return description;
  }
  
  return description?.substring(0, maxLength - 3) + '...';
};

/**
 * Generates Open Graph image URL for social sharing
 */
export const generateOGImage = (title, subtitle = '', image = '') => {
  // In production, this would generate a dynamic OG image
  const baseUrl = import.meta.env?.VITE_BASE_URL || 'https://kaleidoscope.bg';
  
  if (image) {
    return `${baseUrl}${image}`;
  }
  
  // Fallback to default OG image or dynamic generation service
  return `${baseUrl}/og-image.jpg`;
};

/**
 * Performance monitoring for Core Web Vitals
 */
export const reportWebVitals = (metric) => {
  // Report to analytics service
  if (import.meta.env?.PROD) {
    console.log('Web Vital:', metric);
    // Send to analytics: gtag('event', metric.name, { value: metric.value });
  }
};

/**
 * Lazy loading intersection observer
 */
export const createLazyLoadObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/og-image.jpg',
    '/logo.png',
    '/favicon.ico'
  ];
  
  criticalImages?.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head?.appendChild(link);
  });
};

/**
 * Service Worker registration for PWA
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env?.PROD) {
    try {
      const registration = await navigator.serviceWorker?.register('/sw.js');
      console.log('SW registered: ', registration);
      return registration;
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
    }
  }
};