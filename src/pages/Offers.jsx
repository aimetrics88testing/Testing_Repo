import { Link } from 'react-router-dom'
import './Offers.css'

const offers = [
  {
    id: 1,
    title: 'Electronics Fest',
    discount: '15% OFF',
    description: 'Save on headphones, watches, speakers, and more this week.',
    validUntil: '31 Aug 2026',
    link: '/category/electronics',
    linkLabel: 'Shop electronics',
  },
  {
    id: 2,
    title: 'Beauty Bonanza',
    discount: 'Buy 1 Get 1',
    description: 'Pick any two beauty essentials and pay for one at checkout.',
    validUntil: '20 Aug 2026',
    link: '/category/beauty-products',
    linkLabel: 'Shop beauty',
  },
  {
    id: 3,
    title: 'Medicine Care Deal',
    discount: 'Flat ₹50 OFF',
    description: 'On medicine orders above ₹299. Use code CARE50 at checkout.',
    validUntil: '15 Sep 2026',
    link: '/category/medicines',
    linkLabel: 'Shop medicines',
  },
  {
    id: 4,
    title: 'Fashion Friday',
    discount: '20% OFF',
    description: 'Extra discount on women and men dresses every Friday.',
    validUntil: 'Ongoing Fridays',
    link: '/category/women-dresses',
    linkLabel: 'Shop dresses',
  },
]

export default function Offers() {
  return (
    <div className="page-block offers-page">
      <div className="section-head">
        <h1>Offers</h1>
        <p>Current deals and savings across ShopEase categories.</p>
      </div>

      <ul className="offers-grid">
        {offers.map((offer) => (
          <li key={offer.id} className="offer-card">
            <p className="offer-discount">{offer.discount}</p>
            <h2>{offer.title}</h2>
            <p className="offer-desc">{offer.description}</p>
            <p className="offer-valid">Valid: {offer.validUntil}</p>
            <Link to={offer.link} className="btn btn-primary">
              {offer.linkLabel}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
