// components/Footer/Footer.js
'use client';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterGrid}>
            <div className={styles.newsletterLeft}>
              <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
              <p className={styles.newsletterText}>
                Sign up for updates from mettā muse.
              </p>
              <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  className={styles.emailInput}
                  required
                  aria-label="Email address for newsletter subscription"
                />
                <button type="submit" className={styles.subscribeButton}>
                  SUBSCRIBE
                </button>
              </form>
            </div>

            <div className={styles.newsletterRight}>
              <h3 className={styles.contactTitle}>CONTACT US</h3>
              <p className={styles.contactText}>+44 221 133 5360</p>
              <p className={styles.contactText}>customercare@mettamuse.com</p>
              
              <h3 className={styles.currencyTitle}>CURRENCY</h3>
              <div className={styles.currencySelector}>
                <span className={styles.flag}>🇺🇸</span>
                <span className={styles.currencyDot}>•</span>
                <span className={styles.currencyText}>USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className={styles.linksSection}>
        <div className={styles.container}>
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>mettā muse</h3>
              <ul className={styles.linkList}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#stories">Stories</a></li>
                <li><a href="#artisans">Artisans</a></li>
                <li><a href="#boutiques">Boutiques</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#compliance">EU Compliances Docs</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>QUICK LINKS</h3>
              <ul className={styles.linkList}>
                <li><a href="#orders">Orders & Shipping</a></li>
                <li><a href="#seller">Join/Login as a Seller</a></li>
                <li><a href="#payment">Payment & Pricing</a></li>
                <li><a href="#returns">Return & Refunds</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>FOLLOW US</h3>
              <div className={styles.socialIcons}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              <h3 className={styles.paymentTitle}>mettā muse ACCEPTS</h3>
              <div className={styles.paymentIcons}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard payment method" className={styles.paymentIcon} width="40" height="25" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa payment method" className={styles.paymentIcon} width="40" height="25" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal payment method" className={styles.paymentIcon} width="40" height="25" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express payment method" className={styles.paymentIcon} width="40" height="25" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe payment method" className={styles.paymentIcon} width="40" height="25" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <p className={styles.copyrightText}>
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
