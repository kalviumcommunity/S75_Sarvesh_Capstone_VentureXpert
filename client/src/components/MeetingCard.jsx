import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Video, MapPin } from 'lucide-react';
import { format } from 'date-fns';

export function MeetingCard({ meeting, onJoin, onReschedule, onCancel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{meeting.title}</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{format(new Date(meeting.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>{format(new Date(meeting.date), 'h:mm a')}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Users className="w-4 h-4 mr-2" />
              <span>{meeting.participants.join(', ')}</span>
            </div>
            {meeting.location && (
              <div className="flex items-center text-gray-500">
                {meeting.isVirtual ? (
                  <Video className="w-4 h-4 mr-2" />
                ) : (
                  <MapPin className="w-4 h-4 mr-2" />
                )}
                <span>{meeting.location}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => onJoin(meeting.id)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Join Meeting
          </button>
          <button
            onClick={() => onReschedule(meeting.id)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Reschedule
          </button>
          <button
            onClick={() => onCancel(meeting.id)}
            className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
}