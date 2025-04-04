import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/contact',
          '/privacy',
          '/terms'
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/api/internal/',
          '/*.json$',
          '/*?*', // Prevent crawling of URLs with query parameters
        ]
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'], // Prevent GPT from crawling the site
      }
    ],
    sitemap: 'https://base64decode.dev/sitemap.xml',
    host: 'https://base64decode.dev',
  };
} 