import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories } from '../data/products'
import { useCart } from '../context/CartContext'
import './Header.css'

export default function Header() {
  const { itemCount } = useCart()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
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
          <div className="nav-item products-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`nav-link dropdown-trigger${open ? ' is-open' : ''}`}
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((prev) => !prev)}
            >
              Products
              <span className="chevron" aria-hidden="true" />
            </button>
            {open && (
              <ul className="dropdown-menu" role="menu">
                {categories.map((category) => (
                  <li key={category.slug} role="none">
                    <Link
                      to={`/category/${category.slug}`}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      {category.name}
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
