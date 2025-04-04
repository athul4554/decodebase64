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
};

const jsonLd: JsonLdType = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Base64 Decode and Encode Tool",
  "url": "https://base64decode.dev",
  "description": "Free online Base64 decoder and encoder. Instantly convert text to Base64 or decode Base64 strings. Secure, fast, and easy to use.",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Base64 Encoding",
    "Base64 Decoding",
    "Instant Results",
    "No Server Processing",
    "Free to Use",
    "Developer-Friendly Interface"
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
    "reviewBody": "Fast, reliable, and secure Base64 encoding and decoding tool. Perfect for developers."
  }
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