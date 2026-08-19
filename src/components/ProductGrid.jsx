import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products, title, emptyMessage = 'No products found.' }) {
  if (!products.length) {
    return (
      <div className="product-grid-wrap">
        {title && <p className="product-grid-label">{title}</p>}
        <p className="product-grid-empty">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="product-grid-wrap">
      {title && <p className="product-grid-label">{title}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
