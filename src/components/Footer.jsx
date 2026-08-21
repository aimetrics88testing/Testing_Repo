import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <div className="footer-newsletter-copy">
            <h2>Stay ahead with ShopEase</h2>
            <p>Product updates, exclusive offers, and order tips — straight to your inbox.</p>
          </div>
          <form
            className="footer-newsletter-form"
            onSubmit={(event) => event.preventDefault()}
            aria-label="Newsletter signup"
          >
            <label className="sr-only" htmlFor="footer-email">
              Work or personal email
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="name@company.com"
              autoComplete="email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-col footer-col-brand">
          <Link to="/" className="footer-brand">
            ShopEase
          </Link>
          <p>
            An enterprise retail platform for everyday essentials, fashion, and technology —
            built for reliable fulfillment and customer care at scale.
          </p>
          <address className="footer-address">
            ShopEase Retail Pvt. Ltd.
            <br />
            14th Floor, Horizon Tower
            <br />
            Bandra Kurla Complex, Mumbai 400051
            <br />
            India
          </address>
          <ul className="footer-contact">
            <li>
              <a href="tel:+18005550142">+1 (800) 555-0142</a>
            </li>
            <li>
              <a href="mailto:care@shopease.demo">care@shopease.demo</a>
            </li>
            <li>
              <span>Mon–Sat · 9:00–19:00 IST</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer service</h4>
          <ul>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/customer-care">Help center</Link>
            </li>
            <li>
              <Link to="/profile">Track your order</Link>
            </li>
            <li>
              <Link to="/customer-care">Shipping &amp; delivery</Link>
            </li>
            <li>
              <Link to="/customer-care">Returns &amp; refunds</Link>
            </li>
            <li>
              <Link to="/cart">Your cart</Link>
            </li>
            <li>
              <a href="mailto:care@shopease.demo">Contact support</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about">About ShopEase</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#press">Press &amp; media</a>
            </li>
            <li>
              <a href="#investors">Investor relations</a>
            </li>
            <li>
              <a href="#sustainability">Sustainability</a>
            </li>
            <li>
              <a href="#partners">Partner with us</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul className="footer-social">
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                X / Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
          </ul>
          <div className="footer-trust">
            <p className="footer-trust-label">We accept</p>
            <ul className="footer-payments" aria-label="Accepted payment methods">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>UPI</li>
              <li>NetBanking</li>
              <li>COD</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            &copy; {year} ShopEase Retail Pvt. Ltd. All rights reserved. CIN: U52100MH2018PTC312456
          </p>
          <ul className="footer-legal">
            <li>
              <a href="#privacy">Privacy policy</a>
            </li>
            <li>
              <a href="#terms">Terms of use</a>
            </li>
            <li>
              <a href="#cookies">Cookie policy</a>
            </li>
            <li>
              <a href="#accessibility">Accessibility</a>
            </li>
            <li>
              <a href="#sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
