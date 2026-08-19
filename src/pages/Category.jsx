import { Link, useParams } from 'react-router-dom'
import { getCategoryBySlug, getProductsByCategory } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import './Category.css'

export default function Category() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const products = getProductsByCategory(slug)

  if (!category) {
    return (
      <div className="page-block">
        <h1>Category not found</h1>
        <p>That category does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="category-page page-block">
      <div className="section-head">
        <p className="eyebrow">
          <Link to="/">Home</Link> / Products
        </p>
        <h1>{category.name}</h1>
        <p>{products.length} products available</p>
      </div>
      <ProductGrid products={products} title={category.name} />
    </div>
  )
}
