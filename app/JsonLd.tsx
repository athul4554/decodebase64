type JsonLdType = {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
    availability: string;
  };
  featureList: string[];
  browserRequirements: string;
  permissions: string;
  creator: {
    "@type": string;
    name: string;
    url: string;
  };
  aggregateRating: {
    "@type": string;
    ratingValue: string;
    ratingCount: string;
    bestRating: string;
    worstRating: string;
  };
  review: {
    "@type": string;
    reviewRating: {
      "@type": string;
      ratingValue: string;
      bestRating: string;
      worstRating: string;
    };
    author: {
      "@type": string;
      name: string;
    };
    reviewBody: string;
  };
  mainEntity: {
    "@type": string;
    name: string;
    description: string;
  };
  keywords: string;
  datePublished: string;
  dateModified: string;
  isAccessibleForFree: boolean;
};

const jsonLd: JsonLdType = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Base64 Decode and Encode Tool",
  "url": "https://base64decode.dev",
  "description": "Free online Base64 decoder and encoder. Convert text, files, and binary data instantly. No ads, secure, and fast. Perfect for developers working with JWT tokens, API authentication, and data URIs.",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Base64 Encoding",
    "Base64 Decoding",
    "Instant Results",
    "No Server Processing",
    "Free to Use",
    "Developer-Friendly Interface",
    "Local Browser Processing",
    "No Registration Required",
    "Support for Large Text",
    "Copy to Clipboard"
  ],
  "browserRequirements": "Requires JavaScript",
  "permissions": "No special permissions required",
  "creator": {
    "@type": "Organization",
    "name": "Base64 Decode",
    "url": "https://base64decode.dev"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "Developer Review"
    },
    "reviewBody": "Excellent Base64 tool! Fast, reliable, and secure. Perfect for developers working with data encoding and API authentication."
  },
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "Base64 Encoder/Decoder",
    "description": "Online tool for Base64 encoding and decoding with support for text and file conversion"
  },
  "keywords": "base64 decode, base64 encode, base64 converter, online base64, jwt decoder, data uri converter",
  "datePublished": "2024-01-01",
  "dateModified": "2024-04-03",
  "isAccessibleForFree": true
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
} 