import { Link } from 'react-router-dom'
import './About.css'

const highlights = [
  {
    title: 'Curated catalog',
    text: 'Fashion, electronics, beauty, daily essentials, and medicines — selected for quality and everyday value.',
  },
  {
    title: 'Reliable fulfillment',
    text: 'Orders ship with clear tracking and customer care support across India.',
  },
  {
    title: 'Customer-first support',
    text: 'Help with returns, product questions, and order updates through Customer Care and our in-app chat.',
  },
]

export default function About() {
  return (
    <div className="page-block about-page">
      <div className="section-head">
        <h1>About ShopEase</h1>
        <p>Our story, mission, and how we help you shop smarter.</p>
      </div>

      <section className="about-story">
        <h2>Who we are</h2>
        <p>
          ShopEase is a modern retail platform built to make everyday shopping simpler. From
          headphones and fashion to wellness and home essentials, we bring trusted categories
          together in one clean storefront.
        </p>
        <p>
          Founded with a focus on reliable fulfillment and clear customer care, ShopEase Retail
          Pvt. Ltd. operates from Mumbai and serves shoppers across India with competitive
          pricing in Indian Rupees and responsive support.
        </p>
      </section>

      <section className="about-highlights">
        <h2>What we stand for</h2>
        <ul className="about-grid">
          {highlights.map((item) => (
            <li key={item.title} className="about-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-cta">
        <h2>Ready to explore?</h2>
        <p>Browse featured picks or check current offers to get started.</p>
        <div className="about-actions">
          <Link to="/" className="btn btn-primary">
            Shop home
          </Link>
          <Link to="/offers" className="btn btn-ghost">
            View offers
          </Link>
        </div>
      </section>
    </div>
  )
}
