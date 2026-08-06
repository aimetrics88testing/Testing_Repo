import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3 className="footer-brand">ShopEase</h3>
          <p>
            Everyday essentials, fashion, and gadgets — curated for a smoother shopping
            experience.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/customer-care">Customer Care</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="mailto:care@shopease.demo">care@shopease.demo</a>
            </li>
            <li>
              <span>Mon–Sat · 9am–7pm</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  )
}
