
import {
  MessageSquare,
  Plus,
  PanelLeftClose,
  Trash2,
} from 'lucide-react'

function Sidebar({
  conversations,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
  activeConversationId,
}) {
  return (
    <aside className="w-64 h-screen bg-[#171717] text-white flex flex-col p-3">

      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-semibold">
          ChatGPT
        </h2>

        <PanelLeftClose
          size={20}
          className="text-gray-400"
        />
      </div>

      {/* New Chat Button */}
      <button
        onClick={onNewChat}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2a2a2a] transition"
      >
        <Plus size={20} />
        <span>New Chat</span>
      </button>

      {/* Conversation History */}
      <div className="mt-8 flex-1 overflow-y-auto">

        <h3 className="text-xs text-gray-400 mb-3 px-2">
          Your Chats
        </h3>

        <div className="flex flex-col gap-1">

          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center rounded-lg group ${
                Number(activeConversationId) === Number(conversation.id)
                  ? 'bg-[#303030]'
                  : 'hover:bg-[#2a2a2a]'
              }`}
            >
              {/* Select Conversation */}
              <button
                onClick={() =>
                  onSelectConversation(conversation.id)
                }
                className="flex-1 min-w-0 flex items-center gap-3 p-3 text-left"
              >
                <MessageSquare size={18} />

                <span className="text-sm truncate">
                  {conversation.title}
                </span>
              </button>

              {/* Delete Conversation */}
              <button
                onClick={() =>
                  onDeleteConversation(conversation.id)
                }
                className="p-2 mr-2 text-gray-400 hover:text-red-400"
                title="Delete conversation"
              >
                <Trash2 size={16} />
              </button>

            </div>
          ))}

          {conversations.length === 0 && (
            <p className="text-sm text-gray-500 px-3">
              No conversations yet.
            </p>
          )}

        </div>
      </div>

      {/* User Profile */}
      <div className="border-t border-gray-700 pt-3">
        <div className="flex items-center gap-3 p-2">

          <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center">
            U
          </div>

          <span className="text-sm font-medium">
            User
          </span>

        </div>
      </div>

    </aside>
  )
}

export default Sidebar
