import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products, emptyMessage = 'No products found.' }) {
  if (!products.length) {
    return <p className="product-grid-empty">{emptyMessage}</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
