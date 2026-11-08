function MessageList({ messages }) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 p-4">

      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.role === 'user'
              ? 'justify-end'
              : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[80%] p-4 rounded-2xl ${
              message.role === 'user'
                ? 'bg-[#303030]'
                : 'bg-transparent'
            }`}
          >
            <p className="text-sm whitespace-pre-wrap">
              {message.content}
            </p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default MessageList