// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Product Listing - Discover Our Collection | Appscrip Demo',
  description: 'Browse our curated collection of quality products. Find bags, accessories, fashion items and more with our extensive product catalog.',
  keywords: ['ecommerce', 'products', 'online shopping', 'fashion', 'accessories'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Product Listing - Discover Our Collection',
    description: 'Browse our curated collection of quality products',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Product Listing Page",
    "description": "Browse our complete product catalog with filters and categories",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
