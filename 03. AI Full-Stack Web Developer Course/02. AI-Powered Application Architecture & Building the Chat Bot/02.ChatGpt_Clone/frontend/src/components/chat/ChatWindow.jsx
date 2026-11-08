import { Sparkles } from 'lucide-react'

function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">

      <div className="flex items-center gap-3 mb-4">
        <Sparkles size={30} className="text-green-400" />

        <h1 className="text-3xl font-semibold">
          What can I help with?
        </h1>
      </div>

      <p className="text-gray-400 text-sm">
        Start a conversation by typing a message.
      </p>

    </div>
  )
}

export default ChatWindow