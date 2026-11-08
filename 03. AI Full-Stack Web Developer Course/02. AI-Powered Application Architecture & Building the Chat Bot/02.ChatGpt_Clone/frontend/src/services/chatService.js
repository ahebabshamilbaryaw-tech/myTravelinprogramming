import api from './api'

// Create new conversation
export const createConversation = async (question) => {
  const response = await api.post('/conversations', {
    question,
  })

  return response.data
}

// Get recent conversations
export const getConversations = async () => {
  const response = await api.get('/conversations')

  return response.data
}

// Get conversation messages
export const getMessages = async (conversationId) => {
  const response = await api.get(
    `/conversations/${conversationId}/messages`
  )

  return response.data
}


// Send message
export const sendMessage = async (conversationId, content) => {
  const response = await api.post(
    `/conversations/${conversationId}/messages`,
    {
      content,
    }
  )

  return response.data
}
// Rename conversation
export const renameConversation = async (conversationId, title) => {
  const response = await api.put(
    `/conversations/${conversationId}`,
    {
      title,
    }
  )

  return response.data
}

// Delete conversation
export const deleteConversation = async (conversationId) => {
  const response = await api.delete(
    `/conversations/${conversationId}`
  )

  return response.data
}