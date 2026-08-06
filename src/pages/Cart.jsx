import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

export default function Cart() {
  const { items, subtotal, updateQuantity, removeFromCart, clearCart } = useCart()

  if (!items.length) {
    return (
      <div className="page-block cart-empty">
        <h1>Your cart is empty</h1>
        <p>Browse products and add items you love.</p>
        <Link to="/" className="btn btn-primary">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="page-block cart-page">
      <div className="cart-header">
        <h1>Your cart</h1>
        <button type="button" className="btn btn-ghost" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <div className="cart-layout">
        <ul className="cart-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="qty-controls">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-side">
                <p className="line-total">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <p className="summary-note">Shipping and taxes calculated at checkout.</p>
          <button type="button" className="btn btn-primary btn-block">
            Proceed to checkout
          </button>
          <Link to="/" className="continue-link">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
