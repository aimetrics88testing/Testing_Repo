import { useState } from 'react'
import './ChatBot.css'

const replies = [
  { match: /ship|deliver|track/i, text: 'Orders usually arrive in 3–7 business days. You’ll get a tracking link by email once shipped.' },
  { match: /return|refund/i, text: 'Unused items can be returned within 30 days for a full refund.' },
  { match: /price|rupee|₹|cost/i, text: 'All prices are shown in Indian Rupees (₹).' },
  { match: /cart|checkout/i, text: 'Open Cart from the header to update quantities and checkout.' },
  { match: /hello|hi|hey/i, text: 'Hi! I’m the ShopEase helper. Ask about shipping, returns, or prices.' },
]

function getReply(message) {
  const found = replies.find((r) => r.match.test(message))
  return found?.text ?? 'Thanks for your message! For more help, visit Customer Care or email care@shopease.demo.'
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I’m the ShopEase bot. How can I help?' },
  ])

  const send = (event) => {
    event.preventDefault()
    const text = input.trim()
    if (!text) return
    setMessages((prev) => [...prev, { from: 'user', text }, { from: 'bot', text: getReply(text) }])
    setInput('')
  }

  return (
    <div className="chatbot">
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="ShopEase chat bot">
          <header className="chatbot-header">
            <strong>ShopEase Bot</strong>
            <button type="button" className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>
          <ul className="chatbot-messages">
            {messages.map((msg, i) => (
              <li key={`${msg.from}-${i}`} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                {msg.text}
              </li>
            ))}
          </ul>
          <form className="chatbot-form" onSubmit={send}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about shipping, returns…"
              aria-label="Chat message"
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Open chat bot"
      >
        Chat
      </button>
    </div>
  )
}
