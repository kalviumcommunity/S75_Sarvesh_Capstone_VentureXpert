import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Smile } from 'lucide-react';
import { format } from 'date-fns';

export function ChatWindow({ thread }) {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <img
            src={thread.avatar}
            alt={thread.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">{thread.name}</h3>
            <p className="text-sm text-gray-500">
              {thread.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {thread.messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md ${
              msg.sent
                ? 'bg-indigo-600 text-white rounded-l-lg rounded-br-lg'
                : 'bg-gray-100 text-gray-900 rounded-r-lg rounded-bl-lg'
            } p-4`}>
              <p>{msg.content}</p>
              <p className={`text-xs mt-1 ${
                msg.sent ? 'text-indigo-200' : 'text-gray-500'
              }`}>
                {format(new Date(msg.timestamp), 'h:mm a')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <Smile className="w-5 h-5" />
          </button>
          <button
            type="submit"
            className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}