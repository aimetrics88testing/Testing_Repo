import { useEffect, useRef, useState } from 'react'
import './ChatBot.css'

const replies = [
  {
    match: /ship|deliver|track/i,
    text: 'Orders usually arrive in 3–7 business days. You’ll get a tracking link by email once shipped.',
  },
  {
    match: /return|refund/i,
    text: 'Unused items can be returned within 30 days for a full refund.',
  },
  {
    match: /price|rupee|₹|cost/i,
    text: 'All prices are shown in Indian Rupees (₹).',
  },
  {
    match: /cart|checkout/i,
    text: 'Open Cart from the header to update quantities and checkout.',
  },
  {
    match: /hello|hi|hey/i,
    text: 'Hi! I’m the ShopEase helper. Ask about shipping, returns, or prices.',
  },
]

const quickReplies = ['Track my order', 'Return policy', 'Shipping times', 'Payment options']

function getReply(message) {
  const found = replies.find((r) => r.match.test(message))
  return (
    found?.text ??
    'Thanks for your message! For more help, visit Customer Care or email care@shopease.demo.'
  )
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      from: 'bot',
      text: 'Hi! I’m Ava, your ShopEase assistant. How can I help today?',
      at: new Date(),
    },
  ])
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const replyTimer = useRef(null)

  useEffect(() => {
    return () => {
      if (replyTimer.current) clearTimeout(replyTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const node = listRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [messages, typing, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const pushBotReply = (userText) => {
    setTyping(true)
    if (replyTimer.current) clearTimeout(replyTimer.current)
    replyTimer.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          from: 'bot',
          text: getReply(userText),
          at: new Date(),
        },
      ])
      setTyping(false)
    }, 700)
  }

  const sendMessage = (rawText) => {
    const text = rawText.trim()
    if (!text || typing) return

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        from: 'user',
        text,
        at: new Date(),
      },
    ])
    setInput('')
    pushBotReply(text)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chatbot">
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="ShopEase support chat" aria-modal="false">
          <header className="chatbot-header">
            <div className="chatbot-agent">
              <span className="chatbot-avatar" aria-hidden="true">
                A
              </span>
              <div className="chatbot-agent-meta">
                <strong>ShopEase Support</strong>
                <span className="chatbot-status">
                  <span className="chatbot-status-dot" aria-hidden="true" />
                  Online · typically replies instantly
                </span>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <ul className="chatbot-messages" ref={listRef}>
            {messages.map((msg) => (
              <li key={msg.id} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                <p className="chatbot-msg-text">{msg.text}</p>
                <time className="chatbot-msg-time" dateTime={msg.at.toISOString()}>
                  {formatTime(msg.at)}
                </time>
              </li>
            ))}
            {typing && (
              <li className="chatbot-msg chatbot-msg-bot chatbot-typing" aria-live="polite">
                <span />
                <span />
                <span />
              </li>
            )}
          </ul>

          <div className="chatbot-suggestions" aria-label="Suggested questions">
            {quickReplies.map((label) => (
              <button
                key={label}
                type="button"
                className="chatbot-chip"
                onClick={() => sendMessage(label)}
                disabled={typing}
              >
                {label}
              </button>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about shipping, returns…"
              aria-label="Chat message"
              autoComplete="off"
            />
            <button type="submit" className="chatbot-send" disabled={!input.trim() || typing} aria-label="Send message">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M3.4 20.6 21 12 3.4 3.4 3.3 10.1 15 12 3.3 13.9z"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`chatbot-toggle${open ? ' is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open support chat'}
      >
        {open ? (
          <span className="chatbot-toggle-label">Close</span>
        ) : (
          <>
            <span className="chatbot-toggle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  fill="currentColor"
                  d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm2 4v2h12V8H6zm0 4v2h8v-2H6z"
                />
              </svg>
            </span>
            <span className="chatbot-toggle-label">Need help?</span>
          </>
        )}
      </button>
    </div>
  )
}
