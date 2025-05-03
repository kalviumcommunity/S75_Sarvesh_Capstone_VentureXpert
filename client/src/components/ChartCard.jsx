import React from 'react';
import { motion } from 'framer-motion';

export function ChartCard({ title, children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold text-gray-100 mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}