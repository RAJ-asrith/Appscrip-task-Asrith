// components/ProductGrid/ProductCard.js
'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './ProductGrid.module.css';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Generate SEO-friendly image alt text
  const imageAlt = `${product.title} - ${product.category} product image`;
  
  return (
    <article className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={imageAlt}
          width={300}
          height={400}
          className={styles.productImage}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <button
          className={styles.wishlistButton}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill={isWishlisted ? 'currentColor' : 'none'}>
            <path d="M10 18L8.55 16.7C4 12.6 1 9.9 1 6.5C1 3.9 3 2 5.5 2C7 2 8.5 2.8 10 4.1C11.5 2.8 13 2 14.5 2C17 2 19 3.9 19 6.5C19 9.9 16 12.6 11.45 16.7L10 18Z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>

      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        
        <div className={styles.productMeta}>
          <p className={styles.signInText}>
            <a href="#signin">Sign in</a> or <a href="#create">Create an account</a> to see pricing
          </p>
        </div>
      </div>
    </article>
  );
}
