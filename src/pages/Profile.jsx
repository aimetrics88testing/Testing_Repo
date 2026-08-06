import { useState } from 'react'
import './Profile.css'

export default function Profile() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSaved(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <div className="page-block profile-page">
      <div className="section-head">
        <h1>Your profile</h1>
        <p>Manage your account details. Changes stay in this session only.</p>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Alex Morgan"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            required
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 555 0100"
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Save profile
        </button>
        {saved && <p className="save-note">Profile saved for this session.</p>}
      </form>
    </div>
  )
}
