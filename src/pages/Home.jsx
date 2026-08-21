import { Link } from 'react-router-dom'
import { categories, getFeaturedProducts } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import './Home.css'

const categoryVisuals = {
  electronics: {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    blurb: 'Gadgets & gear',
  },
  'women-dresses': {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    blurb: 'Fresh silhouettes',
  },
  'men-dresses': {
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop',
    blurb: 'Sharp everyday wear',
  },
  'daily-essentials': {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    blurb: 'Home staples',
  },
  'beauty-products': {
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=800&h=600&fit=crop',
    blurb: 'Glow & care',
  },
  medicines: {
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop',
    blurb: 'Everyday wellness',
  },
}

export default function Home() {
  const featured = getFeaturedProducts()

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-brand">ShopEase</p>
          <h1>Everything you need, without the noise</h1>
          <p className="hero-sub">
            Fashion, electronics, beauty, medicines, and daily essentials — priced in ₹ and ready
            to ship across India.
          </p>
          <div className="hero-actions">
            <a href="#featured" className="btn btn-primary">
              Shop featured
            </a>
            <Link to="/offers" className="btn btn-ghost">
              See offers
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-categories">
        <div className="section-head">
          <h2>Shop by category</h2>
          <p>Jump into the aisle you need.</p>
        </div>
        <div className="category-mosaic">
          {categories.map((category) => {
            const visual = categoryVisuals[category.slug]
            return (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="category-tile"
              >
                <img src={visual.image} alt="" loading="lazy" />
                <span className="category-tile-copy">
                  <strong>{category.name}</strong>
                  <span>{visual.blurb}</span>
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="section home-featured" id="featured">
        <div className="section-head home-featured-head">
          <div>
            <h2>Featured picks</h2>
            <p>Handpicked favorites from across the store.</p>
          </div>
          <Link to="/category/electronics" className="home-featured-link">
            Browse all electronics
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="home-offer-band">
        <div className="home-offer-inner">
          <div>
            <p className="home-offer-kicker">Limited deals</p>
            <h2>Save more this week</h2>
            <p>Electronics Fest, Medicine Care, and Fashion Friday — live on Offers.</p>
          </div>
          <Link to="/offers" className="btn btn-primary">
            View all offers
          </Link>
        </div>
      </section>

      <section className="section home-story">
        <div className="home-story-copy">
          <p className="home-offer-kicker">Why ShopEase</p>
          <h2>Clear prices. Calm shopping. Care that answers.</h2>
          <p>
            We built ShopEase so discovery feels simple — from Mumbai HQ to your doorstep, with
            support when you need it.
          </p>
          <Link to="/about" className="btn btn-ghost">
            Our story
          </Link>
        </div>
        <div className="home-story-visual" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1555529902-5261145633bf?w=900&h=700&fit=crop"
            alt=""
          />
        </div>
      </section>
    </div>
  )
}
