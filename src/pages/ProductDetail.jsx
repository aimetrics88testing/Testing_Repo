import { Link, useParams } from 'react-router-dom'
import { getCategoryBySlug, getProductById } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const category = product ? getCategoryBySlug(product.category) : null

  if (!product) {
    return (
      <div className="page-block">
        <h1>Product not found</h1>
        <p>That product does not exist or may have been removed.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="page-block product-detail-page">
      <p className="eyebrow">
        <Link to="/">Home</Link>
        {' / '}
        {category && (
          <>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
            {' / '}
          </>
        )}
        {product.name}
      </p>

      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          {category && <p className="product-detail-category">{category.name}</p>}
          <h1>{product.name}</h1>
          <p className="product-detail-price">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="product-detail-desc">
            Quality product from ShopEase. Review details, add to your cart, and checkout when
            you are ready.
          </p>
          <div className="product-detail-actions">
            <button type="button" className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            {category && (
              <Link to={`/category/${category.slug}`} className="btn btn-ghost">
                More in {category.name}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
