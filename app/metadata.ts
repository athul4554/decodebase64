import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://base64decode.dev'),
  title: {
    default: 'Free Online Base64 Decoder and Encoder - Convert Text & Files | Developer Tools',
    template: '%s | Base64 Decode and Encode Tool'
  },
  description: 'Free online Base64 decoder and encoder - Convert text, files, and binary data instantly. No ads, no registration required. Secure, fast, and easy to use. Perfect for developers working with JWT tokens, API authentication, data URIs, and MIME encoding. Process data locally in your browser.',
  keywords: [
    'base64 decode', 'base64 encode', 'base64 converter', 'online base64', 
    'base64 decoder', 'base64 encoder', 'decode base64', 'encode base64',
    'base64 to text', 'text to base64', 'jwt decoder', 'data uri converter',
    'mime encoding', 'base64 string', 'binary to text', 'developer tools',
    'online decoder', 'base64 online', 'free base64 tool', 'base64 utility',
    'base64 converter online', 'decode base64 string', 'encode text to base64',
    'base64 decode online', 'base64 encode online', 'base64 string decoder',
    'convert base64', 'base64 text converter', 'base64 file encoder',
    'base64 image converter', 'base64 to binary', 'binary to base64'
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
    title: 'Free Online Base64 Decoder and Encoder - Convert Text & Files | Developer Tools',
    description: 'Free online Base64 decoder and encoder. Convert text, files, and binary data instantly. No ads, secure, and fast. Perfect for developers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Base64 Decode and Encode Tool - Free Online Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Base64 Decoder and Encoder - Developer Tools',
    description: 'Convert text, files, and binary data instantly. No ads, secure, and fast. Perfect for developers.',
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
      'notranslate': false,
    },
  },
  verification: {
    google: 'eT3pkPBxEBmFHwn5cueLsEIj8Ho8pMVjW9zlhHiNCa0',
  },
  category: 'Developer Tools',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
}; 