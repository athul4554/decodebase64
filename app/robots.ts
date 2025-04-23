import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/privacy',
          '/terms'
        ],
        disallow: [
          '/api/',
          '/*.json$',
          '/*?*', // Prevent crawling of URLs with query parameters
          '/private/',
          '/admin/',
          '/debug/',
          '/test/',
          '/*.js$',
          '/*.css$',
          '/*.map$'
        ]
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'], // Prevent GPT from crawling the site
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/og-image.png', '/twitter-image.png']
      }
    ],
    sitemap: 'https://base64decode.dev/sitemap.xml',
    host: 'https://base64decode.dev',
  };
} 