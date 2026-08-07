import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories, products } from '../data/products'
import { useCart } from '../context/CartContext'
import './Header.css'

export default function Header() {
  const { itemCount } = useCart()
  const [openMenu, setOpenMenu] = useState(null)
  const categoriesRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const inCategories = categoriesRef.current?.contains(event.target)
      const inProducts = productsRef.current?.contains(event.target)
      if (!inCategories && !inProducts) setOpenMenu(null)
    }
    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          ShopEase
        </Link>

        <nav className="header-nav" aria-label="Main">
          <div className="nav-item products-dropdown" ref={categoriesRef}>
            <button
              type="button"
              className={`nav-link dropdown-trigger${openMenu === 'categories' ? ' is-open' : ''}`}
              aria-expanded={openMenu === 'categories'}
              aria-haspopup="true"
              onClick={() => setOpenMenu((prev) => (prev === 'categories' ? null : 'categories'))}
            >
              Categories
              <span className="chevron" aria-hidden="true" />
            </button>
            {openMenu === 'categories' && (
              <ul className="dropdown-menu" role="menu">
                {categories.map((category) => (
                  <li key={category.slug} role="none">
                    <Link
                      to={`/category/${category.slug}`}
                      role="menuitem"
                      onClick={() => setOpenMenu(null)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="nav-item products-dropdown" ref={productsRef}>
            <button
              type="button"
              className={`nav-link dropdown-trigger${openMenu === 'products' ? ' is-open' : ''}`}
              aria-expanded={openMenu === 'products'}
              aria-haspopup="true"
              onClick={() => setOpenMenu((prev) => (prev === 'products' ? null : 'products'))}
            >
              Products
              <span className="chevron" aria-hidden="true" />
            </button>
            {openMenu === 'products' && (
              <ul className="dropdown-menu dropdown-menu-products" role="menu">
                {products.map((product) => (
                  <li key={product.id} role="none">
                    <Link
                      to={`/category/${product.category}`}
                      role="menuitem"
                      onClick={() => setOpenMenu(null)}
                    >
                      <span>{product.name}</span>
                      <span className="dropdown-price">₹{product.price.toLocaleString('en-IN')}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink to="/customer-care" className="nav-link">
            Customer Care
          </NavLink>

          <NavLink to="/cart" className="nav-link cart-link">
            Cart
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
