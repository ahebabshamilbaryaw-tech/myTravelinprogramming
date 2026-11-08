import { useState, useEffect } from 'react'

import Sidebar from '../components/layout/Sidebar'
import ChatWindow from '../components/chat/ChatWindow'
import ChatInput from '../components/chat/ChatInput'
import MessageList from '../components/chat/MessageList'

import {
  createConversation,
  sendMessage,
  getMessages,
  getConversations,
} from '../services/chatService'

function ChatPage() {
  const [messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])
  const [conversationId, setConversationId] = useState(null)
  const [loading, setLoading] = useState(false)

  // Load conversations when the page opens
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await getConversations()
        setConversations(response.data)
      } catch (error) {
        console.error('Fetch Conversations Error:', error)
      }
    }

    fetchConversations()
  }, [])

  // Send message
  const handleSendMessage = async (content) => {
    try {
      setLoading(true)

      if (!conversationId) {
        // Create first conversation
        const response = await createConversation(content)
        const conversation = response.data

        setConversationId(conversation.conversationId)

        setMessages([
          {
            id: conversation.messageId,
            role: 'user',
            content: conversation.content,
          },
          {
            id: conversation.assistantMessage.messageId,
            role: conversation.assistantMessage.role,
            content: conversation.assistantMessage.content,
          },
        ])

        // Refresh conversation history
        const history = await getConversations()
        setConversations(history.data)

      } else {
        // Send another message
        await sendMessage(conversationId, content)

        // Get updated messages
        const response = await getMessages(conversationId)
        setMessages(response.data)
      }

    } catch (error) {
      console.error(
        'Chat Error:',
        error.response?.data || error.message
      )
    } finally {
      setLoading(false)
    }
  }

  // Start a new chat
  const handleNewChat = () => {
    setConversationId(null)
    setMessages([])
  }

  // Select an existing conversation
  const handleSelectConversation = async (id) => {
    try {
      setLoading(true)

      const response = await getMessages(id)

      setConversationId(id)
      setMessages(response.data)

    } catch (error) {
      console.error('Select Conversation Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#212121] text-white flex">

      <Sidebar
        conversations={conversations}
        onNewChat={handleNewChat}
        onSelectConversation={handleSelectConversation}
        activeConversationId={conversationId}
      />

      <main className="flex-1 h-screen flex flex-col">

        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <ChatWindow />
          ) : (
            <MessageList messages={messages} />
          )}
        </div>

        <div className="w-full flex justify-center p-4">
          <ChatInput
            onSend={handleSendMessage}
            loading={loading}
          />
        </div>

      </main>
    </div>
  )
}

export default ChatPage