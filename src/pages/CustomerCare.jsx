import './CustomerCare.css'

const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Standard orders usually arrive within 3–7 business days depending on your location.',
  },
  {
    q: 'What is your return policy?',
    a: 'Unused items can be returned within 30 days of delivery for a full refund.',
  },
  {
    q: 'How do I track my order?',
    a: 'Once shipped, you will receive a tracking link by email. You can also check Profile for order updates.',
  },
]

export default function CustomerCare() {
  return (
    <div className="page-block care-page">
      <div className="section-head">
        <h1>Customer Care</h1>
        <p>We are here to help with orders, returns, and product questions.</p>
      </div>

      <div className="care-grid">
        <section className="care-panel">
          <h2>Contact us</h2>
          <p>
            Email:{' '}
            <a href="mailto:care@shopease.demo">care@shopease.demo</a>
          </p>
          <p>Phone: +1 (800) 555-0142</p>
          <p>Hours: Monday–Saturday, 9am–7pm</p>
        </section>

        <section className="care-panel">
          <h2>Frequently asked</h2>
          <ul className="faq-list">
            {faqs.map((item) => (
              <li key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
