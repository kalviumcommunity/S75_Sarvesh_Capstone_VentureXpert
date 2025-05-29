import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export function MessageThread({ thread, onSelect, isActive }) {
  const lastMessage = thread.messages[thread.messages.length - 1];

  return (
    <motion.div
      whileHover={{ x: 4 }}
      onClick={() => onSelect(thread.id)}
      className={`p-4 cursor-pointer transition-colors ${
        isActive ? 'bg-indigo-50' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={thread.avatar}
              alt={thread.name}
              className="w-12 h-12 rounded-full"
            />
            <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
              thread.online ? 'bg-green-400' : 'bg-gray-400'
            }`} />
          </div>
          <div className="ml-4">
            <h4 className="text-sm font-medium text-gray-900">{thread.name}</h4>
            <p className="text-sm text-gray-500 truncate">{lastMessage.content}</p>
          </div>
        </div>
        <div className="text-xs text-gray-500">
          {format(new Date(lastMessage.timestamp), 'MMM d')}
        </div>
      </div>
      {thread.unread > 0 && (
        <div className="mt-2 flex justify-end">
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-indigo-600 rounded-full">
            {thread.unread}
          </span>
        </div>
      )}
    </motion.div>
  );
}