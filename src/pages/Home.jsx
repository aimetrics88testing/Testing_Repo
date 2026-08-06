import { Link } from 'react-router-dom'
import { categories, getFeaturedProducts } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import './Home.css'

export default function Home() {
  const featured = getFeaturedProducts()

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-brand">ShopEase</p>
          <h1>Shop smarter, live easier</h1>
          <p className="hero-sub">
            Discover fashion, electronics, beauty, and daily essentials — all in one place.
          </p>
          <div className="hero-actions">
            <a href="#featured" className="btn btn-primary">
              Shop featured
            </a>
            <Link to="/category/electronics" className="btn btn-ghost">
              Browse electronics
            </Link>
          </div>
        </div>
      </section>

      <section className="section category-shortcuts">
        <div className="section-head">
          <h2>Shop by category</h2>
          <p>Find what you need in a few clicks.</p>
        </div>
        <div className="category-row">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="category-chip"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="featured">
        <div className="section-head">
          <h2>Featured picks</h2>
          <p>Handpicked favorites from across the store.</p>
        </div>
        <ProductGrid products={featured} />
      </section>
    </div>
  )
}
