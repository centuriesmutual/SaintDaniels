import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react";

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

const getMetadataBase = () => {
  try {
    if (process.env.VERCEL_URL) {
      return new URL(`https://${process.env.VERCEL_URL}`);
    }
    return new URL('http://localhost:3031');
  } catch (error) {
    return new URL('http://localhost:3031');
  }
};

export const metadata = {
  metadataBase: getMetadataBase(),
  title: 'Saint Daniels Healthcare Rewards',
  description: 'Saint Daniels Healthcare Rewards - Earn healthcare rewards through our ad network, spend at pharmacies, and build your wellness balance.',
  keywords: 'healthcare rewards, private subsidy, healthcare rewards, pharmacy network, healthcare finance, Saint Daniels Healthcare',
  openGraph: {
    title: 'Saint Daniels Healthcare Rewards',
    description: 'Saint Daniels Healthcare Rewards - Earn healthcare rewards through our ad network, spend at pharmacies, and build your wellness balance.',
    url: 'https://saintdanielshealthcare.com',
    siteName: 'Saint Daniels Healthcare',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/saintdanielslogo.jpeg" type="image/jpeg" />
      </head>
      <body className={`${inter.className} root-layout`}>
        {children}
        <Analytics />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
} 