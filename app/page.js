// app/page.js
import Header from '@/components/Header/Header';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

// Server-side data fetching
async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
    });
    
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories', {
      cache: 'no-store',
    });
    return await res.json();
  } catch (error) {
    return [];
  }
}

// Server Component
export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <>
      <Header />
      
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1 className={styles.mainHeading}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.subHeading}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <div className={styles.controlBar}>
          <div className={styles.itemCount}>
            <span>{products.length} ITEMS</span>
          </div>
          
          <div className={styles.controls}>
            <button className={styles.filterToggle}>
              <span className={styles.hideFilterDesktop}>⟨ HIDE FILTER</span>
              <span className={styles.showFilterMobile}>FILTER</span>
            </button>
            
            <div className={styles.divider}></div>
            
            <select className={styles.sortDropdown}>
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <FilterSidebar categories={categories} />
          <ProductGrid products={products} />
        </div>
      </main>

      <Footer />
    </>
  );
}
