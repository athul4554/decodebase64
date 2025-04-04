import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://base64decode.dev'),
  title: {
    default: 'Free Online Base64 Decode and Encode Tool | Developer Utilities',
    template: '%s | Base64 Decode and Encode Tool'
  },
  description: 'Free online Base64 decoder and encoder. Instantly convert text to Base64 or decode Base64 strings. Secure, fast, and easy to use. Perfect for developers working with JWT, API authentication, data URIs, and MIME encoding.',
  keywords: [
    'base64 decode', 'base64 encode', 'base64 converter', 'online base64', 
    'base64 decoder', 'base64 encoder', 'decode base64', 'encode base64',
    'base64 to text', 'text to base64', 'jwt decoder', 'data uri converter',
    'mime encoding', 'base64 string', 'binary to text', 'developer tools',
    'online decoder', 'base64 online', 'free base64 tool', 'base64 utility'
  ],
  authors: [{ name: 'Base64 Decode' }],
  creator: 'Base64 Decode',
  publisher: 'Base64 Decode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://base64decode.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://base64decode.dev',
    siteName: 'Base64 Decode and Encode Tool',
    title: 'Free Online Base64 Decode and Encode Tool | Developer Utilities',
    description: 'Free online Base64 decoder and encoder. Instantly convert text to Base64 or decode Base64 strings. Secure, fast, and easy to use.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Base64 Decode and Encode Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Base64 Decode and Encode Tool',
    description: 'Instantly convert text to Base64 or decode Base64 strings. Secure, fast, and easy to use developer tool.',
    images: ['/twitter-image.png'],
    creator: '@base64decode',
    site: '@base64decode',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'eT3pkPBxEBmFHwn5cueLsEIj8Ho8pMVjW9zlhHiNCa0',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Developer Tools',
}; 