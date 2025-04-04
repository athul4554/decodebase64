import '@mantine/core/styles.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import JsonLd from './JsonLd';
import { metadata } from './metadata';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <JsonLd />
      </head>
      <body className={inter.className} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Providers>
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}