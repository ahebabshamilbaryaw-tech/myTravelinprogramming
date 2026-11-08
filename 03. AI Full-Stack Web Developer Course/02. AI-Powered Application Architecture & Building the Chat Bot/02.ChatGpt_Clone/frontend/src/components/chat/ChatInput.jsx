import { useState } from 'react'
import { Plus, Send, LoaderCircle } from 'lucide-react'

function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!message.trim() || loading) return

    onSend(message)
    setMessage('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-[#303030] rounded-2xl p-3"
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={loading ? 'Waiting for response...' : 'Message ChatGPT...'}
        rows={2}
        disabled={loading}
        className="w-full bg-transparent text-white outline-none resize-none p-2 disabled:opacity-50"
      />

      <div className="flex items-center justify-between mt-2">
        <button
          type="button"
          disabled={loading}
          className="p-2 rounded-full hover:bg-[#444] disabled:opacity-40"
        >
          <Plus size={20} />
        </button>

        <button
          type="submit"
          disabled={!message.trim() || loading}
          className="p-2 rounded-full bg-white text-black disabled:opacity-40"
        >
          {loading ? (
            <LoaderCircle size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
        </button>
      </div>
    </form>
  )
}

export default ChatInput