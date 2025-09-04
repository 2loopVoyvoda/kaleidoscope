import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  article = null,
  breadcrumbs = null,
  structuredData = null 
}) => {
  const baseUrl = import.meta.env?.VITE_BASE_URL || '';
  const siteName = 'Kaleidoscope Magazine';
  const defaultImage = '/og-image.jpg';
  
  // Construct full URLs
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image ? `${baseUrl}${image}` : `${baseUrl}${defaultImage}`;
  
  // Default structured data for pages
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": fullUrl,
    "inLanguage": "bg-BG",
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": baseUrl
    }
  };

  // Article structured data
  const articleStructuredData = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImage,
    "url": fullUrl,
    "datePublished": article?.datePublished,
    "dateModified": article?.dateModified || article?.datePublished,
    "author": {
      "@type": "Person",
      "name": article?.author?.name || article?.author,
      "image": article?.author?.image
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "articleSection": article?.category,
    "wordCount": article?.wordCount,
    "timeRequired": article?.readTime ? `PT${article?.readTime}M` : undefined
  } : null;

  // Breadcrumbs structured data
  const breadcrumbsStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs?.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb?.name,
      "item": crumb?.url ? `${baseUrl}${crumb?.url}` : undefined
    }))
  } : null;

  const finalStructuredData = structuredData || articleStructuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="bg_BG" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article?.datePublished} />
          <meta property="article:modified_time" content={article?.dateModified || article?.datePublished} />
          <meta property="article:author" content={article?.author?.name || article?.author} />
          {article?.category && <meta property="article:section" content={article?.category} />}
          {article?.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      {finalStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData, null, 2)}
        </script>
      )}
      
      {/* Breadcrumbs structured data */}
      {breadcrumbsStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsStructuredData, null, 2)}
        </script>
      )}
      
      {/* Additional performance hints */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preload critical resources */}
      <link rel="preload" href={fullImage} as="image" />
    </Helmet>
  );
};

export default SEOHead;