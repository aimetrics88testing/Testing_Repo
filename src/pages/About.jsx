import { Link } from 'react-router-dom'
import './About.css'

const pillars = [
  {
    title: 'Curated for daily life',
    text: 'Electronics, fashion, beauty, essentials, and medicines — chosen for quality and fair INR pricing.',
  },
  {
    title: 'Fulfillment you can trust',
    text: 'Clear shipping updates and dependable delivery so every order feels straightforward.',
  },
  {
    title: 'Support that answers',
    text: 'Customer Care and in-app chat help with returns, product questions, and order updates.',
  },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-hero-brand">ShopEase</p>
          <h1>Retail made clearer for everyday India</h1>
          <p className="about-hero-sub">
            One storefront for the things you actually need — built around simple browsing,
            transparent prices, and care that shows up when you need it.
          </p>
          <div className="about-hero-actions">
            <Link to="/" className="btn btn-primary">
              Start shopping
            </Link>
            <Link to="/customer-care" className="btn btn-ghost">
              Talk to support
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section about-mission">
        <div className="about-mission-copy">
          <p className="about-kicker">Our story</p>
          <h2>From Mumbai to your doorstep</h2>
          <p>
            ShopEase Retail Pvt. Ltd. started with a simple idea: shopping should feel calm,
            not cluttered. We bring trusted categories together so you can move from discovery
            to cart without guessing what comes next.
          </p>
          <p>
            Based in Bandra Kurla Complex, Mumbai, we serve shoppers across India with
            competitive pricing in Indian Rupees, practical offers, and a support team that
            treats every order as a relationship — not a ticket.
          </p>
        </div>
        <div className="about-mission-visual" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&h=1100&fit=crop"
            alt=""
          />
        </div>
      </section>

      <section className="about-section about-pillars">
        <div className="about-pillars-head">
          <p className="about-kicker">What guides us</p>
          <h2>Three promises behind every purchase</h2>
        </div>
        <ol className="about-pillar-list">
          {pillars.map((item, index) => (
            <li key={item.title} className="about-pillar">
              <span className="about-pillar-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section about-presence">
        <div className="about-presence-inner">
          <div>
            <p className="about-kicker about-kicker-light">Where we work</p>
            <h2>Built for Indian shoppers</h2>
            <p>
              Headquarters in Mumbai. Catalog priced in ₹. Support hours aligned to IST so help
              is available when you are shopping.
            </p>
          </div>
          <ul className="about-presence-facts">
            <li>
              <strong>HQ</strong>
              <span>BKC, Mumbai</span>
            </li>
            <li>
              <strong>Currency</strong>
              <span>Indian Rupees</span>
            </li>
            <li>
              <strong>Support</strong>
              <span>Mon–Sat · 9:00–19:00 IST</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section about-close">
        <h2>Explore the store</h2>
        <p>See featured picks, seasonal offers, or browse by category.</p>
        <div className="about-close-actions">
          <Link to="/offers" className="btn btn-primary">
            View offers
          </Link>
          <Link to="/category/electronics" className="btn btn-ghost">
            Browse electronics
          </Link>
          <Link to="/" className="btn btn-ghost">
            Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}
