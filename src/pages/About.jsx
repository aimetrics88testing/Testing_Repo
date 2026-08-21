import { Link } from 'react-router-dom'
import './About.css'

const journey = [
  {
    title: 'Browse with clarity',
    text: 'Categories and product pages stay simple — names, prices in ₹, and no clutter.',
  },
  {
    title: 'Add what you need',
    text: 'Build a cart, adjust quantities, and keep shopping until you are ready.',
  },
  {
    title: 'Get help when it matters',
    text: 'Customer Care and chat cover shipping questions, returns, and order updates.',
  },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <div className="about-intro-inner">
          <div className="about-intro-copy">
            <p className="about-brand">ShopEase</p>
            <h1>Shopping should feel calm — even when life does not.</h1>
            <p className="about-lede">
              We are a Mumbai-based retail platform for fashion, electronics, beauty,
              medicines, and daily essentials. Transparent prices. Straightforward care.
            </p>
            <div className="about-intro-actions">
              <Link to="/" className="btn btn-primary">
                Explore the store
              </Link>
              <Link to="/offers" className="btn btn-ghost">
                Current offers
              </Link>
            </div>
          </div>
          <figure className="about-intro-media">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b692153bbf?w=1000&h=1200&fit=crop"
              alt="ShopEase retail shopping experience"
            />
          </figure>
        </div>
      </section>

      <section className="about-quote-band" aria-label="Mission">
        <blockquote>
          <p>
            “Build one storefront people trust for everyday needs — priced for India, supported
            like a neighbour.”
          </p>
          <cite>ShopEase Retail Pvt. Ltd. · Est. Mumbai</cite>
        </blockquote>
      </section>

      <section className="about-section about-origin">
        <div className="about-origin-copy">
          <p className="about-kicker">Origin</p>
          <h2>Why we exist</h2>
          <p>
            ShopEase started because online shopping often felt noisy: too many banners, unclear
            totals, and support that disappeared after checkout. We wanted the opposite —
            a clean catalog, INR pricing you can scan quickly, and a team that answers.
          </p>
          <p>
            From our office in Bandra Kurla Complex, we curate products across six categories and
            keep the path from discovery to cart intentionally short.
          </p>
        </div>
        <aside className="about-origin-aside">
          <h3>Headquarters</h3>
          <address>
            14th Floor, Horizon Tower
            <br />
            Bandra Kurla Complex
            <br />
            Mumbai 400051, India
          </address>
          <p className="about-origin-hours">Support · Mon–Sat · 9:00–19:00 IST</p>
          <a href="mailto:care@shopease.demo">care@shopease.demo</a>
        </aside>
      </section>

      <section className="about-section about-journey">
        <div className="about-journey-head">
          <p className="about-kicker">How it works</p>
          <h2>A quieter path to purchase</h2>
        </div>
        <ol className="about-journey-list">
          {journey.map((step, index) => (
            <li key={step.title}>
              <span className="about-step-index" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-visual-split">
        <div className="about-visual-split-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=800&fit=crop"
            alt=""
          />
        </div>
        <div className="about-visual-split-copy">
          <p className="about-kicker about-kicker-on-dark">Promise</p>
          <h2>Fair INR prices. Real support hours. No gimmicks in the way.</h2>
          <p>
            Whether you are picking headphones, a dress, or everyday medicine, the experience
            should feel the same: clear product pages, honest offers, and help when you need it.
          </p>
          <Link to="/customer-care" className="btn btn-primary">
            Visit Customer Care
          </Link>
        </div>
      </section>

      <section className="about-section about-close">
        <h2>Ready when you are</h2>
        <p>Browse featured picks on the home page, or jump straight into a category.</p>
        <div className="about-close-actions">
          <Link to="/" className="btn btn-primary">
            Go to home
          </Link>
          <Link to="/category/beauty-products" className="btn btn-ghost">
            Shop beauty
          </Link>
          <Link to="/category/medicines" className="btn btn-ghost">
            Shop medicines
          </Link>
        </div>
      </section>
    </div>
  )
}
