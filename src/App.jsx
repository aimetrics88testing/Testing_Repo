import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import CustomerCare from './pages/CustomerCare'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:slug" element={<Category />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="customer-care" element={<CustomerCare />} />
      </Route>
    </Routes>
  )
}
